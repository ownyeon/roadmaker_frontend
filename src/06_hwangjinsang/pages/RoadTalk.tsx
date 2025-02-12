<<<<<<< Updated upstream
=======
import LocationTopBar from "../components/common/social/LocationTopBar";
>>>>>>> Stashed changes
import RoadTalkComponent from "../components/roadtalk/RoadTalkComponent";
import RoadTalkSidebar from "../components/roadtalk/roadtalk-sidebar";
import "../styles/RoadTalk.scss";
const RoadTalk = () => {
  return (
    <>
<<<<<<< Updated upstream
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-7">
              <div className="row y-gap-30 roadTalkList">
=======
      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row y-gap-30">
>>>>>>> Stashed changes
                <RoadTalkComponent />
              </div>
            </div>
            {/* End .col */}
<<<<<<< Updated upstream
            <div className="col-xl-4 roadTalkSidebar">
=======
            <div className="col-xl-3 roadTalkSidebar">
>>>>>>> Stashed changes
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
