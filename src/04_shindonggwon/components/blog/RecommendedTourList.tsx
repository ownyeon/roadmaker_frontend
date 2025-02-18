import blogsData from "../../data/tourList"; // 여행지 데이터 import

const RecommendedTourList = ({ currentTourId }: { currentTourId: number }) => {
  // 현재 여행지 가져오기
  const currentTour = blogsData.find((tour) => tour.id === currentTourId);

  if (!currentTour) {
    return <div>추천할 여행지가 없습니다.</div>;
  }

  // 현재 여행지의 태그 목록
  const currentTags = new Set(currentTour.tags);

  // 태그 겹치는 개수를 기준으로 추천 여행지 정렬
  const recommendedTours = blogsData
    .filter((tour) => tour.id !== currentTourId) // 현재 여행지 제외
    .map((tour) => {
      const commonTags = tour.tags.filter((tag) => currentTags.has(tag));
      return { ...tour, matchCount: commonTags.length }; // 겹치는 태그 개수 추가
    })
    .filter((tour) => tour.matchCount > 0) // 최소 1개 이상의 태그가 겹치는 경우만 추천
    .sort((a, b) => b.matchCount - a.matchCount) // 태그가 많이 겹치는 순서로 정렬
    .slice(0, 4); // 최대 4개 추천

  return (
    <div className="recommendedToursContainer">
      <h2> "{currentTour.title}" 와(과) 유사한 여행지 추천</h2>
      <hr />
      <div className="recommendedToursList">
        {recommendedTours.length > 0 ? (
          recommendedTours.map((tour) => (
            <div key={tour.id} className="recommendedTourItem">
              <img src={tour.img} alt={tour.title} width="150" />
              <h3>{tour.title}</h3>
              <p>공통 태그: {tour.tags.filter((tag) => currentTags.has(tag)).join(", ")}</p>
            </div>
          ))
        ) : (
          <p>유사한 여행지를 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedTourList;
