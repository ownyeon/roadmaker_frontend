import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

// 태그 배열 (위도, 경도 정보 포함)
const tags = [
  { label: "#서울", value: "#서울", lat: 37.5665, lng: 126.978 },
  { label: "#부산", value: "#부산", lat: 35.1796, lng: 129.0756 },
  { label: "#대구", value: "#대구", lat: 35.8714, lng: 128.6014 },
  { label: "#인천", value: "#인천", lat: 37.4563, lng: 126.7052 },
  { label: "#광주", value: "#광주", lat: 35.1595, lng: 126.8526 },
  { label: "#대전", value: "#대전", lat: 36.3504, lng: 127.3845 },
  { label: "#울산", value: "#울산", lat: 35.5384, lng: 129.3114 },
  { label: "#세종", value: "#세종", lat: 36.4801, lng: 127.2897 },
  { label: "#경기", value: "#경기", lat: 37.4138, lng: 127.5183 },
  { label: "#강원", value: "#강원", lat: 37.8228, lng: 128.1555 },
  { label: "#충북", value: "#충북", lat: 36.6356, lng: 127.9455 },
  { label: "#충남", value: "#충남", lat: 36.6537, lng: 126.7758 },
  { label: "#경북", value: "#경북", lat: 36.5761, lng: 128.7475 },
  { label: "#경남", value: "#경남", lat: 35.4606, lng: 128.2132 },
  { label: "#전북", value: "#전북", lat: 35.7198, lng: 127.1398 },
  { label: "#전남", value: "#전남", lat: 34.8169, lng: 126.4649 },
  { label: "#제주", value: "#제주", lat: 33.4996, lng: 126.5312 },
];

const RankMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setIsLoaded(true);
    }
  }, []);

  const position = { lat: 36.5, lng: 127.5 }; // 대한민국 중심 위치

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {isLoaded ? (
        <Map
          center={position}
          style={{ width: "100%", height: "100%" }}
          level={13} // 줌 레벨
        >
          {/* 태그 목록에 있는 마커들 */}
          {tags.map((tag) => (
            <MapMarker
              key={tag.value}
              position={{ lat: tag.lat, lng: tag.lng }}
              title={tag.label} // 마커에 표시할 텍스트 제거 (필요 없다면 이 부분 삭제)
            />
          ))}
        </Map>
      ) : (
        <p>지도를 불러오는 중...</p>
      )}
    </div>
  );
};

export default RankMap;
