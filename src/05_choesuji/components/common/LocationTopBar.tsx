const LocationTopBar = () => {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <h2 className="sectionTitle__title">여행지 찾기</h2>
      <p className="sectionTitle__text mt-5 sm:mt-0">
        다채로운 즐거움이 가득한 로드메이커의 여행지 찾기!
      </p>
      <section
        data-aos="fade"
        className="d-flex items-center py-15 border-top-light"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="container">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              {/* Blog1을 여기에 배치하여 상단에 위치하도록 변경 */}
              
              <div style={{ marginBottom: "20px" }}>
              
              </div>
              
              <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
            
                <div className="col-auto">
                  <div>여행지</div>
                </div>
                <div className="col-auto">
                  <div>&gt;</div>
                </div>
                <div className="col-auto">
                  <div>여행지찾기</div>
                </div>
              </div>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationTopBar;
