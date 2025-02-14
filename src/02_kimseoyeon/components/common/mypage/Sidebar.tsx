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
      icon: "",
      name: "관심 여행지",
      routePath: "/dashboard/db-booking",
    },
    {
      id: 3,
      icon: "",
      name: "내 활동",
      routePath: "/dashboard/db-wishlist",
    },
    {
      id: 4,
      icon: "",
      name: " 내 정보",
      routePath: "/dashboard/db-settings",
    },
    {
      id: 5,
      icon: "",
      name: "회원 탈퇴",
      routePath: "/login",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div 
            className={`${
              isActiveLink(item.routePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              to={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <img src={item.icon} alt="image" className="mr-15" style={{width:"30px"}} />
              <span className="titleFont text-24">{item.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
