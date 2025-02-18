import { Link } from "react-router-dom";
import ActionsButton from "../ActionsButton";
import { FaEdit } from "react-icons/fa";

interface Items {
  id: number;
  img: string;
  title: string;
  date: string;
  delayAnimation: string;
  details: string;
  tag: string;
  tags: string[];
}

interface ItemProps {
  item: Items;
}

const TravelCourseList: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="container roadTalkList">
      <div className="row roadTalkLink">
        <div className="col-4 blogCard__image rounded-4" style={{ marginBottom: "20px" }}>
        <Link to={`/mypage/TravelCourse/${item.id}`}>
          <img className="cover w-100 img-fluid" src="/public/vite.svg" alt="image" />
          </Link>
        </div>

        <div className="col-8">
          <div className="row ">
            <div className="col-10 text-24 title">
             <Link to={`/mypage/TravelCourse/${item.id}`}>{item.title}</Link> 
            </div>
            <div className="col-2 text-end" style={{ transition: "none" }}>
            <ActionsButton customFilters={[
              { label: "내용편집", value: "edit", icon: <FaEdit /> }
                ]} />
            </div>

            <div className="col-12 text-16 content" style={{ marginBottom: "20px" }}>
              {item.details}
            </div>
            <div className="col-3 text-20 content row tagcourse">{item.tag}</div>
            <div className="col-3 text-20 content row tagcourse">{item.tag}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCourseList;
