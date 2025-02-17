import { useEffect } from "react";

interface KakaoMapApiProps {
  longitude: number;
  latitude: number;
}

const KakaoMapApi = ({ longitude, latitude }: KakaoMapApiProps) => {
  useEffect(() => {
    if (window.kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container as HTMLElement, options);

      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(latitude, longitude),
        map: map,
      });
    }
  }, [longitude, latitude]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default KakaoMapApi;
