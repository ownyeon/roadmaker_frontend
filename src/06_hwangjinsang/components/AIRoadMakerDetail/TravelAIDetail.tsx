import Comment from "../roadtalkdetail/comment/Comment";
import CommentList from "../roadtalkdetail/comment/CommentList";

const TravelAIDetail = ({
  setIsTravelDetail,
  detailOpenString,
  setDetailOpenString,
}: {
  setIsTravelDetail: React.Dispatch<React.SetStateAction<boolean>>;
  detailOpenString: string;
  setDetailOpenString: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={`travelAIDetail ${detailOpenString}`}>
      <div className="row ">
        <div className="col-12 text-end">
          <i
            className="icon icon-close pointer"
            onClick={() => {
              setDetailOpenString("");
              setIsTravelDetail((prev)=>!prev);
            }}
          ></i>
        </div>
        <div className="col-12 mt-5">
          <img
            src="/src/06_hwangjinsang/assets/imgs/Albanian.jpg"
            alt="여행지사진"
          />
        </div>
      </div>
      <div className="row mt-20">
        <div className="col-12 titleFont text-20">하늘다리</div>
        <div className="col-12 subFont">여행지</div>
        <div className="col-12 mt-40 subFont text-center">
          경상북도 봉화군 마냉이길 48 그외 잡다한설명
        </div>
        <div className="row mt-40 subFont">
          <div className="col-4 text-center">
            <i className="bi bi-chat-square-heart mr-10"></i>435
          </div>
          <div className="col-4 text-center">
            <i className="bi bi-share mr-10"></i>53
          </div>
          <div className="col-4 text-center">조회수 550</div>
        </div>
      </div>
      <hr className="mt-40 mr-15 ml-15" />
      <CommentList />
      <CommentList />
      <CommentList />
      <Comment />
    </div>
  );
};

export default TravelAIDetail;
