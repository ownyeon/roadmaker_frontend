import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/common/mypage/Sidebar";
import Profile from "./Profile";
import ChangePW from "./ChangePW";
import DeleteAccount from "./DeleteAccount";
import MyComment from "./MyComment";
import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";


const Mypage = () => {
  return (
    <>
      <Sidebar />
      <div className="mypage-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePW />} />
          <Route path="DeleteAccount" element={<DeleteAccount />} />
          <Route path="MyComment" element={<MyComment />} />
        </Routes>
      </div>

    </>
  );
};

export default Mypage;
