const Card = () =>{
return<div className="row flex-center cardBg">
<div className="col-12 titleFont text-20 pt-10 text-white">
  -님을 위한 여행코스
</div>
<div className="row flex-center cardCn">
  <div className="col-3">
    <img src="/src/06_hwangjinsang/assets/imgs/1.png" alt="일정아이콘" />
  </div>
  <div className="col-9">
    <div className="row subFont text-12">
      <div className="col-12">·총이동거리 : 100KM</div>
      <div className="col-12">·여행지역 : 경남남해군 - 경남 남해군</div>
      <div className="col-12">·총 9개 여행지 추천!</div>
    </div>
  </div>
</div>
</div>
}

export default Card;