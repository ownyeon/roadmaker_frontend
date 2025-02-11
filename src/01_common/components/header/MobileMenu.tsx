import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../common/social/Social";
import {
  categorieMegaMenuItems,
  travelItems
} from "../data/HeaderData";
import { isActiveLink } from "../utils/linkActiveChecker";
import ContactInfo from "./ContactInfo";
import HeaderSearch from "./HeaderSearch";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] =
    useState<string>("");
  const [isActiveNestedParent, setisActiveNestedParent] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu) => {
      megaMenu?.menuCol?.map((megaCol) => {
        megaCol?.menuItems?.map((item) => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split("/")[1] == pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
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
        <HeaderSearch/>
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => navigate("/airoadmaker")}
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
          >
            {travelItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => navigate(item.routePath)}
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
            onClick={() => navigate("/roadtalk")}
            className={pathname === "/roadtalk" ? "menu-active-link" : ""}
          >
            로드톡
          </MenuItem>
          {/* End  로드톡 Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
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
