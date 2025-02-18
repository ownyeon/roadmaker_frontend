import { useState } from "react";
import CourseName from "./CourseName";
import TravelList from "./TravelList";

const Summary = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1); // ✅ 현재 선택된 Day 상태

  // ✅ Day 클릭 시 변경되는 함수
  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const travelDetail = () => {
    console.log("여행지 상세보기 클릭됨");
  };

  return (
    <>
      {/* ✅ 코스명 입력 필드 */}
      <CourseName />

      <div className="row subFont mt-20">
        <div className="col-12 d-flex justify-between mb-15">
          <div className="daySelector">
            <span
              className={`mr-20 pointer day ${selectedDay === 1 ? "titleFont" : ""}`}
              onClick={() => handleDayClick(1)}
            >
              Day 1
            </span>
            <span
              className={`mr-20 pointer day ${selectedDay === 2 ? "titleFont" : ""}`}
              onClick={() => handleDayClick(2)}
            >
              Day 2
            </span>
            <span
              className={`mr-20 pointer day ${selectedDay === 3 ? "titleFont" : ""}`}
              onClick={() => handleDayClick(3)}
            >
              Day 3
            </span>
          </div>
        </div>
        <hr />

        {/* ✅ 선택된 Day에 따라 TravelList 변경 */}
        {selectedDay === 1 && (
          <>
            <TravelList travelDetail={travelDetail} />
            <TravelList travelDetail={travelDetail} />
          </>
        )}
        {selectedDay === 2 && (
          <>
            <TravelList travelDetail={travelDetail} />
            <TravelList travelDetail={travelDetail} />
            <TravelList travelDetail={travelDetail} />
          </>
        )}
        {selectedDay === 3 && (
          <>
            <TravelList travelDetail={travelDetail} />
          </>
        )}
      </div>
    </>
  );
};

export default Summary;
