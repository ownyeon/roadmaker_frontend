import React from "react";

interface IconKeywordProps {
  setFilterOption: (keyword: string) => void; // setFilterOption을 props로 받음
}

const IconKeyword: React.FC<IconKeywordProps> = ({ setFilterOption }) => {
  const handleBlockClick = (keyword: string) => {
    // '#'을 붙여서 키워드 전달
    setFilterOption(`#${keyword}`);
  };

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="section-title section-title--md">
              <h2 className="section-title__title">여행지 순위</h2>
              <p className="section-title__text mt-5 sm:mt-0">
                다채로운 즐거움이 가득한 로드메이커의 여행지 찾기!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-center gap-4 my-5">
          <div
            className="col-lg-3 col-sm-4"
            onClick={() => handleBlockClick("여행지")}
            style={{ cursor: "pointer" }}
          >
            <div className="feature-icon feature-icon--type-1 feature-icon--hover-shadow px-30 py-30 lg:px-20 lg:py-15">
              <div className="d-flex justify-center">
                <img
                  src="/img/RankKeyword/여행지.png"
                  alt="여행지 키워드 아이콘"
                  className="js-lazy"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-sm-4"
            onClick={() => handleBlockClick("맛집")}
            style={{ cursor: "pointer" }}
          >
            <div className="feature-icon feature-icon--type-1 feature-icon--hover-shadow px-30 py-30 lg:px-20 lg:py-15">
              <div className="d-flex justify-center">
                <img
                  src="/img/RankKeyword/맛집.png"
                  alt="맛집 키워드 아이콘"
                  className="js-lazy"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-sm-4"
            onClick={() => handleBlockClick("숙소")}
            style={{ cursor: "pointer" }}
          >
            <div className="feature-icon feature-icon--type-1 feature-icon--hover-shadow px-30 py-30 lg:px-20 lg:py-15">
              <div className="d-flex justify-center">
                <img
                  src="/img/RankKeyword/숙소.png"
                  alt="숙소 키워드 아이콘"
                  className="js-lazy"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconKeyword;
