import React from 'react';
import '../../styles/tourLIstTitle.scss'; // CSS 파일 임포트

interface TourListTitleTagProps {
  title: string;
  tags: string[];
}

const TourListTitleTag: React.FC<TourListTitleTagProps> = ({ title, tags }) => {
  return (
    <div className="container">
      <div className="col-12 text-24 text-center titleFont">{title}</div>
      <div className="row text-center">
        <div className="col-4 items-center justify-end d-flex">
          <i className="bi bi-hash text-60"></i>
        </div>
        <div className="col-6 text-start text-24 subFont items-center d-flex">
          <div className="row">
            {tags.map((tag, index) => (
              <div key={index} className="col-auto">{tag}</div>
            ))}
          </div>
        </div>
      </div>
      {/* 조회수 & 좋아요 / 신고 & 찜 버튼 */}
      <div className="row softColor mt-3">
        <div className="col-6 d-flex align-items-center text-24">
          <i className="bi bi-eye fs-10 me-2"></i>
          <span className="me-3">10k</span>
          <i className="bi bi-heart fs-10 me-2 pointer"></i>
          <span>30</span>
        </div>

        <div className="col-6 text-end text-24">
          <i className="bi bi-exclamation-triangle fs-10 me-3 pointer"></i>
          <i className="bi bi-bookmark fs-10 pointer"></i>
        </div>
      </div>
      <hr />
      <div className="row text-center mt-4">
        <div className="col-3">
          <button className="btn transparent-button w-100 py-5 text-20">사진 보기</button>
        </div>
        <div className="col-3">
          <button className="btn transparent-button w-100 py-5 text-20">상세 정보</button>
        </div>
        <div className="col-3">
          <button className="btn transparent-button w-100 py-5 text-20">댓글</button>
        </div>
        <div className="col-3">
          <button className="btn transparent-button w-100 py-5 text-20">추천 여행</button>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default TourListTitleTag;
