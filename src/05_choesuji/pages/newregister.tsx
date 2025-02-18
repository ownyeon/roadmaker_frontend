import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TourRegist from '../components/add-hotel/components/content/TourRegist'

const NewRegister: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Settings || GoTrip - Travel & Tour ReactJs Template</title>
        <meta
          name="description"
          content="GoTrip - Travel & Tour ReactJs Template"
        />
      </Helmet>

      <div>
      <h1 style={{ fontWeight: 'bold' }}>관광정보 신규요청</h1>
        <p style={{ marginTop: "0px"}}>로드메이커에서 제공하지 않는 새로운 여행정보를 요청해주세요.</p>
        
        <section  // 섹션맞춰 나눔 
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
          <TourRegist />
        </section>

        <p>Welcome to the settings page of GoTrip! - 위치2</p>
      </div>
    </HelmetProvider>
  );
};

export default NewRegister;





// const NewRegister = {
//   return(
//   title: "Settings || GoTrip - Travel & Tour ReactJs Template",
//   description: "GoTrip - Travel & Tour ReactJs Template",
//   )
// };


