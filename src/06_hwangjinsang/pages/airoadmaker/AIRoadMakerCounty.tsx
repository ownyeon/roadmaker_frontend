import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMakerCity.scss";
import "../../styles/AIRoadMakerStart.scss";
import "../../styles/common.scss";

const AIRoadMakerCounty = () => {
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
    <div className="aIRoadMakerCounty text-center">
      <div className="col-12 titleFont welcome">AI 로드메이커</div>
      <div className="col-12 subFont sub">이번 여행, 어디로 떠나볼까요?</div>
      <div className="col-12 titleFont title">여행을 떠나고 싶은 지역을</div>
      <div className="col-12 titleFont title">선택해 주세요.</div>
      <div
        className="row subFont text-16 text-center mt-50"
        onClick={childClickHandle}
      >
        <div className="col-2 tag sub">
          <div>서울</div>
        </div>
        <div className="col-2 tag sub">
          <div>부산</div>
        </div>
        <div className="col-2 tag sub">
          <div>대구</div>
        </div>
        <div className="col-2 tag sub">
          <div>인천</div>
        </div>
        <div className="col-2 tag sub">
          <div>광주</div>
        </div>
        <div className="col-2 tag sub">
          <div>대전</div>
        </div>
        <div className="col-2 tag sub">
          <div>울산</div>
        </div>
        <div className="col-2 tag sub">
          <div>세종</div>
        </div>
        <div className="col-2 tag sub">
          <div>경기</div>
        </div>
        <div className="col-2 tag sub">
          <div>강원</div>
        </div>
        <div className="col-2 tag sub">
          <div>충북</div>
        </div>
        <div className="col-2 tag sub">
          <div>충남</div>
        </div>
        <div className="col-2 tag sub">
          <div>전북</div>
        </div>
        <div className="col-2 tag sub">
          <div>전남</div>
        </div>
        <div className="col-2 tag sub">
          <div>경북</div>
        </div>
        <div className="col-2 tag sub">
          <div>경남</div>
        </div>
        <div className="col-2 tag sub">
          <div>제주</div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-6 titleFont actionBtn">
          <div onClick={()=>{navigate("/airoadmaker/start")}}>이전</div>
        </div>
        <div className="col-6 titleFont actionBtn">
          <div onClick={()=>{navigate("/airoadmaker/city")}}>다음</div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMakerCounty;
