const CourseName = () => {
  return (
    <div
      className="row subFont courseBg"
      style={{
        backgroundColor: "#f0f2f7", // ✅ 배경색 적용
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* ✅ 입력 필드 */}
      <div className="row px-20 pb-20 mt-10">
        <div className="col-12 titleFont text-14">코스명</div>
        <div className="col-12">
          <input
            className="inpBox rounded-2"
            type="text"
            style={{
              width: "100%", // 가득 차도록 설정
              height: "40px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#fff", // ✅ 입력 필드 배경 흰색 유지
              outline: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseName;
