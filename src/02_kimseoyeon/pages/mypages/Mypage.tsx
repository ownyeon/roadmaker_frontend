import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/common/mypage/Sidebar";
import Profile from "./Profile"; 

const Mypage = () => {
  return (
    <div className="mypage-container">
      <div className="mypage-layout">
        <Sidebar />
        <div className="mypage-content">
          <Routes>
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
