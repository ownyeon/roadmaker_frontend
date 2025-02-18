import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../../styles/AdminSidebar.scss'

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isTravelOpen, setIsTravelOpen] = useState(false);
  const subMenuHandler = () => {
    setIsTravelOpen((prev) => !prev);
  };
  return (
    <div className="sidebar">
      <div className="row text-20 titleFont">
        <Link
          to="/admin/dashboard"
          className={
            pathname === "/admin/dashboard" ? "current -is-active" : ""
          }
          onClick={()=>{setIsTravelOpen(false)}}
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
          className={
            pathname === "/admin/complaint" ? "current -is-active" : ""
          }
          onClick={()=>{setIsTravelOpen(false)}}
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
          className={pathname === "/admin/member" ? "current -is-active" : ""}
          onClick={()=>{setIsTravelOpen(false)}}
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
          className={pathname === "/admin/travel" ? "current -is-active" : ""}
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
                  className={`bi bi-chevron-right ${
                    isTravelOpen ? "down" : ""
                  }`}
                ></i>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/admin/newtravel"
          className={
            pathname === "/admin/newtravel" ? "current -is-active" : ""
          }
        >
          <div
            className={`row pointer pl-50 subMenu ${
              isTravelOpen ? "open" : ""
            }`}
          >
            <div className="col-12 subFont text-18">신규 여행지 관리</div>
          </div>
        </Link>
        <Link
          to="/admin/course"
          className={pathname === "/admin/course" ? "current -is-active" : ""}
          onClick={()=>{setIsTravelOpen(false)}}
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
          className={pathname === "/admin/keyword" ? "current -is-active" : ""}
          onClick={()=>{setIsTravelOpen(false)}}
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
    </div>
  );
};

export default Sidebar;
