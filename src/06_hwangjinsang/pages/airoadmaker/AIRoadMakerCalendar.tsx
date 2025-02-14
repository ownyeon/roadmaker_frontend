import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMakerPages.scss";
import "../../styles/AIRoadMakerStart.scss";
import "../../styles/common.scss";

const AIRoadMakerCalendar = () => {
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
    <div className="aIRoadMakerCalendar text-center">
      <div className="col-12 titleFont welcome">
        2박 3일은 2개 지역 선택 가능
      </div>
      <div className="col-12 titleFont title">여행 기간을</div>
      <div className="col-12 titleFont title">선택해 주세요.</div>
      <div className="row titleFont text-center mt-50" onClick={childClickHandle}>
        <div className="col-4 tag sub">
          <div>
            <img src="/src/06_hwangjinsang/assets/imgs/1.png" alt="당일여행" />
            <div className="mt-20">당일 여행</div>
          </div>
        </div>
        <div className="col-4 tag sub">
          <div>
            <img src="/src/06_hwangjinsang/assets/imgs/1-2.png" alt="당일여행" />
            <div className="mt-20">1박 2일</div>
          </div>
        </div>
        <div className="col-4 tag sub">
          <div>
            <img src="/src/06_hwangjinsang/assets/imgs/2_3.png" alt="당일여행" />
            <div className="mt-20">2박 3일</div>
          </div>
        </div>
      </div>
      <div className="row mt-100">
        <div className="col-6 titleFont actionBtn">
          <div
            onClick={() => {
              navigate("/airoadmaker/city");
            }}
          >
            이전
          </div>
        </div>
        <div className="col-6 titleFont actionBtn">
          <div
            onClick={() => {
              navigate("/airoadmaker/keyword");
            }}
          >
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMakerCalendar;
