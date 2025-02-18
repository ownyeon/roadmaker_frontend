import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [isTravelOpen, setIsTravelOpen] = useState(false);
  const { pathname } = useLocation();
  const subMenuHandler = () => {
    setIsTravelOpen((prev) => !prev);
  };
  useEffect(()=>{
    setIsTravelOpen(pathname === "/admin/travel" ? true : false)
    setIsTravelOpen(pathname === "/admin/newtravel" ? true : false)
  },[pathname])
  return (
    <div className="row text-24 titleFont">
      <Link
        to="/admin/dashboard"
        className={pathname === "/admin/dashboard" ? "current -is-active" : ""}
      >
        <div className="row d-flex items-center pointer">
          <div className="col-2 text-end">
            <img
              src="/src/06_hwangjinsang/assets/icon/dashboard.svg"
              alt="대쉬보드"
            />
          </div>
          <div className="col-10 ">대시보드</div>
        </div>
      </Link>
      <Link
        to="/admin/complaint"
        className={pathname === "/admin/complaint" ? "current" : ""}
      >
        <div className="row d-flex items-center pointer">
          <div className="col-2 text-end">
            <img
              src="/src/06_hwangjinsang/assets/icon/siren.svg"
              alt="대쉬보드"
            />
          </div>
          <div className="col-10 ">신고 관리</div>
        </div>
      </Link>
      <Link
        to="/admin/member"
        className={pathname === "/admin/member" ? "current" : ""}
      >
        <div className="row d-flex items-center pointer ">
          <div className="col-2 text-end">
            <img
              src="/src/06_hwangjinsang/assets/icon/member.svg"
              alt="대쉬보드"
            />
          </div>
          <div className="col-10 ">사용자 관리</div>
        </div>
      </Link>
      <Link
        to="/admin/travel"
        className={pathname === "/admin/travel" ? "current" : ""}
      >
        <div className="row d-flex items-center pointer">
          <div className="col-2 text-end" onClick={subMenuHandler}>
            <img
              src="/src/06_hwangjinsang/assets/icon/backpack.svg"
              alt="대쉬보드"
            />
          </div>
          <div
            className="col-10 d-flex justify-between pt-2"
            onClick={subMenuHandler}
          >
            <div>여행지 관리</div>
            <div className="arrow" style={{ paddingTop: "1px" }}>
              <i
                className={`bi bi-chevron-right ${isTravelOpen ? "down" : ""}`}
              ></i>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/admin/newtravel"
        className={pathname === "/admin/newtravel" ? "current" : ""}
      >
        <div
          className={`row pointer pl-50 subMenu ${isTravelOpen ? "open" : ""}`}
        >
          <div className="col-12 subFont text-20">신규 여행지 관리</div>
        </div>
      </Link>
      <Link
        to="/admin/course"
        className={pathname === "/admin/course" ? "current" : ""}
      >
        <div className="row d-flex items-center pointer">
          <div className="col-2 text-end">
            <img
              src="/src/06_hwangjinsang/assets/icon/course.svg"
              alt="대쉬보드"
            />
          </div>
          <div className="col-10 ">코스 관리</div>
        </div>
      </Link>
      <Link
        to="/admin/keyword"
        className={pathname === "/admin/keyword" ? "current" : ""}
      >
        <div className="row d-flex items-center pointer">
          <div className="col-2 text-end">
            <img
              src="/src/06_hwangjinsang/assets/icon/keyword.svg"
              alt="대쉬보드"
            />
          </div>
          <div className="col-10 ">키워드 관리</div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
