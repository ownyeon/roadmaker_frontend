import ChartMainList from "./ChartMainList";

export const MiniChart = () => {
  return (
    <div className="row bg-white chartList">
      <div className="col-12 text-end add"><button className="addBtn">추가 +</button></div>
      <div className="col-4 pointer">
        <div className="row">
          <div className="col-12 softColor text-12">방문자</div>
          <div className="col-12 titleFont text-18 mt-20 mb-20 d-flex justify-between items-center">
            <span>587</span>
            <span className="subFont text-10" style={{ color: "#81e696" }}>
              12.54%
            </span>
          </div>
          <div className="col-12">
            <ChartMainList color={"#81e696"} />
          </div>
        </div>
      </div>
      <div className="col-4 pointer">
        <div className="row">
          <div className="col-12 softColor text-12">회원가입</div>
          <div className="col-12 titleFont text-18 mt-20 mb-20 d-flex justify-between items-center">
            <span>154</span>
            <span className="subFont text-10" style={{ color: "#e77171" }}>
              12.54%
            </span>
          </div>
          <div className="col-12">
            <ChartMainList color={"#e77171"} />
          </div>
        </div>
      </div>
      <div className="col-4 pointer">
        <div className="row">
          <div className="col-12 softColor text-12">AI 코스 생성</div>
          <div className="col-12 titleFont text-18 mt-20 mb-20 d-flex justify-between items-center">
            <span>1587</span>
            <span className="subFont text-10" style={{ color: "#81e696" }}>
              12.54%
            </span>
          </div>
          <div className="col-12">
            <ChartMainList color={"#81e696"} />
          </div>
        </div>
      </div>
    </div>
  );
};
