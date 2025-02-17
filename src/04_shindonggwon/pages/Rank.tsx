import RankList from "../components/blog/RankList";

const metadata = {
  title: "Blog List V1 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Rank = () => {
  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
            </div>
          </div>
          <RankList />
          
        </div>
      </section>
      
    </>
  );
};

export default Rank;
