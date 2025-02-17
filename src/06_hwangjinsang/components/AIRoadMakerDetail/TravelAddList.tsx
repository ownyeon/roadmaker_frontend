const TravelAddList = () => {
  return (
    <div className="travelAddList mt-10">
        <hr className="mr-10 ml-10" />
      <div className="row mt-20 mb-20">
        <div className="col-4">
            <img className="rounded-5" src="/src/06_hwangjinsang/assets/imgs/Albanian.jpg" alt="여행지사진" />
        </div>
        <div className="col-6">
          <div className="titleFont">고풍</div>
          <div className="softColor subFont text-14">경상북도 봉화군</div>
        </div>
        <div className="col-2 d-flex items-center justify= subFont ">
          <button>추가</button>
        </div>
      </div>
      <hr className="mr-10 ml-10" />
      <div className="col-12 text-center"><button className="more titleFont">더보기 +</button></div>
    </div>
  );
};

export default TravelAddList;
