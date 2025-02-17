import { Link } from "react-router-dom";

import { isActiveLink } from "./linkActiveChecker";
import { useLocation } from "react-router-dom";


const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarContent = [
    {
      id: 1,
      icon: "/src/02_kimseoyeon/assets/images/travel.png",
      name: "여행 코스",
      routePath: "/dashboard/db-dashboard",
    },
    {
      id: 2,
      icon: "/src/02_kimseoyeon/assets/images/book.svg",
      name: "관심 여행지",
      routePath: "/mypage/FavoriteDesinations",
    },
    {
      id: 3,
      icon: "/src/02_kimseoyeon/assets/images/activity.svg",
      name: "내 활동",
      routePath: "/mypage/mycomment",
    },
    {
      id: 4,
      icon: "/src/02_kimseoyeon/assets/images/info.svg",
      name: " 내 정보",
      routePath: "/mypage/profile",
    },
    {
      id: 5,
      icon: "/src/02_kimseoyeon/assets/images/withdraw.svg",
      name: "회원 탈퇴",
      routePath: "/mypage/deleteaccount",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div style={{display:"flex", alignSelf:"center"}}
            className={`${
              isActiveLink(item.routePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              to={item.routePath}
              className="d-flex items-center ustify-content: center text-15 lh-1 fw-500"
            >
              <img src={item.icon} alt="image" className="mr-15" style={{width:"30px"}} />
              <span className="titleFont text-24" style={{ marginTop: "6px" }}>{item.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
