import React from "react";
import FestivalForm from "./FestivalForm";

const NewFestival: React.FC = () => {
  return (
    <div>
      <div>
      <h1 style={{ fontWeight: 'bold' }}>신규 축제 등록 요청</h1>
        <p style={{ marginTop: "20px"}}>로드메이커에서 제공하지 않는 새로운 여행정보를 요청해주세요.</p>

        <section  // 섹션맞춰 나눔 
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
          <FestivalForm />       
        </section>
      </div>
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