import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./01_common/components/common/social/ScrollTopBehaviour";
import Header from "./01_common/components/header/Header";
import "./01_common/styles/index.scss";
import Rank from "./04_shindonggwon/pages/Rank";
import RoadTalk from "./06_hwangjinsang/pages/RoadTalk";
//import Aos from "aos";
import Mypage from "./02_kimseoyeon/pages/mypages/Mypage";
import LogIn from "./03_kimjongbeom/pages/Login";
import SignUp from "./03_kimjongbeom/pages/SignUp";
import CalendarComponent from "./04_shindonggwon/pages/CalendarComponent";
import NewFestival from "./04_shindonggwon/pages/NewFestival";
import TourListDetail from "./04_shindonggwon/pages/TourListDetail";
import FindTourList from "./05_choesuji/pages/main";
import NewRegister from "./05_choesuji/pages/newregister";
import RoadTalkDetail from "./06_hwangjinsang/pages/RoadTalkDetail";
import AIRoadMaker from "./06_hwangjinsang/pages/airoadmaker/AIRoadMaker";
import AIRoadMakerCalendar from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCalendar";
import AIRoadMakerCity from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCity";
import AIRoadMakerCounty from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerCounty";
import AIRoadMakerDetail from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerDetail";
import AIRoadMakerKeyword from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerKeyword";
import AIRoadMakerStart from "./06_hwangjinsang/pages/airoadmaker/AIRoadMakerStart";

import AdminComplaint from "./06_hwangjinsang/pages/admin/AdminComplaint";
import AdminCourse from "./06_hwangjinsang/pages/admin/AdminCourse";
import AdminDashboard from "./06_hwangjinsang/pages/admin/AdminDashboard";
import AdminKeyword from "./06_hwangjinsang/pages/admin/AdminKeyword";
import AdminMember from "./06_hwangjinsang/pages/admin/AdminMember";
import AdminNewTravel from "./06_hwangjinsang/pages/admin/AdminNewTravel";
import AdminTravel from "./06_hwangjinsang/pages/admin/AdminTravel";
import Sidebar from "./06_hwangjinsang/components/admin/common/Sidebar";
import { AdminProvider } from "./06_hwangjinsang/context/AdminContext";
if (typeof window !== "undefined") {
  import("bootstrap");
}

function RoutesWrapper() {
  const { pathname } = useLocation();
  const showAdminSidebar = pathname.startsWith("/admin");

  return (
    <>
      {showAdminSidebar && <Sidebar />}
      <Header />
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" /> {/* 메인페이지*/}
        <Route path="/login" element={<LogIn />} /> {/* 로그인페이지*/}
        <Route path="/login/recovery" /> {/* 비밀번호 찾기 페이지*/}
        <Route path="/register" element={<SignUp />} /> {/* 회원가입페이지*/}
        <Route path="/airoadmaker" element={<AIRoadMaker />} />
        {/* AI로드메이커 메인*/}
        <Route path="/airoadmaker/start" element={<AIRoadMakerStart />} />
        {/* AI로드메이커 시작*/}
        <Route path="/airoadmaker/county" element={<AIRoadMakerCounty />} />
        {/* AI로드메이커 지역*/}
        <Route path="/airoadmaker/city" element={<AIRoadMakerCity />} />
        {/* AI로드메이커 도시*/}
        <Route path="/airoadmaker/calendar" element={<AIRoadMakerCalendar />} />
        {/* AI로드메이커 캘린더*/}
        <Route path="/airoadmaker/keyword" element={<AIRoadMakerKeyword />} />
        {/* AI로드메이커 캘린더*/}
        <Route path="/airoadmaker/detail" element={<AIRoadMakerDetail />} />
        {/* AI로드메이커 상세페이지*/}
        <Route path="/list" element={<FindTourList />} />
        {/* 여행지 리스트 */}
        <Route path="/TourListDetail/:id" element={<TourListDetail />} />
        {/* 여행지 상세페이지*/}
        <Route path="/list/new" element={<NewRegister />} />
        {/* 여행지 신규 등록*/}
        <Route path="/list/report" /> {/* 여행지 신고 */}
        <Route path="/list/rank" element={<Rank />} /> {/* 여행지 순위 */}
        <Route path="/list/festival" element={<CalendarComponent />} />
        {/* 여행지 축제 페이지 */}
        <Route path="/list/festival/new" element={<NewFestival />} />
        {/* 축제 신규등록 페이지 */}
        <Route path="/roadtalk" element={<RoadTalk />} />
        {/* 로드톡 리스트 페이지*/}
        <Route path="/roadtalk/:id" element={<RoadTalkDetail />} />
        {/* 로드톡 상세 페이지 */}
        <Route path="/mypage/*" element={<Mypage />} /> {/* 마이페이지 */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* 관리자페이지 */}
        <Route path="/admin/complaint" element={<AdminComplaint />} />
        {/* 관리자페이지 */}
        <Route path="/admin/member" element={<AdminMember />} />
        {/* 관리자페이지 */}
        <Route path="/admin/travel" element={<AdminTravel />} />
        {/* 관리자페이지 */}
        <Route path="/admin/newtravel" element={<AdminNewTravel />} />
        {/* 관리자페이지 */}
        <Route path="/admin/course" element={<AdminCourse />} />
        {/* 관리자페이지 */}
        <Route path="/admin/keyword" element={<AdminKeyword />} />
        {/* 관리자페이지 */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </AdminProvider>
  );
}
export default App;
