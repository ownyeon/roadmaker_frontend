import React from "react";
import ReportForm from "../components/blog/ReportForm";


const TourListReport: React.FC = () => {
  return (
    <div>
      <div>
      <h1 style={{ fontWeight: 'bold' }}>여행지 신고하기</h1>
        <p style={{ marginTop: "20px"}}>알고 계신 정보와 다른 정보가 있나요? 제보를 해주세요!</p>

        <section  // 섹션맞춰 나눔 
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
          <ReportForm />       
        </section>
      </div>
    </div>
  );
};

export default TourListReport;
