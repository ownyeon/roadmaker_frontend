import { useState } from "react";
import ScheduleEdit from "./ScheduleEdit";
import TravelList from "./TravelList";
import Card from "./Card";
import CourseName from "./CourseName";

const Summary = () => {
    const [isEditOpen,setIsEditOpen] = useState(false);

    const editOpenHandler = () =>{
        setIsEditOpen(!isEditOpen);
    }

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
          const menu = (target.closest(".day") as HTMLElement);
          menu.classList.add("titleFont");
        }
    }
  return<>
    {isEditOpen ?  <CourseName setIsEditOpen={setIsEditOpen}/> : <Card/> }
    <div className="row subFont mt-20">
      <div className="col-12 d-flex justify-between mb-15">
        <div className="daySelector" onClick={childClickHandle}>
          <span className="mr-20 pointer day titleFont">Day 1</span>
          <span className="mr-20 pointer day">Day 2</span>
          <span className="mr-20 pointer day">Day 3</span>
        </div>
        <span className="pointer softColor" onClick={editOpenHandler}>{isEditOpen?"":"일정편집"}</span>
      </div>
      <hr />
      <TravelList/>
      {isEditOpen?<div className="col-12 flex-center pointer text-center">
        <div className="travelAdd text-20 titleFont">여행지 추가 +</div>
      </div>: ""}
    </div>
    {isEditOpen ? <ScheduleEdit/> : "" }
  </>
};

export default Summary;
