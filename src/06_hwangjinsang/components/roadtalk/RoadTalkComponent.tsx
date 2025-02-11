import { Link } from "react-router-dom";
import blogsData from "../../data/blogs";

const RoadTalkComponent = () => {
  return (
    <>
      {blogsData.map((item) => (
        <Link
          to={`/roadtalk/${item.id}`} 
          className="blogCard -type-1 col-12"
          key={item.id}
        >
          <div className="row y-gap-15 items-center md:justify-center md:text-center talkContainer">
            <div className="col-lg-4">
              <div className="blogCard__image rounded-4">
                <img
                  className="cover w-100 img-fluid"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="text-22 text-dark-1 mt-10 md:mt-5">
                {item.title}
              </h3>
              <div className="text-15 lh-16 text-light-1 mt-10 md:mt-5">
                {item.details}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RoadTalkComponent;
