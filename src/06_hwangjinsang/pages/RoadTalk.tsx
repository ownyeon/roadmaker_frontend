import RoadTalkComponent from "../components/roadtalk/RoadTalkComponent";
import RoadTalkSidebar from "../components/roadtalk/RoadTalkSidebar";
import "../styles/RoadTalk.scss";
const RoadTalk = () => {
  return (
    <>
      <div className="roadTalkContainer">
        <div className="row">
          <div className="col-xl-4 left">
            <RoadTalkSidebar />
          </div>
          <div className="col-xl-8">
            <RoadTalkComponent />
          </div>
          <div className="col-xl-4 right">
            <RoadTalkSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadTalk;
