import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMakerPages.scss";
import "../../styles/AIRoadMakerStart.scss";
import "../../styles/common.scss";
import { useState } from "react";

const AIRoadMakerKeyword = () => {
  const navigate = useNavigate();
  const [activeNum, setActiveNum] = useState<number>(0);
  const childClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.closest(".keyword")) {
      const clickedDiv = target.closest(".keyword")!.querySelector("div");
      if (clickedDiv && clickedDiv.className !== "active" && activeNum < 4) {
        clickedDiv.classList.add("active");
        setActiveNum(activeNum + 1);
      } else if (clickedDiv && clickedDiv.className === "active") {
        clickedDiv.classList.remove("active");
        setActiveNum(activeNum - 1);
      }else{
        alert("4개까지 선택이 가능합니다.")
      }
    }
  };
  return (
    <div className="AIRoadMakerKeyword text-center">
      <div className="col-12 titleFont welcome">
        마지막으로 이번 여행의 테마를 정해볼까요?
      </div>
      <div className="col-12 titleFont title">원하는 여행 테마를 2개 이상</div>
      <div className="col-12 titleFont title">선택해 주세요. (최대 4개)</div>
      <div
        className="row titleFont text-center mt-10"
        onClick={childClickHandle}
      >
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/mountain.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">산</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/Albanian.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">실내 여행지</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/snowboard.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">액티비티</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/exhibition.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">문화 / 역사</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/wheel.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">테마파크</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/coffee.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">카페</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/market.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">전통시장</div>
          </div>
        </div>
        <div className="col-3 keyword sub">
          <div>
            <div className="imgDiv">
              <img
                src="/src/06_hwangjinsang/assets/imgs/fireworks.jpg"
                alt="당일여행"
              />
            </div>
            <div className="mt-20">축제</div>
          </div>
        </div>
      </div>
      <div className="row mt-40">
        <div className="col-6 titleFont actionBtn">
          <div
            onClick={() => {
              navigate("/airoadmaker/calendar");
            }}
          >
            이전
          </div>
        </div>
        <div className="col-6 titleFont actionBtn">
          <div
            onClick={() => {
              navigate("/airoadmaker/detail");
            }}
          >
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadMakerKeyword;
