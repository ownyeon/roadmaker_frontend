import StateSelect from "./StateSelect";

export const TravelComplaint = () => {
  return (
    <div className="travelComplaint subFont row px-10 py-10">
      <div className="col-8">
        <div className="row">
          <div className="col-12 d-flex justify-start items-end">
            <span className="text-14 mr-10">여행지 신고</span>
            <StateSelect/>
            <span className="text-10 ml-10">신고 회수 : 1</span>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex justify-end items-center">
        <div className="row text-10 ">
          <div className="col-12 ">
            <button className="locationBtn">해당 여행지 이동</button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row text-12">
            <div className="col-12">신고여행지 : 경포 회 맛집 1호</div>
            <div className="col-12">신고내용 : 해당 음식 금액이 잘못 설정 되어있습니다...</div>
            <div className="col-12">신고자 : adfa123</div>
        </div>
      </div>
    </div>
  );
};
