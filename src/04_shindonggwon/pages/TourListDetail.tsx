import { useParams } from "react-router-dom";
import TourListTitleTag from "../components/blog/TourListTitle";
import blogsData from "../data/tourList"; // 여행지 데이터 import
import TourListGallery from "../components/blog/TourListGallery";
import TourListDetailInfo from "../components/blog/TourListDetailInfo";
import KakaoMapApi from "../components/map/KakaoMapApi";
import "../styles/tourListDetail.scss";

const TourListDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 id 받아오기
  const tourItem = blogsData.find((item) => item.id === parseInt(id || "")); // 해당 id로 여행지 데이터 찾기

  if (!tourItem) {
    return <div>여행지를 찾을 수 없습니다.</div>; // id가 유효하지 않거나 데이터가 없는 경우 처리
  }

  // latitude와 longitude 값이 string으로 되어 있으므로 number로 변환하고, 유효한 값인지 확인
  const longitude = tourItem.longitude ? parseFloat(tourItem.longitude) : 126.5930; // 기본값 서울의 경도
  const latitude = tourItem.latitude ? parseFloat(tourItem.latitude) : 37.3306; // 기본값 서울의 위도

  // NaN일 경우 기본값을 사용하도록 체크
  const validLongitude = isNaN(longitude) ? 126.5930 : longitude;
  const validLatitude = isNaN(latitude) ? 37.3306 : latitude;

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
    </div>
  );
};


export default TourListDetail;
