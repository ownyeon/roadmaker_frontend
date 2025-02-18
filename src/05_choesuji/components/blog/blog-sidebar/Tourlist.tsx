import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 주요도시 목록 (18개 시도만 포함)
const mainCities = [
  "전국", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", 
  "경기", "강원", "충북", "충남", "경북", "경남", "전북", "전남", "제주"
    ];

// 시도별 시군구 목록
const subRegions: { [key: string]: string[] } = { 
    전체: [],
    서울: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중량구"],
    부산: ["강서구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "금정구"],
    대구: ["달서구", "달성군", "동구", "북구", "서구", "수성구", "중구", "남구", "군위군"],
    인천: ["강화군", "계양구", "남동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"],
    광주: ["광산구", "남구", "동구", "북구", "서구"],
    대전: ["대덕구", "동구", "서구", "유성구", "중구"],
    울산: ["남구", "동구", "북구", "울주군", "중구"],
    세종: ["세종시"],
    경기: ["가평군", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "양주시", "양평군", "여주군", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "하남시", "화성시"],
    강원: ["강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍천군", "횡성군"],
    충북: ["괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "진천군", "청주시", "충주시", "증평군"],
    충남: ["공주시", "금산군", "논산시", "당진시", "보령시", "서산시", "아산시", "연기군", "예산군", "천안시", "청양군", "태안군", "홍성군"],
    경북: ["경산시", "경주시", "고령군", "구미시", "군위군", "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시"],
    경남: ["거제시", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시", "하동군"],
    전북: ["고창군", "군산시", "김제시", "남원시", "무주군", "보령시", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시"],
    전남: ["강진군", "고흥군", "곡성군", "광양시", "구례군", "나주시", "담양군", "목포시", "무안군", "보성군", "순천시", "신안군", "여수시", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "해남군"],
    제주: ["서귀포시", "제주시"]
  };

  //테마목록
  const themes = {
    샘플1: "샘플1",
    샘플2: "샘플2",
    샘플3: "샘플3",
    샘플4: "샘플4",
    샘플5: "샘플5",
  }
  

// 예시 데이터
const items = [
  { id: 1, img: 'image1.jpg', title: '보령녹차마을', date: '2025-02-17', mainCity: '서울', subCity: '강남구', theme: '샘플1' },
  { id: 2, img: 'image2.jpg', title: '부산감성카페', date: '2025-02-18', mainCity: '부산', subCity: '서면', theme: '샘플2' },
  { id: 3, img: 'image3.jpg', title: '대구곱창거리', date: '2025-02-19', mainCity: '대구', subCity: '달서구', theme: '샘플3' },
  { id: 4, img: 'image4.jpg', title: '서울역사문화거리', date: '2025-02-20', mainCity: '서울', subCity: '강남구', theme: '샘플4'},
  { id: 5, img: 'image5.jpg', title: '통일전망대', date: '2025-02-21', mainCity: '부산', subCity: '서면', theme: '샘플5'},
  // 추가 데이터...
];


// 키워드 배열
interface TourlistProps {
  selectedKeywords: string[];  
}

const Tourlist: React.FC<TourlistProps> = ({ selectedKeywords }) => {
  const [filteredItems, setFilteredItems] = useState(items);


  // 필터링 로직
  useEffect(() => {
    let filtered = items;


    // 선택된 주요 지역에 따라 필터링 (시도)
    const selectedMainCity = selectedKeywords.find(keyword => keyword.startsWith('#') && 
      mainCities.includes(keyword.slice(1))
    );
    if (selectedMainCity) {
      const mainCityValue = selectedMainCity.slice(1); // '#서울', '#부산', '#대구' 형식
      filtered = filtered.filter(item => item.mainCity === mainCityValue);
    }


    // 선택된 하위 지역에 따라 필터링
    selectedKeywords.forEach(keyword => {
      const keywordValue = keyword.slice(1); // '#' 제거
    // 하위 지역 필터링
    for (const city in subRegions) {
        if (selectedKeywords.includes(`#${city}`)) {
          const subCities = subRegions[city];
          if (subCities.includes(keywordValue)) {
            filtered = filtered.filter(item => item.subCity === keywordValue);
          }
        }
      }

      // 선택된 테마에 따라 필터링
      if (Object.keys(themes).includes(keywordValue)) {
        filtered = filtered.filter(item => item.theme === keywordValue);
      }
    });

    setFilteredItems(filtered);  // 필터링된 항목 설정
  }, [selectedKeywords]);

  return (
    <div>
      <div className="row y-gap-30 pt-30">
        {filteredItems.length === 0 ? (
          <p>조건에 맞는 항목이 없습니다.</p>
        ) : (
          filteredItems.slice(0, 9).map((item) => (
            <div className="col-lg-3 col-sm-6" key={item.id}>
              <Link to={`/blog-details/${item.id}`} className="blogCard -type-1 d-block">
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img className="cover w-100 img-fluid" src={item.img} alt="image" />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tourlist;
