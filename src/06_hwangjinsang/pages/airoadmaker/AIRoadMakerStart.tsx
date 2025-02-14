import { useNavigate } from "react-router-dom";
import "../../styles/AIRoadMakerStart.scss";
import "../../styles/common.scss";
const AIRoadMakerStart = () => {
   const navigate = useNavigate();
   return<div className="aIRoadMakerStart text-center">
        <div className="col-12  titleFont welcome"><div>WELCOME</div></div>
        <div className="col-12  titleFont title"><div>-님 안녕하세요.</div></div>
        <div className="col-12  titleFont title"><div>AI 로드메이커에</div></div>
        <div className="col-12  titleFont title"><div>오신 것을 환영합니다.</div></div>
        <div className="col-12 mt-50 subFont sub"><div>국내 여행을 계획 중이신가요?</div></div>
        <div className="col-12  subFont sub"><div>여행을 떠날 지역, 기간, 테마만 알려주시면</div></div>
        <div className="col-12  subFont sub"><div>자동으로 맞춤형 코스를 만들어 드립니다.</div></div>
        <div className="col-12 mt-80 titleFont start"><div className="pointer" onClick={()=>{navigate("/airoadmaker/county")}}>시작하기</div></div>
    </div>
}

export default AIRoadMakerStart;
