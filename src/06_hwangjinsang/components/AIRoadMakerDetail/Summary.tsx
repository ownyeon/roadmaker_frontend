import { useEffect, useState } from "react";
import Card from "./Card";
import CourseName from "./CourseName";
import ScheduleEdit from "./ScheduleEdit";
import TravelList from "./TravelList";
import TravelAIDetail from "./TravelAIDetail";

const Summary = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isScheduleEdit, setIsScheduleEdit] = useState(false);
  const [isTravelDetail, setIsTravelDetail] = useState(false);
  const [editOpenString, setEditOpenString] = useState("");
  const [detailOpenString, setDetailOpenString] = useState("");
  // 일정편집 이벤트
  const scheduleOpenHandler = () => {
    setIsScheduleEdit(!isScheduleEdit);
  };
  // 여행지 추가 이벤트
  const editOpenHandler = () => {
    if (isTravelDetail) {
      setIsTravelDetail(false);
    }
    setIsEditOpen(((prev)=>!prev));
  };
  // 상세보기 띄우는 이벤트
  const travelDetail = () => {
    if (isEditOpen) {
      setIsEditOpen(false);
    }
    setIsTravelDetail((prev)=>!prev);
  };
  // 상세보기 boolean 값 변경시 오픈 클로즈 이벤트
  useEffect(() => {
    setDetailOpenString(isTravelDetail ? "open" : "");
  }, [isTravelDetail]);
  // 여행지 추가 boolean 값 변경시 오픈 클로즈 이벤트
  useEffect(() => {
    setEditOpenString(isEditOpen ? "open" : "");
  }, [isEditOpen]);

  const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.closest(".day")) {
      const tags = Array.from(
        target.closest(".daySelector")!.children
      ) as HTMLElement[];
      tags.forEach((tag: HTMLElement) => {
        if (tag) {
          tag.classList.remove("titleFont");
        }
      });
      const menu = target.closest(".day") as HTMLElement;
      menu.classList.add("titleFont");
    }
  };
  return (
    <>
      {isScheduleEdit ? (
        <CourseName
          setIsScheduleEdit={setIsScheduleEdit}
          setIsEditOpen={setIsEditOpen}
        />
      ) : (
        <Card />
      )}
      <div className="row subFont mt-20">
        <div className="col-12 d-flex justify-between mb-15">
          <div className="daySelector" onClick={childClickHandle}>
            <span className="mr-20 pointer day titleFont">Day 1</span>
            <span className="mr-20 pointer day">Day 2</span>
            <span className="mr-20 pointer day">Day 3</span>
          </div>
          <span className="pointer softColor" onClick={scheduleOpenHandler}>
            {isScheduleEdit ? "" : "일정편집"}
          </span>
        </div>
        <hr />
        <TravelList travelDetail={travelDetail} />
        <TravelList travelDetail={travelDetail} />
        <TravelList travelDetail={travelDetail} />
        <TravelList travelDetail={travelDetail} />
        {isScheduleEdit ? (
          <div className="col-12 flex-center pointer text-center">
            <div
              className="travelAdd text-20 titleFont"
              onClick={editOpenHandler}
            >
              여행지 추가 +
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <ScheduleEdit
        editOpenString={editOpenString}
        setEditOpenString={setEditOpenString}
        setIsEditOpen={setIsEditOpen}
      />
      <TravelAIDetail
        setIsTravelDetail={setIsTravelDetail}
        detailOpenString={detailOpenString}
        setDetailOpenString={setDetailOpenString}
      />
    </>
  );
};

export default Summary;
