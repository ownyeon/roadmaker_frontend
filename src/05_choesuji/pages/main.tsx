import React from "react";
import CallToActions from "../components/common/CallToActions";
import LocationTopBar from "../components/common/LocationTopBar";





const FindTourList: React.FC= () => {
  return (
    <>
      
      <div className="header-margin"></div>
      {/* header top margin */}

      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
            <h2 className="sectionTitle__title">여행지 찾기</h2>
              <div className="sectionTitle -md">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  다채로운 즐거움이 가득한 로드메이커의 여행지 찾기!
                </p>
                <Blog1 />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}


      {/* End Call To Actions Section */}
    </>
  );
};

export default FindTourList;
