import RankList from "../components/blog/RankList";
import "../styles/common.scss";

const metadata = {
  title: "Blog List V1 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Rank = () => {
  return (
    <>
    <div className="calendar-component">
      <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
        <div className="col-auto">
          <div>여행지</div>
        </div>
        <div className="col-auto">
          <div>&gt;</div>
        </div>
        <div className="col-auto">
          <div>여행지 순위</div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="titleFont">여행지 순위</h2>
              <p className="subFont">지금 이순간 가장 핫한 여행지</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr />
        <RankList />
        
    </div>
    
      
    </>
  );
};

export default Rank;
