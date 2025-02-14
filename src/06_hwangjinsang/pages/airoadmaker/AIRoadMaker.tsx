import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMaker.scss";
import "../../styles/common.scss";

const AIRoadMaker = () => {
    const navigate = useNavigate();
  return (
    <div className="aIRoadMaker">
      <div className="container px-30">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row d-flex items-center" style={{ height: "50%" }}>
              <div className="col-12 text-30 titleFont mt-30 title">
                AI 로드메이커
              </div>
              <div className="col-12 text-20 titleFont mt-10 sub">
                여행, 고민은 줄이고 설렘은 더하다.
              </div>
              <div className="col-12 text-20 titleFont mt-5 sub">
                취향과 일정에 맞춘 맞춤형 여행 코스, 단 한 번의 클릭으로.
              </div>
              <div className="col-12 text-20 titleFont mt-5 sub">
                당신의 여정을 더 스마트하게.
              </div>
            </div>
            <div className="row d-flex items-center" style={{ height: "50%" }}>
              <div className="col-12 titleFont mb-30">
                <button className="btn text-20 tagBtn px-50" onClick={()=>{navigate("/airoadmaker/start")}}>코스만들기</button>
              </div>
            </div>
          </div>
          <div className="col-6 tagCol">
            <div className="row d-flex items-center">
              <div className="col-12 d-flex justify-end text-20 titleFont mt-30">
                <div className="tag"># 나만의 코스 만들기</div>
              </div>
              <div className="col-12 d-flex justify-end text-20 titleFont mt-20">
                <div className="tag"># 나만의 코스 공유!</div>
              </div>
              <div className="col-12 d-flex justify-end text-20 titleFont mt-20">
                <div className="tag"># 가장 인기 있는 코스는?</div>
              </div>
              <div className="col-12 d-flex justify-end text-20 titleFont mt-20 mb-30">
                <div className="tag"># 내가 바로 코스왕!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMaker;
