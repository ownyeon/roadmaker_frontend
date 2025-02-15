import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../common/social/Social";
import { travelItems } from "../data/HeaderData";
import { isActiveLink } from "../utils/linkActiveChecker";
import ContactInfo from "./ContactInfo";
import HeaderSearch from "./HeaderSearch";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuItemClick = (
    routePath?: string | null,
    isSubMenu?: boolean
  ) => {
    // 서브메뉴 클릭 시 사이드바 닫기 처리
    if (isSubMenu !== undefined) {
      setIsSubMenuOpen((prevState) => !prevState); // 서브메뉴 클릭 시 하위 메뉴 닫기
    } else {
      setIsSubMenuOpen(false); // 하위 메뉴 열리게 설정
    }

    // 서브메뉴가 아닐 경우에만 사이드바 닫기
    if (routePath && routePath !== "") {
      const sidebar = document.querySelector(".offcanvas") as HTMLDivElement;
      if (sidebar) {
        sidebar.setAttribute("data-bs-dismiss", "offcanvas");
        sidebar.setAttribute("aria-label", "Close");
        sidebar.click(); // 사이드바 닫기 클릭 이벤트 강제 트리거
        sidebar.removeAttribute("data-bs-dismiss"); // 닫기 속성 제거
      }

      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.classList.remove("show"); // 'show' 클래스를 제거하여 백그라운드 숨기기
      }

      navigate(routePath); // 페이지 이동
    }
  };

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light px-20 py-20">
        <Link
          to="/"
          onClick={() => {
            handleMenuItemClick("/");
          }}
        >
          <img
            src="/src/01_common/assets/imgs/HeaderLogo.png"
            alt="brand"
            style={{ height: "60px" }}
          />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
        <HeaderSearch />
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => handleMenuItemClick("/airoadmaker")}
            className={pathname === "/airoadmaker" ? "menu-active-link" : ""}
          >
            AI로드메이커
          </MenuItem>
          {/* End  AI로드메이커 Menu */}
          <SubMenu
            label="여행지"
            className={
              travelItems.some(
                (item) =>
                  item.routePath?.split("/")[1] == pathname.split("/")[1]
              )
                ? "menu-active-link"
                : ""
            }
            onClick={() => handleMenuItemClick(undefined, true)} // "여행지" 라벨을 클릭했을 때 서브메뉴가 열리거나 닫히도록
            open={isSubMenuOpen}
          >
            {travelItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => handleMenuItemClick(item.routePath, item.check)}
                className={
                  isActiveLink(item.routePath, pathname)
                    ? "menu-active-link"
                    : "inactive-menu"
                }
                style={{ fontFamily: "Hahmlet-Regular" }}
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>
          {/* End  여행지 Menu */}
          <MenuItem
            onClick={() => handleMenuItemClick("/roadtalk")}
            className={pathname === "/roadtalk" ? "menu-active-link" : ""}
          >
            로드톡
          </MenuItem>
          {/* End  로드톡 Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer px-20 py-20">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
