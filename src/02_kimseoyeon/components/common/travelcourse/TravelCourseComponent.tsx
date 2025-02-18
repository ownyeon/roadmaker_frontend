import blogsData from "../../../data/blogs";
import RoadTalkList from "./list/TravelCourseList";

const TravelCourseComponent = () => {
  return (
    <>
      {blogsData.map((items)=>(
        <RoadTalkList key={items.id} item={items}/>
      ))}
    </>
  );
};

export default TravelCourseComponent;
