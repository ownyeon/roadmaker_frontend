import RoadTalkComponent from "../components/roadtalk/RoadTalkComponent";
import RoadTalkSidebar from "../components/roadtalk/roadtalk-sidebar";
import "../styles/RoadTalk.scss";
const RoadTalk = () => {
  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-7">
              <div className="row y-gap-30 roadTalkList">
                <RoadTalkComponent />
              </div>
            </div>
            {/* End .col */}
            <div className="col-xl-4 roadTalkSidebar">
              <RoadTalkSidebar />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </>
  );
};

export default RoadTalk;
