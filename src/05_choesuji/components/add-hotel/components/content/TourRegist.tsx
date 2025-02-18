import React, { useEffect, useState } from "react";
import GalleryUploader from "./GalleryUploader";


// HotelContent 컴포넌트
const HotelContent: React.FC = () => {

  // 각 입력칸 해당 정의 
  const [title, setTitle] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [businessHours, setBusinessHours] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [inquiries, setInquiries] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");

  // 선택된 요일을 저장할 상태 (여러 요일을 배열로 저장)
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  // 연중무휴 옵션 상태 (true/false)
  const [isAllYear, setIsAllYear] = useState<boolean>(false);
  // 직접입력 활성화 상태
  const [isCustomInput, setIsCustomInput] = useState<boolean>(false);
  // 직접입력 내용 상태
  const [customDay, setCustomDay] = useState<string>("");
  // 새로고침 시 전체 버튼 비활성화 상태 관리
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // 요일 버튼 클릭 시 상태 업데이트
  const handleDayChange = (day: string) => {
    if (!isAllYear && !isCustomInput) {
      setSelectedDays((prevSelectedDays) =>
        prevSelectedDays.includes(day)
          ? prevSelectedDays.filter((selectedDay) => selectedDay !== day) // 이미 선택된 요일은 제거
          : [...prevSelectedDays, day] // 선택되지 않은 요일은 추가
      );
    }
  };

  // 연중무휴 버튼 클릭 시 모든 요일 버튼 비활성화
  const handleAllYearToggle = () => {
    setIsAllYear(!isAllYear);
    if (!isAllYear) {
      setIsCustomInput(false); // 연중무휴 선택 시, 직접입력 비활성화
      setCustomDay(""); // 연중무휴 선택 시, 직접입력 값 초기화
    }
    if (isAllYear) {
      setSelectedDays([]); // 연중무휴 해제 시 선택된 요일 초기화
    }
  };

  // 직접입력 버튼 클릭 시
  const handleCustomInputToggle = () => {
    setIsCustomInput(!isCustomInput);
    if (!isCustomInput) {
      setIsAllYear(false); // 직접입력 선택 시, 연중무휴 비활성화
    }
    if (isCustomInput) {
      setSelectedDays([]); // 직접입력 선택 시, 선택된 요일 초기화
    }
  };

  // 직접입력 내용 변경
  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDay(e.target.value);
  };

  // 새로고침 버튼 클릭 시 모든 상태 초기화
  const handleReset = () => {
    setSelectedDays([]);
    setIsAllYear(false);
    setIsCustomInput(false);
    setCustomDay("");
    setIsDisabled(true); // 새로고침 후 버튼 초기화
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 1); //즉시 버튼 활성화로 돌아오게끔 
    return () => clearTimeout(timer); // 컴포넌트가 unmount 될 때 타이머 정리
  }, [isDisabled]);

  // 취소 버튼 클릭 시 폼 내용 초기화
  const handleCancel = () => {
    setTitle("");
    setAddress("");
    setDetails("");
    setBusinessHours("");
    setWebsite("");
    setInquiries("");
    setKeywords("");
    setSelectedDays([]);
    setIsAllYear(false);
    setIsCustomInput(false);
    setCustomDay("");
  };

  // 등록 버튼 클릭 시 처리 (예: API 호출 등)
  const handleRegister = () => {
    // 여기에서 등록 API 호출 등 처리 추가
    console.log("등록된 내용:", {
      title,
      address,
      details,
      businessHours,
      website,
      inquiries,
      keywords,
      selectedDays,
      isAllYear,
      isCustomInput,
      customDay
    });
  };

  return (
    <div className="row x-gap-20 y-gap-20">
      {/* 제목(관광지/업소명 등) */}
      <div className="col-12">
        <h3>제목(관광지/업소명 등)</h3>
        <div className="form-input1">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // title 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 주소 */}
      <div className="col-12">
        <h3>주소</h3>
        <div className="form-input1">
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)} // address 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 상세정보 */}
      <div className="col-12">
        <h3>상세정보</h3>
        <div className="form-input1">
          <input
            type="text"
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)} // details 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 이용시간 */}
      <div className="col-12">
        <h3>이용시간</h3>
        <div className="form-input1">
          <input
            type="text"
            name="businessHours"
            value={businessHours}
            onChange={(e) => setBusinessHours(e.target.value)} // businessHours 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 홈페이지 */}
      <div className="col-12">
        <h3>홈페이지</h3>
        <div className="form-input1">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)} // website 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 문의 */}
      <div className="col-12">
        <h3>문의</h3>
        <div className="form-input1">
          <input
            type="text"
            name="inquiries"
            value={inquiries}
            onChange={(e) => setInquiries(e.target.value)} // inquiries 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 요청키워드 */}
      <div className="col-12">
        <h3>요청키워드</h3>
        <div className="form-input1">
          <input
            type="text"
            name="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)} // keywords 상태 업데이트
            required
          />
          <label className="lh-1 text-16 text-left-1"></label>
        </div>
      </div>

      {/* 휴일 옵션 */}
      <div className="col-12">
        <div className="d-flex align-items-center gap-2">
          <h3>휴일</h3>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleReset} // 리셋 버튼
          >
            초기화
          </button>
        </div>

        <div className="btn-group" role="group">
          {/* 월요일부터 일요일까지의 버튼 */}
          {["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"].map((day) => (
            <button
              key={day}
              type="button"
              className={`btn ${selectedDays.includes(day) ? "btn-primary" : "btn-light"}`}
              onClick={() => handleDayChange(day)}
              disabled={isAllYear || isCustomInput || isDisabled} // 연중무휴일 때 버튼 비활성화, 직접입력 활성화 시 버튼 비활성화, 새로고침 상태일 때 비활성화
              style={{ fontSize: '15px', padding: '15px 30px', margin: "13px" }} //버튼크기 및 간격격
            >
              {day}
            </button>
          ))}

          {/* 연중무휴 버튼 (마지막에 배치) */}
          <button
            type="button"
            className={`btn ${isAllYear ? "btn-primary" : "btn-light"}`}
            onClick={handleAllYearToggle}
            disabled={isDisabled} // 새로고침 상태에서 비활성화
            style={{ fontSize: '15px', padding: '15px 30px', margin: "13px" }} //버튼크기 및 간격격
          >
            연중무휴
          </button>

          {/* 직접입력 버튼 */}
          <button
            type="button"
            className={`btn ${isCustomInput ? "btn-primary" : "btn-light"}`}
            onClick={handleCustomInputToggle}
            disabled={isDisabled} // 새로고침 상태에서 비활성화
            style={{ fontSize: '15px', padding: '15px 30px', margin: "13px" }} //버튼크기 및 간격격
          >
            직접입력
          </button>
        </div>

        {/* 직접입력 시 텍스트 입력창 표시 */}
        {isCustomInput && (
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              value={customDay}
              onChange={handleCustomInputChange}
              placeholder="휴일을 직접 입력하세요"
              style={{
                width: "100%",          // 너비 100%로 설정
                padding: "10px",        // 여백
                fontSize: "14px",       // 글자 크기
                display: "block",       // 블록 레벨 요소로 설정
                border: "1px solid #ccc", // 테두리 추가
                borderRadius: "4px",    // 둥근 테두리
              }} // input 스타일에 테두리 추가
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        )}

        {/* 갤러리 업로더 섹션 */}
        <section style={{ marginTop: "20px" }}>
          <h3>업체 사진</h3>
          <GalleryUploader />
        </section>
      </div>
      {/* 취소 및 등록 버튼 */}

      <div className="d-flex justify-between mt-4" style={{ position: 'relative' }}>
        {/* 취소 버튼: 크기 키우고 중앙 정렬 */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
          style={{
            width: '200px',
            height: '50px',
            fontSize: '20px',
            marginRight: '10px',
            backgroundColor: 'white',
            color: 'black',
            position: 'absolute',
            bottom: '20px', // 하단 20px 간격
            right: '250px', // 오른쪽 220px 간격 (버튼 크기 + margin을 고려)
            marginTop: '100px' // 버튼 위에 30px 여백 추가
          }}>
          취소
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleRegister}
          style={{
            width: '200px',
            height: '50px',
            fontSize: '20px',
            marginRight: '10px',
            backgroundColor: 'black',
            color: 'white',
            position: 'absolute',
            bottom: '20px', // 하단 20px 간격
            right: '10px', // 오른쪽 10px 간격 (취소 버튼과의 간격)
            marginTop: '100px' // 버튼 위에 30px 여백 추가
          }}>
          등록
        </button>
      </div>
    </div>

  );
};

export default HotelContent;
