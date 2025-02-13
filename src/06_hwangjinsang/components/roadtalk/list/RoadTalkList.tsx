import { Link } from "react-router-dom";

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
const RoadTalkList: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="container roadTalkList">
      <Link to={`/roadtalk/${item.id}`}>
        <div className="row roadTalkLink">
          <div className="col-4 blogCard__image rounded-4" style={{marginBottom:"20px"}}>
            <img className="cover w-100 img-fluid" src="/public/vite.svg" alt="image" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12 text-24 title">{item.title}</div>
              <div className="col-12 text-16 content">{item.details}</div>
              <div className="col-12 text-16 content">{item.tag}</div>
            </div>
          </div>
        </div>
      </Link>
      <div className="row px-20">
        <div className="col-4 recommend text-20 text-start">
          <i className="bi bi-chat-square-heart mr-10"></i>
          <span>740</span>
        </div>
        <div className="col-4 comment text-20 text-center">
          <i className="bi bi-chat-square-text mr-10"></i>
          <span>40</span>
        </div>
        <div className="col-4 bookmark text-20 text-end">
          <i className="bi bi-bookmark"></i>
        </div>
      </div>
    </div>
  );
};

export default RoadTalkList;
