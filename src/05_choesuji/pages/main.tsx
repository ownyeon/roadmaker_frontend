import React from "react";
import CallToActions from "../components/common/CallToActions";
import LocationTopBar from "../components/common/LocationTopBar";
import Blog1 from "../components/blog/blog-sidebar/Blog1.tsx"





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
            <h2 className="sectionTitle__title"></h2>
              <div className="sectionTitle -md">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
              
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog1/>
    <CallToActions />
      {/* End Call To Actions Section */}


      {/* End Call To Actions Section */}
    </>
  );
};

export default FindTourList;
