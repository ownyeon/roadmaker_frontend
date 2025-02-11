import LocationTopBar from "../components/common/social/LocationTopBar";
import RoadTalkComponent from "../components/roadtalk/RoadTalkComponent";
import RoadTalkSidebar from "../components/roadtalk/roadtalk-sidebar";
import "../styles/RoadTalk.scss";
const RoadTalk = () => {
  return (
    <>
      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row y-gap-30">
                <RoadTalkComponent />
              </div>
            </div>
            {/* End .col */}
            <div className="col-xl-3 roadTalkSidebar">
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
