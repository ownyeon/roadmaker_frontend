import Map from "./LoadMap";

const KakaoMapApi = () => (
  <>
    <div className="row justify-center d-flex">
      <div className="mt-50 kakaoMap ">
        <Map longitude={35.683034} latitude={127.602435}/>
      </div>
    </div>
  </>
);

export default KakaoMapApi;
