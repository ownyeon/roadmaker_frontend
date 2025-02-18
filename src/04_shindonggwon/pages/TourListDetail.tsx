import { useParams } from "react-router-dom";
import TourListTitleTag from "../components/blog/TourListTitle";
import blogsData from "../data/tourList"; // 여행지 데이터 import
import TourListGallery from "../components/blog/TourListGallery";
import TourListDetailInfo from "../components/blog/TourListDetailInfo";
import KakaoMapApi from "../components/map/KakaoMapApi";
import "../styles/tourListDetail.scss";
import TourListDetailBrief from "../components/blog/TourListDetailBrief";
import TourListComment from "../components/blog/TourListComment";
import TourListCommentList from "../components/blog/TourListCommentList";
import RecommendedTourList from "../components/blog/RecommendedTourList";

const TourListDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 받아오기
  const tourItem = blogsData.find((item) => item.id === parseInt(id || "")); // 해당 id로 여행지 데이터 찾기

  console.log("tourItem 데이터:", tourItem);

  if (!tourItem) {
    return <div>여행지를 찾을 수 없습니다.</div>; // id가 유효하지 않거나 데이터가 없는 경우 처리
  }

  // latitude와 longitude 값이 string으로 되어 있으므로 number로 변환하고, 유효한 값인지 확인
  const longitude = tourItem.longitude ? parseFloat(tourItem.longitude) : 126.5930; // 기본값 서울의 경도
  const latitude = tourItem.latitude ? parseFloat(tourItem.latitude) : 37.3306; // 기본값 서울의 위도

  // NaN일 경우 기본값을 사용하도록 체크
  const validLongitude = isNaN(longitude) ? 126.5930 : longitude;
  const validLatitude = isNaN(latitude) ? 37.3306 : latitude;

  console.log("위도:", tourItem.latitude, "경도:", tourItem.longitude);
  console.log("변환된 위도:", validLatitude, "변환된 경도:", validLongitude);
  
  return (
    <div className="roadTalkDetailContainer">
      <TourListTitleTag title={tourItem.title} tags={tourItem.tags} />
      <hr className="mt-50 softColor" />
      <TourListGallery images={tourItem.images} />
      <br />
      <br />
      <TourListDetailInfo details={tourItem.details} />
      <hr className="mt-50 softColor" />
      <KakaoMapApi longitude={validLongitude} latitude={validLatitude} />
      <TourListDetailBrief
        phone="02-3455-9277" // 예시 데이터, 추후 DB에서 가져옴
        address="서울특별시 중구 남산동 1-3" // 예시 데이터, 추후 DB에서 가져옴
        holiday="연중무휴" // 예시 데이터, 추후 DB에서 가져옴
        entranceFee="성인 10,000원, 어린이 5,000원" // 예시 데이터, 추후 DB에서 가져옴
        website="http://www.nseoultower.co.kr" // 예시 데이터, 추후 DB에서 가져옴
        hours="09:00 AM - 10:00 PM" // 예시 데이터, 추후 DB에서 가져옴
        parking="주차 가능" // 예시 데이터, 추후 DB에서 가져옴
      />
      <TourListComment/>
      <TourListCommentList/>
      <TourListCommentList/>
      <br/>
      <br/>
      <RecommendedTourList currentTourId={tourItem.id} />

    </div>
  );
};


export default TourListDetail;
