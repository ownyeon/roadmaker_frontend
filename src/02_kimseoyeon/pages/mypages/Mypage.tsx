import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/common/mypage/Sidebar";
import Footer from "../../components/common/mypage/Footer";
import Profile from "./Profile"; // 프로필 페이지
// import "../../../02_kimseoyeon/styles/mypage.scss"

const Mypage = () => {
  return (
    <div className="mypage-container">
      <div className="mypage-layout">
        <Sidebar />
        <div className="mypage-content">
          <Routes>
            <Route path="/" element={<Profile />} /> {/* 기본 페이지 설정 */}
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Mypage;
