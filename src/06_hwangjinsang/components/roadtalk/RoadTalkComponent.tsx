import blogsData from "../../data/blogs";
import RoadTalkList from "./list/RoadTalkList";

const RoadTalkComponent = () => {
  return (
    <>
      {blogsData.map((items)=>(
        <RoadTalkList key={items.id} item={items}/>
      ))}
    </>
  );
};

export default RoadTalkComponent;
