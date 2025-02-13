import KakaoMapApi from "../components/common/map/KakaoMapApi";
import TravelCarousel from "../components/common/carousel/TravelCarousel";
import TitleTag from "../components/roadtalkdetail/TitleTag";
import Comment from "../components/roadtalkdetail/comment/Comment";
import { EmblaOptionsType } from "embla-carousel";
import "../styles/Embla.scss";
import "../styles/EmblaBase.scss";
import '../styles/common.scss'

import "../styles/RoadTalkDetail.scss";
import TravelDetail from "../components/roadtalkdetail/TravelDetail";
import CommentList from "../components/roadtalkdetail/comment/CommentList";
const RoadTalkDetail = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <div className="roadTalkDetailContainer">
        <TitleTag />
        <hr className="mt-50 softColor" />
        <KakaoMapApi />
        <hr className="mt-50 mb-50" />
        <TravelCarousel slides={SLIDES} options={OPTIONS} />
        <TravelDetail />
        <hr />
        <Comment />
        <hr />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
      </div>
    </>
  );
};

export default RoadTalkDetail;
