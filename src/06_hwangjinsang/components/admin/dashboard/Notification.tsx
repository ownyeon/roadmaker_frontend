export const Notification = () => {
  return (
    <div className="row subFont">
      <div className="col-12 text-20 mb-20">• 미확인 알림</div>
      <div className="row travel mb-20">
        <div className="col-7">• 여행지 신고</div>
        <div className="col-5 text-end text-14">
          <button>신고 관리 이동</button>
        </div>
        <div className="col-12 mt-10 text-14">신규신고 : 경포대 회 맛집 1호 ... 외 5건</div>
      </div>
      <div className="row comment mb-20">
        <div className="col-7">• 댓글 신고</div>
        <div className="col-5 text-end text-14">
          <button>신고 관리 이동</button>
        </div>
        <div className="col-12 mt-10 text-14">신규신고 : XXXX욕욕욕욕 ... 외 15건</div>
      </div>
      <div className="row newTravel mb-10">
        <div className="col-7">• 신규 여행지 등록</div>
        <div className="col-5 text-end text-14">
          <button>여행지 관리 이동</button>
        </div>
        <div className="col-12 mt-10 text-14">신규신고 : 두리둥실 맛집 ... 외 15건</div>
      </div>
    </div>
  );
};
