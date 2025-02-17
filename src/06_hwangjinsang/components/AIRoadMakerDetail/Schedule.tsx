import { useEffect, useState } from "react";
import TravelList from "./TravelList";
import TravelAIDetail from "./TravelAIDetail";

const Schedule = () => {
  const [isTravelDetail, setIsTravelDetail] = useState(false);
  const [detailOpenString, setDetailOpenString] = useState("");

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
  const travelDetail = () => {
    setIsTravelDetail((prev) => !prev);
  };
  // 상세보기 boolean 값 변경시 오픈 클로즈 이벤트
  useEffect(() => {
    setDetailOpenString(isTravelDetail ? "open" : "");
  }, [isTravelDetail]);
  return (
    <>
      <div className="row subFont mt-10">
        <div className="col-12 d-flex justify-between mb-10">
          <div className="daySelector" onClick={childClickHandle}>
            <span className="mr-20 pointer day titleFont">Day 1</span>
            <span className="mr-20 pointer day">Day 2</span>
            <span className="mr-20 pointer day">Day 3</span>
          </div>
        </div>
        <hr />
        <TravelList travelDetail={travelDetail} />
      </div>
      <TravelAIDetail
        setIsTravelDetail={setIsTravelDetail}
        detailOpenString={detailOpenString}
        setDetailOpenString={setDetailOpenString}
      />
    </>
  );
};

export default Schedule;
