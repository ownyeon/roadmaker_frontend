const RoadTalkSidebar = () => {
  return (
    // 추후 데이터베이스에서 가져오기
    <div className="sidebar">
      <div className="row tagCate">
        <div className="col-1">#</div>
        <div className="col-10">떠들석 댓글 순위 TOP 50</div>
        <div className="col-1"></div>
      </div>
      <div className="row tagCate">
        <div className="col-1">#</div>
        <div className="col-10">이달의 추천 순위 TOP 50</div>
        <div className="col-1"></div>
      </div>
      <div className="row tagCate">
        <div className="col-1">#</div>
        <div className="col-10">랜덤랜덤! 랜덤추천</div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default RoadTalkSidebar;
