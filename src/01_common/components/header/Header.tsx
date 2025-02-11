import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import "../../styles/Header.scss";
import HeaderSearch from "./HeaderSearch";


const Header = () => {
  const { pathname } = useLocation();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-end">
                <Link to="/" className="header-logo mr-60">
                  <img
                    src="/src/01_common/assets/imgs/HeaderLogo.png"
                    alt="logo"
                  />
                </Link>
                {/* End logo */}
                <div className="header-menu">
                  <div className="header-menu__content ">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}
            <div className="col-auto">
              <div className="d-flex items-center">
                <HeaderSearch/>
                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none " style={{marginTop:"15px"}}>
                  <Link to="/login" className={pathname === "/login" ? "current mr-20" : "mr-20"}>로그인</Link>
                  <Link to="/register" className={pathname === "/register" ? "current mr-20" : "mr-20"}>회원가입</Link>
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1" style={{marginTop:"15px"}}>
                  <div>
                    <Link
                      to="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex={-1}
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
