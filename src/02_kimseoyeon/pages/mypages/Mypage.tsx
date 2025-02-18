import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/common/mypage/Sidebar";
import Profile from "./Profile";
import ChangePW from "./ChangePW";
import DeleteAccount from "./DeleteAccount";
import MyComment from "./MyComment";
import FavoriteDesinations from "./FavoriteDesinations";
import TravelCourse from "./TravelCourse";
import AIRoadMakerDetail from "./airoadmaker/AIRoadMakerDetail";

import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";


const Mypage = () => {
  return (
    <>
      <Sidebar />
      <div className="mypage-content">
        <Routes>
          <Route index element={<TravelCourse />} /> {/* ✅ 기본 화면 설정 */}
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePW />} />
          <Route path="DeleteAccount" element={<DeleteAccount />} />
          <Route path="MyComment" element={<MyComment />} />
          <Route path="FavoriteDesinations" element={<FavoriteDesinations />} />
          <Route path="TravelCourse" element={<TravelCourse/>} />
          <Route path="TravelCourse/:id" element={<AIRoadMakerDetail />} />

        </Routes>
      </div>

    </>
  );
};

export default Mypage;
