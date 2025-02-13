import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMakerCity.scss";
import "../../styles/AIRoadMakerStart.scss";
import "../../styles/common.scss";

const AIRoadMakerCity = () => {
    const navigate = useNavigate();
  const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.closest(".tag")) {
      const tags = Array.from(
        target.closest(".row")!.children
      ) as HTMLElement[];
      tags.forEach((tag: HTMLElement) => {
        const div = tag.querySelector("div");
        if (div) {
          div.classList.remove("active");
        }
      });

      const clickedDiv = target.closest(".tag")!.querySelector("div");
      if (clickedDiv) {
        clickedDiv.classList.add("active");
      }
    }
  };
  return (
    <div className="aIRoadMakerCity text-center">
      <div className="col-12 titleFont welcome">AI 로드메이커</div>
      <div className="col-12 subFont sub">이번 여행, 어디로 떠나볼까요?</div>
      <div className="col-12 titleFont title">여행을 떠나고 싶은 지역을</div>
      <div className="col-12 titleFont title">선택해 주세요.</div>
      <div
        className="row subFont text-center mt-50"
        onClick={childClickHandle}
      >
        <div className="col-2 tag sub">
          <div>경산시</div>
        </div>
        <div className="col-2 tag sub">
          <div>성주군</div>
        </div>
        <div className="col-2 tag sub">
          <div>안동시</div>
        </div>
        <div className="col-2 tag sub">
          <div>영덕군</div>
        </div>
        <div className="col-2 tag sub">
          <div>영양군</div>
        </div>
        <div className="col-2 tag sub">
          <div>영주시</div>
        </div>
        <div className="col-2 tag sub">
          <div>영천시</div>
        </div>
        <div className="col-2 tag sub">
          <div>예천군</div>
        </div>
        <div className="col-2 tag sub">
          <div>울릉군</div>
        </div>
        <div className="col-2 tag sub">
          <div>울진군</div>
        </div>
        <div className="col-2 tag sub">
          <div>의성군</div>
        </div>
        <div className="col-2 tag sub">
          <div>경주시</div>
        </div>
        <div className="col-2 tag sub">
          <div>청도군</div>
        </div>
        <div className="col-2 tag sub">
          <div>문경시</div>
        </div>
        <div className="col-2 tag sub">
          <div>봉화군</div>
        </div>
        <div className="col-2 tag sub">
          <div>상주시</div>
        </div>
        <div className="col-2 tag sub">
          <div>김천시</div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-6 titleFont actionBtn">
          <div onClick={()=>{navigate("/airoadmaker/county")}}>이전</div>
        </div>
        <div className="col-6 titleFont actionBtn">
          <div onClick={()=>{navigate("/airoadmaker/schedule")}}>다음</div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMakerCity;
