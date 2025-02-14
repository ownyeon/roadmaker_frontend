/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = (props: { longitude: number; latitude: number }) => {
  const [latLong, setLatLong] = useState<{
    longitude: number;
    latitude: number;
  }>({ longitude: 0, latitude: 0 });
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setLatLong({ longitude: props.longitude, latitude: props.latitude });
  }, [props.longitude, props.latitude]);

  const initMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(latLong.longitude, latLong.latitude),
      level: 13,
    };

    const map = new window.kakao.maps.Map(container as HTMLElement, options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mapRef as MutableRefObject<any>).current = map;
  };

  useEffect(() => {
    if (window.kakao) {
      window.kakao.maps.load(() => initMap());
    }
  }, [latLong]);

  return <div id="map"></div>;
};

export default Map;
