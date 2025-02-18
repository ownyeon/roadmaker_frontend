
export const CommentComplaint = () => {
  return (
    <div className="travelComplaint subFont row px-10 py-10">
      <div className="col-8">
        <div className="row">
          <div className="col-12 d-flex justify-start items-end">
            <span className="text-14 mr-10">댓글 신고</span>
            <span className="text-10 mr-10 softColor complete"> 처리 완료</span>
            <span className="text-10 ml-10">신고 회수 : 1</span>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex justify-end items-center">
        <div className="row text-10 ">
          <div className="col-12 ">
            <button className="locationBtn">해당 댓글 이동</button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row text-12">
            <div className="col-12">신고 위치 : 여행지/경포 회 맛집 1호</div>
            <div className="col-12">신고 댓글 : XXXXXXX</div>
            <div className="col-12">신고 내용 : 욕설 댓글</div>
            <div className="col-12">신고자 : adfa123</div>
            <div className="col-12">처리 내용 : 댓글 삭제</div>
        </div>
      </div>
    </div>
  );
};
