import Sidebar from "../../components/AIRoadMakerDetail/Sidebar";
import "../../styles/common.scss";
import "../../styles/AIRoadMakerDetail.scss";
import Map from "../../components/common/map/LoadMap";

const AIRoadMakerDetail = () => {
  return (
    <div className="container aIRoadMakerDetail">
      <Sidebar />
      <div><Map longitude={36.683034} latitude={124.602435}/></div>
    </div>
  );
};

export default AIRoadMakerDetail;
