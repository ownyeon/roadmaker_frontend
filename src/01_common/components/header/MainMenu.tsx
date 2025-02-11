import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from "react-router-dom";
import '../../styles/Header.scss';
import {
  homeItems,
  travelItems,
} from "../data/HeaderData";
import {
  isActiveLink,
  isActiveParentChild,
} from "../utils/linkActiveChecker";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
      <li className={pathname === "/airoadmaker" ? "current" : ""}>
          <Link to="/airoadmaker"><span className="mr-20">AI로드메이커</span></Link>
        </li>
        {/* End AI로드메이커 page menu */}
 
        <li
          className={`${
            isActiveParentChild(travelItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-20">여행지<i className="bi bi-caret-down-fill fs-5"></i></span>
          </a>
          <ul className="subnav">
            {travelItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End 여행지 page menu */}
        <li className={pathname === "/roadtalk" ? "current" : ""}>
          <Link to="/roadtalk">로드톡</Link>
        </li>
        {/* End Destinatinos single menu */}
      </ul>
    </nav>
  );
};

export default MainMenu;
