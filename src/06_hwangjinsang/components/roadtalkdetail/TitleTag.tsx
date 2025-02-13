const TitleTag = () => (
  <div className="container">
    <div className="col-12 text-24 text-center titleFont">하늘다리 코스</div>
    <div className="col-12 text-16 text-center subFont softColor mb-100">
      지역 | 코스 총 거리 : 00KM
    </div>
    <div className="row softColor ">
      <div className="col-6 text-24">
        <i className="bi bi-eye mr-5"></i>
        <span className="mr-20">10k</span>
        <i className="bi bi-chat-square-heart mr-5 pointer"></i>
        <span className="">30</span>
      </div>
      <div className="col-6 text-end text-24">
        <i className="bi bi-exclamation-triangle mr-20 pointer"></i>
        <i className="bi bi-bookmark pointer"></i>
      </div>
      <hr />
    </div>
    <div className="row text-center mt-50">
      <div className="col-6 text-end ">
        <i className="bi bi-calendar2-week text-48"></i>
      </div>
      <div className="col-6 text-start items-center d-flex">
        <div className="row">
          <div className="softColor text-16 subFont">일정</div>
          <div className="text-24 titleFont ">2박3일</div>
        </div>
      </div>
    </div>
    <div className="row text-center mt-50">
      <div className="col-4 items-center justify-end d-flex">
        <i className="bi bi-hash text-60"></i>
      </div>
      <div className="col-6 text-start text-24 subFont items-center d-flex">
        <div className="row">
          <div className="col-auto">#바다</div>
          <div className="col-auto">#가족</div>
          <div className="col-auto">#바닷길</div>
          <div className="col-auto">#겨울바다</div>
          <div className="col-auto">#아이들</div>
          <div className="col-auto">#부모님</div>
          <div className="col-auto">#힐링여행</div>
          <div className="col-auto">#강원도</div>
        </div>
      </div>
    </div>
  </div>
);

export default TitleTag;
