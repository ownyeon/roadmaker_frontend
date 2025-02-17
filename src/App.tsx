import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "./01_common/components/common/social/ScrollTopBehaviour";
import Header from "./01_common/components/header/Header";
import "./01_common/styles/index.scss";
import Rank from "./04_shindonggwon/pages/Rank";
import RoadTalk from "./06_hwangjinsang/pages/RoadTalk";
//import Aos from "aos";
import LogIn from "./03_kimjongbeom/pages/Login";
import SignUp from "./03_kimjongbeom/pages/SignUp";
import CalendarComponent from "./04_shindonggwon/pages/CalendarComponent";
import FindTourList from "./05_choesuji/pages/main";
import RoadTalkDetail from "./06_hwangjinsang/pages/RoadTalkDetail";
import AIRoadMaker from "./06_hwangjinsang/pages/airoadmaker/AIRoadMaker";
import AIRoadMakerCity from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCity";
import AIRoadMakerCounty from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCounty";
import AIRoadMakerCalendar from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCalendar";
import AIRoadMakerKeyword from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerKeyword";
import AIRoadMakerDetail from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerDetail";
import Mypage from "./02_kimseoyeon/pages/mypages/Mypage";
import AIRoadMakerStart from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerStart";
import NewFestival from "./04_shindonggwon/pages/NewFestival";
import NewRegister from "./05_choesuji/pages/newregister";
if (typeof window !== "undefined") {
  import("bootstrap");
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTopBehaviour/>
      <Routes>
        <Route path="/" /> {/* 메인페이지*/}
        <Route path="/login" element={<LogIn/>} /> {/* 로그인페이지*/}
        <Route path="/login/recovery" /> {/* 비밀번호 찾기 페이지*/}
        <Route path="/register" element={<SignUp />}/> {/* 회원가입페이지*/}
        <Route path="/airoadmaker" element={<AIRoadMaker/>}/> {/* AI로드메이커 메인*/}
        <Route path="/airoadmaker/start" element={<AIRoadMakerStart/>}/> {/* AI로드메이커 시작*/}
        <Route path="/airoadmaker/county" element={<AIRoadMakerCounty/>}/> {/* AI로드메이커 지역*/}
        <Route path="/airoadmaker/city" element={<AIRoadMakerCity/>}/> {/* AI로드메이커 도시*/}
        <Route path="/airoadmaker/calendar" element={<AIRoadMakerCalendar/>}/> {/* AI로드메이커 캘린더*/}
        <Route path="/airoadmaker/keyword" element={<AIRoadMakerKeyword/>}/> {/* AI로드메이커 캘린더*/}
        <Route path="/airoadmaker/detail" element={<AIRoadMakerDetail/>}/> {/* AI로드메이커 상세페이지*/}
        <Route path="/list" element={<FindTourList/>}/> {/* 여행지 리스트 */}
        <Route path="/list/detail" /> {/* 여행지 상세페이지*/}
        <Route path="/list/new" element={<NewRegister/>}/> {/* 여행지 신규 등록*/}
        <Route path="/list/report" /> {/* 여행지 신고 */}
        <Route path="/list/rank"  element={<Rank/>} /> {/* 여행지 순위 */}
        <Route path="/list/festival" element={<CalendarComponent/>} /> {/* 여행지 축제 페이지 */}
        <Route path="/list/festival/new" element={<NewFestival/>}/> {/* 축제 신규등록 페이지 */}
        <Route path="/roadtalk" element={<RoadTalk />} /> {/* 로드톡 리스트 페이지*/}
        <Route path="/roadtalk/:id" element={<RoadTalkDetail/>}/> {/* 로드톡 상세 페이지 */}
        <Route path="/mypage/*" element={< Mypage/>}/> {/* 마이페이지 */}
        <Route path="/admin" /> {/* 관리자페이지 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
