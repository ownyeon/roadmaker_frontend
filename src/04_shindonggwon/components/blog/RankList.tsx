import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import blogsData from "../../data/tourList";
import RankMap from "./RankMap";

interface Tour {
  id: number;
  img: string;
  title: string;
  date: string;
  delayAnimation: string;
  details: string;
  tags: string[];
}

const RankList = () => {
  const [filterOption, setFilterOption] = useState<string[]>([]); // 선택된 필터 태그
  const [filteredItems, setFilteredItems] = useState<Tour[]>([]); // 필터링된 여행지 리스트

  // 선택된 태그를 포함하는 여행지 리스트 필터링
  useEffect(() => {
    setFilteredItems(
      blogsData.filter((elm) =>
        filterOption.length === 0 || filterOption.every((tag) => elm.tags.includes(tag))
      )
    );
  }, [filterOption]);

  const filterOptions = [
    { label: "#여행지", value: "#여행지" },
    { label: "#맛집", value: "#맛집" },
    { label: "#숙소", value: "#숙소" },
  ];

  // 필터 버튼 클릭 시 태그 추가/제거
  const handleFilterClick = (value: string) => {
    setFilterOption((prev) =>
      prev.includes(value) ? prev.filter((tag) => tag !== value) : [...prev, value]
    );
  };

  // 지도에서 마커 클릭 시 태그 추가 (RankMap에서 호출할 예정)
  const handleMapClick = (value: string) => {
    setFilterOption((prev) =>
      prev.includes(value) ? prev : [...prev, value] // 중복 추가 방지
    );
  };

  return (
    <div className="tabs -pills-3 pt-30 js-tabs">
      {/* 필터 버튼 */}
      <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls">
        {filterOptions.map((option) => (
          <div className="col-auto" key={option.value}>
            <button
              className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                filterOption.includes(option.value) ? "is-tab-el-active" : ""
              }`}
              onClick={() => handleFilterClick(option.value)}
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>

      {/* 지도 표시 */}
      <div style={{ marginTop: "40px" }}>
        <RankMap onMapClick={handleMapClick} /> {/* RankMap에 함수 전달 */}
      </div>

      {/* 여행지 리스트 */}
      <div className="row y-gap-30 pt-30">
        {filteredItems.slice(0, 9).map((item) => {
          console.log(`/TourListDetail/${item.id}`); // 콘솔 로그 위치 수정
          return (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link to={`/TourListDetail/${item.id}`} className="blogCard -type-1 d-block">
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img className="cover w-100 img-fluid" src={item.img} alt="image" />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RankList;
