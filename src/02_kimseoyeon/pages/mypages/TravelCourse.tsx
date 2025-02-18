import TravelCourseComponent from "../../components/common/travelcourse/TravelCourseComponent"
import "../../styles/mypage.scss" 

  const TravelCourse = () => {
    return (
      <div className="dashboard">
        <div className="dashboard__main">
          <div className="dashboard__content">
            <h1 className="text-30 lh-14 fw-600 titleFont" style={{ marginBottom: "10px" }}>
                여행 코스
            </h1>
            <p className="text-15 text-light-1 subFont">
              내가 저장한 여행 코스를 확인할 수 있습니다.
            </p>

            <div className="roadTalkContainer">
                <div className="row">
                    <TravelCourseComponent />
                </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default TravelCourse;



