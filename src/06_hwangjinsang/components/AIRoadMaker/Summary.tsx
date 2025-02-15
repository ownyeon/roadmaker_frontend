import TravelList from "./TravelList";

const Summary = () => {
    const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target && target.closest(".day")) {
          const tags = Array.from(
            target.closest(".daySelector")!.children
          ) as HTMLElement[];
          tags.forEach((tag: HTMLElement) => {
            if (tag) {
              tag.classList.remove("titleFont");
            }
          });
          const menu = (target.closest(".day") as HTMLElement);
          menu.classList.add("titleFont");
        }
    }
  return<>
    <div className="row flex-center cardBg">
      <div className="col-12 titleFont text-20 pt-10 text-white">
        -님을 위한 여행코스
      </div>
      <div className="row flex-center cardCn">
        <div className="col-3">
          <img src="/src/06_hwangjinsang/assets/imgs/1.png" alt="일정아이콘" />
        </div>
        <div className="col-9">
          <div className="row subFont text-12">
            <div className="col-12">·총이동거리 : 100KM</div>
            <div className="col-12">·여행지역 : 경남남해군 - 경남 남해군</div>
            <div className="col-12">·총 9개 여행지 추천!</div>
          </div>
        </div>
      </div>
    </div>
    <div className="row subFont mt-20">
      <div className="col-12 d-flex justify-between mb-10">
        <div className="daySelector" onClick={childClickHandle}>
          <span className="mr-10 pointer day titleFont">Day 1</span>
          <span className="mr-10 pointer day">Day 2</span>
          <span className="mr-10 pointer day">Day 3</span>
        </div>
        <span className="pointer softColor" >일정편집</span>
      </div>
      <hr />
      <TravelList/>
    </div>
  </>
};

export default Summary;
