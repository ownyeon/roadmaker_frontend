const blogs = [
  {
    id: 1,
    img: "/img/rank/1.png",
    title: "남산타워",
    date: "Jan 06, 2023",
    delayAnimation: "100",
    details: `남산서울타워는 효율적인 방송전파 송수신과 한국의 전통미를 살린 관광 전망시설의 기능을 겸비한 국내 최초의 종합전파탑으로 방송문화와 관광산업의 미래를 위해 건립되었다. 세계 유명한 종합 탑들이 그 나라 또는 그 도시의 상징적인 존재가 된 것처럼 ‘남산서울타워’ 역시 지난 40여 년간 대한민국의 대표적인 관광지이자 서울의 상징물 역할을 해왔다. 남산서울타워는 서울 시내 전 지역에서 바라보이는 탑의 높이와 독특한 구조, 형태 등으로 인하여 시민의 관심과 사랑의 대상이 되었고, 내외국인들이 즐겨 찾는 제1의 관광 명소로서의 위치를 확고히 하고 있다. 최근에는 한류 바람을 몰고 온 각종 예능, 드라마의 촬영지로 이름이 높아지면서 내외국인 관광객들이 발길이 끊이지 않는 곳이다.`,
    tags: ["#서울", "#구로구", "샘플1", "#신동권", "#최수지", "#김종범", "#황진상", "#김서연", "#맛집"],
    images: ["/img/rank/짱구.jpg", "/img/rank/맹구.png", "/img/rank/철수.jpg", "/img/rank/훈이.jpg"], // 수정된 images 배열
    latitude: "37도33분6초", // 위도
    longitude: "126도59분30초", // 경도
  },
  {
    id: 2,
    img: "/img/rank/2.png",
    title: "Booking travel during Corona: good advice in an uncertain time",
    date: "April 06, 2022",
    delayAnimation: "200",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#숙소", "#서울", "#신동권"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 3,
    img: "/img/rank/3.png",
    title: "Where can I go? 5 amazing countries that open right now",
    date: "Jan 06, 2023",
    delayAnimation: "300",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#여행지", "#부산", "#최수지"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 4,
    img: "/img/rank/4.png",
    title: "10 European ski destinations you should visit this winter",
    date: "April 06, 2022",
    delayAnimation: "400",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#숙소", "#부산"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 5,
    img: "/img/rank/5.png",
    title: "Booking travel during Corona: good advice in an uncertain time",
    date: "Jan 06, 2023",
    delayAnimation: "100",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#숙소", "#부산"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 6,
    img: "/img/rank/6.png",
    title: "Where can I go? 5 amazing countries that are open right now",
    date: "April 06, 2022",
    delayAnimation: "200",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#숙소", "#경기"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 7,
    img: "/img/rank/7.png",
    title: "10 European ski destinations you should visit this winter",
    date: "Jan 06, 2023",
    delayAnimation: "300",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#맛집", "#경기"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 8,
    img: "/img/rank/8.png",
    title: "Booking travel during Corona: good advice in an uncertain time",
    date: "April 06, 2022",
    delayAnimation: "200",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#맛집", "#경기"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 9,
    img: "/img/rank/9.png",
    title: "Where can I go? 5 amazing countries that are open right now",
    date: "April 06, 2022",
    delayAnimation: "300",
    details: `For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.`,
    tags: ["#맛집", "#인천"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 10,
    img: "/img/rank/1.png",
    title: "10 European ski destinations you should visit this winter",
    date: "April 06, 2022",
    delayAnimation: "100",
    details: `Ut enim ad minim veniam, quis nostrud exerc ullamco laboris nisi ut aliquip.`,
    tags: ["#여행지", "#인천"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
  {
    id: 11,
    img: "/img/rank/2.png",
    title: "Where can I go? 5 amazing countries that are open right now",
    date: "April 06, 2022",
    delayAnimation: "200",
    details: `Ut enim ad minim veniam, quis nostrud exerc ullamco laboris nisi ut aliquip.`,
    tags: ["#여행지", "#인천"],
    images: ["/img/rank/1.png", "/img/rank/2.png", "/img/rank/3.png", "/img/rank/4.png"], // 수정된 images 배열
  },
];

export default blogs;
