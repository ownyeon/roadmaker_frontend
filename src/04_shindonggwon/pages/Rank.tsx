import React from "react";
import CallToActions from "../components/common/CallToActions";
import LocationTopBar from "../components/common/LocationTopBar";
import Blog1 from "../components/blog/RankTag";

const Rank = () => {
  return (
    <>
      {/* <MetaComponent meta={metadata} />
      <div className="header-margin"></div>
      header top margin */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">여행지 순위</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                다채로운 즐거움이 가득한 로드메이커의 여행지 찾기!
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

    </>
  );
};

export default Rank;
