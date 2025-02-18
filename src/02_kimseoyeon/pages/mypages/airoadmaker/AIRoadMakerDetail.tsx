import Map from "../../../components/common/map/LoadMap";
import Summary from "../../../components/common/AIRoadMakerDetail/Summary";
import Sidebar from "../../../components/common/mypage/Sidebar";
import { Link } from "react-router-dom";


const AIRoadMakerDetail = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard__main">
        <div className="dashboard__content full-width">
          <h1 className="text-30 lh-14 fw-600 titleFont" style={{ marginBottom: "10px" }}>
            여행 코스
          </h1>
          <p className="text-15 text-light-1 subFont" style={{ marginBottom: "25px" }}>
            내가 저장한 여행 코스를 확인할 수 있습니다.
          </p>

          <div className="map-container">
            <div className="summary-container">
              <Summary />
            </div>
            <Map longitude={36.683034} latitude={124.602435} />
          </div>

          <div className="btn-container">
            <Link to="/airoadmaker" className="button small-btn">여행코스 만들기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMakerDetail;
