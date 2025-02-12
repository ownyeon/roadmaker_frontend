import { Link } from "react-router-dom";
import blogsData from "../../data/blogs";

const RoadTalkComponent = () => {
  return (
    <>
      {blogsData.map((item) => (
        <div className="row talkContainer">
          <div className="blogCard -type-1 col-12" key={item.id}>
            <Link to={`/roadtalk/${item.id}`}>
              <div className="row y-gap-15 items-start md:justify-center md:text-center contentContainer">
                <div className="col-lg-4">
                  <div className="blogCard__image rounded-4">
                    <img
                      className="cover w-100 img-fluid"
                      // src={item.img}
                      src="/public/vite.svg"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-lg-8 detail">
                  <h3 className="text-24 text-dark-1 mt-10 md:mt-5 title">
                    {item.title}
                  </h3>
                  <div className="text-16 lh-16 text-light-1 mt-10 md:mt-5 content">
                    {item.details}
                  </div>
                  <div className="text-16 lh-16 text-light-1 mt-10 md:mt-5 content">
                    {item.tag}
                  </div>
                  <div
                    className="row text-start"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="col-4 recommend text-20">
                      <i className="bi bi-chat-square-heart mr-10"></i>
                      <span>740</span>
                    </div>
                    <div className="col-4 comment text-20 ">
                      <i className="bi bi-chat-square-text mr-10"></i>
                      <span>40</span>
                    </div>
                    <div className="col-4 bookmark text-20 ">
                    <i className="bi bi-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoadTalkComponent;
