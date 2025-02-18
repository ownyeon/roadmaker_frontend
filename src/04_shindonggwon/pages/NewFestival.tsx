import React from "react";
import FestivalForm from "../components/blog/FestivalForm";
import "../styles/common.scss"

const NewFestival: React.FC = () => {
  return (
    <div className="calendar-component">
      <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
        <div className="col-auto">
          <div>여행지</div>
        </div>
        <div className="col-auto">
          <div>&gt;</div>
        </div>
        <div className="col-auto">
          <div>축제 달력</div>
        </div>
        <div className="col-auto">
          <div>&gt;</div>
        </div>
        <div className="col-auto">
          <div>신규 축제 등록 요청</div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="titleFont">신규 축제 등록 요청</h2>
              <p className="subFont">로드메이커에서 제공하지 않는 새로운 여행정보를 요청해주세요.</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr />
      <FestivalForm />       
    </div>
    
  );
};

export default NewFestival;





// const NewRegister = {
//   return(
//   title: "Settings  GoTrip - Travel & Tour ReactJs Template",
//   description: "GoTrip - Travel & Tour ReactJs Template",
//   )
// };