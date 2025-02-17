import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 예시 데이터
const items = [
  { id: 1, img: 'image1.jpg', title: '보령녹차마을', date: '2025-02-17', mainCity: '서울', subCity: '강남구', theme: '샘플5' },
  { id: 2, img: 'image2.jpg', title: '부산감성카페', date: '2025-02-18', mainCity: '부산', subCity: '기장군', theme: '샘플4' },
  { id: 3, img: 'image3.jpg', title: '대구곱창거리', date: '2025-02-19', mainCity: '대구', subCity: '달서구', theme: '샘플3' },
  { id: 4, img: 'image4.jpg', title: '서울역사문화거리', date: '2025-02-20', mainCity: '서울', subCity: '강북구', theme: '샘플2' },
  { id: 5, img: 'image5.jpg', title: '통일전망대', date: '2025-02-21', mainCity: '부산', subCity: '수영구', theme: '샘플1' },
  // 추가 데이터...
];

interface TourlistProps {
    selectedKeywords: string[];  // 키워드 배열
  }
  
  const Tourlist: React.FC<TourlistProps> = ({ selectedKeywords }) => {
    const [filteredItems, setFilteredItems] = useState(items);
    const [availableSubCities, setAvailableSubCities] = useState<string[]>([]);  // 가능한 하위 지역
    const [availableThemes, setAvailableThemes] = useState<string[]>([]);  // 가능한 테마
  
    // 필터링 로직
    useEffect(() => {
      let filtered = items;
  
      // 주요 지역 필터링
      const selectedMainCity = selectedKeywords.find(keyword => keyword.startsWith('#') && ['서울', '부산', '대구'].includes(keyword.slice(1)));
      if (selectedMainCity) {
        const mainCityValue = selectedMainCity.slice(1); // '#서울', '#부산', '#대구' 형식
        filtered = filtered.filter(item => item.mainCity === mainCityValue);
        
        // 주요 지역에 맞는 하위 지역 및 테마 설정
        const subCities = [...new Set(filtered.map(item => item.subCity))];  // 중복 제거
        setAvailableSubCities(subCities);
  
        const themes = [...new Set(filtered.map(item => item.theme))];  // 중복 제거
        setAvailableThemes(themes);
      }
  
      // 하위 지역과 테마 필터링
      selectedKeywords.forEach(keyword => {
        const keywordValue = keyword.slice(1); // '#' 제거
        if (['강남', '서면', '송파'].includes(keywordValue)) {
          filtered = filtered.filter(item => item.subCity === keywordValue);
        }
        if (['문화', '자연', '역사'].includes(keywordValue)) {
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
  
        {/* 필터링된 하위 지역과 테마 선택 UI */}
        <div className="filters mt-20">
          {availableSubCities.length > 0 && (
            <div>
              <h5>하위 지역 선택</h5>
              <ul>
                {availableSubCities.map((subCity) => (
                  <li key={subCity}>
                    <button
                      onClick={() => setFilteredItems(filteredItems.filter(item => item.subCity === subCity))}
                    >
                      {subCity}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
  
          {availableThemes.length > 0 && (
            <div>
              <h5>테마 선택</h5>
              <ul>
                {availableThemes.map((theme) => (
                  <li key={theme}>
                    <button
                      onClick={() => setFilteredItems(filteredItems.filter(item => item.theme === theme))}
                    >
                      {theme}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Tourlist;