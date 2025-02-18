import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ActionsButton from "../travelcourse/ActionsButton";


const TravelList = ({travelDetail}:{travelDetail:()=>void}) => (
    // 추후 map을 이용해서 불러오기
  <div className="row" >
    <div className="col-4 pointer" onClick={travelDetail}>
      <img
        className="rounded-8"
        src="/src/06_hwangjinsang/assets/imgs/coffee.jpg"
        alt="여행지사진"
      />
    </div>

    <div className="col-8 pointer d-flex flex-column" onClick={travelDetail}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-12 d-flex justify-between align-items-center">
          <div className="titleFont">봄화은어축제</div>
          <ActionsButton customFilters={[
              { label: "위로 이동", value: "moveUp", icon: <FaArrowUp /> },
              { label: "아래로 이동", value: "moveDown", icon: <FaArrowDown /> },
            ]} />

        </div>
        <div className="col-12 softColor text-14">여행지</div>
        <div className="col-12 text-14">경상북도 봉화군 봉화읍 내성리</div>
      </div>
    </div>


    {/* <div className="col-1 ">
      <i className="bi bi-bookmark pointer"></i>
    </div> */}
    <hr className="mt-10" />
  </div>
);

export default TravelList;
