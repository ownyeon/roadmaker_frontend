import React, { useState } from "react";

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
    if (isAllYear) {
      setSelectedDays([]); // 연중무휴 해제 시 선택된 요일 초기화
    }
  };


  // 직접입력 버튼 클릭 시
  const handleCustomInputToggle = () => {
    setIsCustomInput(!isCustomInput);
    if (isCustomInput) {
      setCustomDay(""); // 직접입력 해제 시 내용 초기화
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
    setIsDisabled(true); // 새로고침 후 버튼 비활성화
  };

  setTimeout(() => {
    setIsDisabled(false);
  }, 100) //1초후 버튼 활성화로 돌아오게끔 

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
              style={{ fontSize: '15px', padding: '15px 30px', margin: "13px"}} //버튼크기 및 간격격 
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
            style={{ fontSize: '18px', padding: '15px 30px', margin: "10px"}} //버튼크기 및 간격격 
          >
            연중무휴
          </button>

          {/* 직접입력 버튼 */}
          <button
            type="button"
            className={`btn ${isCustomInput ? "btn-primary" : "btn-light"}`}
            onClick={handleCustomInputToggle}
            disabled={isDisabled} // 새로고침 상태에서 비활성화
            style={{ fontSize: '18px', padding: '15px 30px', margin: "10px"}} //버튼크기 및 간격격 
          >
            직접입력
          </button>
          
        </div>

        {/* 연중무휴일 때 표시 */}
        {isAllYear && (
          <div className="mt-2">
            연중무휴로 설정됨
          </div>
        )}

        {/* 직접입력 시 텍스트 입력창 표시 */}
        {isCustomInput && (
          <div className="mt-2">
            <input
              type="text"
              value={customDay}
              onChange={handleCustomInputChange}
              placeholder="휴일을 입력하세요"
            />
          </div>
        )}
      </div>


      {/* Youtube Video */}
      <div className="col-12">
        <h3>Youtube Video</h3>
        <div className="form-input">
          <input type="text" name="youtubeVideo" required />
          <label className="lh-1 text-16 text-light-1">Youtube Video</label>
        </div>
      </div>
    </div>
  );
};

export default HotelContent;
