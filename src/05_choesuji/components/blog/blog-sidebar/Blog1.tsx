import { useState } from "react";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

// 블로그 데이터 타입 정의
type BlogData = {
  id: number;
  img: string;
  title: string;
  date: string;
  tags?: string[];  // tags는 배열일 수도 있고 아닐 수도 있음
};

const Blog1 = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null); // 선택된 시도
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]); // 선택된 시군구들
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]); // 선택된 테마 키워드
  const [filteredItems, setFilteredItems] = useState<BlogData[]>([]);

  const [filterOption, setFilterOption] = useState("art_culture");

  // 공통 테마 키워드 (시군구 상관없이 동일한 테마)
  const commonThemes = ["여행", "핫플레이스", "쇼핑", "맛집", "자연", "문화", "역사", "야경"];

  // 시도별 시군구 목록
  const filterOptions = [
    { label: "#전체", value: "#전체", districts: [] },
    { label: "#서울", value: "#서울", districts: ["강남구", "강북구", "종로구", "동대문구", "마포구", "용산구"] },
    { label: "#부산", value: "#부산", districts: ["부산진구", "해운대구", "수영구"] },
    { label: "#대구", value: "#대구", districts: ["중구", "동구", "서구"] },
    { label: "#인천", value: "#인천", districts: ["연수구", "남동구", "미추홀구"] },
    { label: "#광주", value: "#광주", districts: ["동구", "서구", "북구"] },
    // 필요에 따라 더 추가 가능
  ];

  const handleCitySelection = (city: string) => {
    setSelectedCity(city);
    setSelectedDistricts([]); // 시군구 초기화
    setSelectedThemes([]); // 테마 키워드 초기화
  };

  const handleDistrictSelection = (district: string) => {
    if (selectedDistricts.includes(district)) {
      setSelectedDistricts(selectedDistricts.filter(item => item !== district)); // 이미 선택된 시군구를 제거
    } else {
      setSelectedDistricts([...selectedDistricts, district]); // 시군구 추가
    }
  };

  const handleThemeSelection = (theme: string) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter(item => item !== theme)); // 이미 선택된 테마 키워드 제거
    } else {
      setSelectedThemes([...selectedThemes, theme]); // 테마 키워드 추가
    }
  };

  return (
    <div>
      {/* 시도 (첫 번째 키워드) 선택 */}
      <div className="keyword-selector">
        <h4>시도 선택</h4>
        <div className="keyword-list">
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={`keyword-button ${selectedCity === option.value ? "active" : ""}`}
              onClick={() => handleCitySelection(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 시군구 (두 번째 키워드) 선택, 첫 번째 키워드 선택 시 시군구 드롭다운 표시 */}
      {selectedCity && (
        <div className="keyword-selector">
          <h4>시군구 선택</h4>
          <div className="keyword-list">
            {filterOptions
              .find(option => option.value === selectedCity)
              ?.districts?.map((district) => (
                <button
                  key={district}
                  className={`keyword-button ${selectedDistricts.includes(district) ? "active" : ""}`}
                  onClick={() => handleDistrictSelection(district)}
                >
                  {district}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* 테마 키워드 (세 번째 키워드) 선택, 시군구 선택 시 테마 드롭다운 표시 */}
      {selectedDistricts.length > 0 && (
        <div className="keyword-selector">
          <h4>테마 키워드 선택</h4>
          <div className="keyword-list">
            {commonThemes.map((theme) => (
              <button
                key={theme}
                className={`keyword-button ${selectedThemes.includes(theme) ? "active" : ""}`}
                onClick={() => handleThemeSelection(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 블로그 카드 목록 */}
      <div className="row y-gap-30 pt-30">
        {filteredItems.slice(0, 9).map((item) => (
          <div className="col-lg-4 col-sm-6" key={item.id}>
            <div className="blogCard -type-1 d-block">
              <div className="blogCard__image">
                <div className="rounded-8">
                  <img
                    className="cover w-100 img-fluid"
                    src={item.img}
                    alt="image"
                  />
                </div>
              </div>
              <div className="pt-20">
                <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                <div className="text-light-1 text-15 lh-14 mt-5">
                  {item.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogPagination />
    </div>
  );
};

export default Blog1;
