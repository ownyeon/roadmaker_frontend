import { useState } from "react";
import TravelAddList from "./TravelAddList";

const ScheduleEdit = ({
  editOpenString,
  setEditOpenString,
  setIsEditOpen,
}: {
  editOpenString: string;
  setEditOpenString: React.Dispatch<React.SetStateAction<string>>;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [travelName, setTravelName] = useState("");

  return (
    <div className={`scheduleEdit ${editOpenString}`}>
      <div className="row subFont text-16">
        <div className="row searchInput text-center">
          <div className="col-1 d-flex justify-center ">
            <i className="bi bi-search pointer"></i>
          </div>
          <div className="col-10">
            <input
              type="text"
              placeholder="여행지명"
              value={travelName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTravelName(e.target.value);
              }}
            />
          </div>
          <div className="col-1">
            <i
              className="icon icon-close pointer"
              onClick={() => {
                setEditOpenString("");
                setIsEditOpen((prev)=>!prev);
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="row mt-10">
        <div className="col-1 d-flex justify-start">
          <i className="bi bi-check-square-fill fs-1"></i>
        </div>
        <div className="col-11">
          <div className="text-14 mt-4">검색지역:경상북도 봉화군</div>
          <div className="text-10">
            (현재 일자에 해당하는 지역에 한하여 검색결과를 제공)
          </div>
        </div>
      </div>
      <TravelAddList />
    </div>
  );
};

export default ScheduleEdit;
