const TravelList = ({travelDetail}:{travelDetail:()=>void}) => (
    // 추후 map을 이용해서 불러오기
  <div className="row" >
    <div className="col-4 pointer" onClick={travelDetail}>
      <img
        className="rounded-8"
        src="/src/06_hwangjinsang/assets/imgs/coffee.jpg"
        alt="여행지사진"
      />
    </div>
    <div className="col-7 pointer d-flex flex-column" onClick={travelDetail}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-12">
          <div className="titleFont">봄화은어축제</div>
          <div className="softColor text-14 ">여행지</div>
        </div>
        <div className="col-12 text-14 ">경상북도 봉화군 봉화읍 내성리</div>
      </div>
    </div>
    <div className="col-1 ">
      <i className="bi bi-bookmark pointer"></i>
    </div>
    <hr className="mt-10" />
  </div>
);

export default TravelList;
