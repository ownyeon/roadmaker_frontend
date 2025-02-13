import React, { useState } from "react";
  
  // 주요 지역과 해당하는 하위 지역 데이터
  const subRegions: { [key: string]: string[] } = {
    "#전국": [],
    "#서울": [
      "#전체", "#강남구", "#강동구", "#강북구", "#강서구", "#관악구", "#광진구", "#구로구", "#금천구", "#노원구",
      "#동대문구", "#동작구", "#마포구", "#서대문구", "#서초구", "#성동구", "#성북구", "#송파구", "#양천구",
      "#영등포구", "#용산구", "#은평구", "#종로구", "#중구", "#중량구"
    ],
    "#부산": [
      "#전체", "#강서구", "#기장군", "#남구", "#동구", "#동래구", "#부산진구", "#북구", "#사상구", "#사하구",
      "#서구", "#수영구", "#연제구", "#영도구", "#중구", "#해운대구", "#금정구"
    ],
    "#대구": [
      "#전체", "#달서구", "#달성군", "#동구", "#북구", "#서구", "#수성구", "#중구", "#남구", "#군위군"
    ],
    "#인천": [
      "#전체", "#강화군", "#계양구", "#남동구", "#미추홀구", "#부평구", "#서구", "#연수구", "#옹진군", "#중구"
    ],
    "#광주": [
      "#전체", "#광산구", "#남구", "#동구", "#북구", "#서구"
    ],
    "#대전": [
      "#전체", "#대덕구", "#동구", "#서구", "#유성구", "#중구"
    ],
    "#울산": [
      "#전체", "#남구", "#동구", "#북구", "#울주군", "#중구"
    ],
    "#세종": [
      "#전체", "#세종시"
    ],
    "#경기": [
      "#전체", "#가평군", "#광명시", "#광주시", "#구리시", "#군포시", "#김포시", "#남양주시", "#동두천시", "#부천시",
      "#성남시", "#수원시", "#시흥시", "#안산시", "#안성시", "#양주시", "#양평군", "#여주군", "#연천군", 
      "#오산시", "#용인시", "#의왕시", "#의정부시", "#이천시", "#파주시", "#평택시", "#하남시", "#화성시"
    ],
    "#강원": [
      "#전체", "#강릉시", "#고성군", "#동해시", "#삼척시", "#속초시", "#양구군", "#양양군", "#영월군", "#원주시",
      "#인제군", "#정선군", "#철원군", "#춘천시", "#태백시", "#평창군", "#홍천군", "#횡성군"
    ],
    "#충북": [
      "#전체", "#괴산군", "#단양군", "#보은군", "#영동군", "#옥천군", "#음성군", "#제천시", "#진천군", "#청주시",
      "#충주시", "#증평군"
    ],
    "#충남": [
      "#전체", "#공주시", "#금산군", "#논산시", "#당진시", "#보령시", "#서산시", "#아산시", "#연기군", "#예산군",
      "#천안시", "#청양군", "#태안군", "#홍성군"
    ],
    "#경북": [
      "#전체", "#경산시", "#경주시", "#고령군", "#구미시", "#군위군", "#김천시", "#문경시", "#봉화군", "#상주시",
      "#성주군", "#안동시", "#영덕군", "#영양군", "#영주시", "#영천시", "#예천군", "#울릉군", "#울진군",
      "#의성군", "#청도군", "#청송군", "#칠곡군", "#포항시"
    ],
    "#경남": [
      "#전체", "#거제시", "#김해시", "#남해군", "#밀양시", "#사천시", "#산청군", "#양산시", "#의령군", "#진주시",
      "#창녕군", "#창원시", "#통영시", "#하동군"
    ],
    "#전북": [
      "#전체", "#고창군", "#군산시", "#김제시", "#남원시", "#무주군", "#보령시", "#부안군", "#순창군", "#완주군",
      "#익산시", "#임실군", "#장수군", "#전주시", "#정읍시"
    ],
    "#전남": [
      "#전체", "#강진군", "#고흥군", "#곡성군", "#광양시", "#구례군", "#나주시", "#담양군", "#목포시", "#무안군",
      "#보성군", "#순천시", "#신안군", "#여수시", "#영광군", "#영암군", "#완도군", "#장성군", "#장흥군",
      "#진도군", "#해남군"
    ],
    "#제주": [
      "#전체", "#서귀포시", "#제주시"
    ]
    };
  
//지역과 해당하는 테마들 설정
const regions = ["#서울","#전국","#인천","#대전","#대구"];
const themes = ["#대한민국100대명소","#숙박", "#가족과함께", "#연인", "#샘플1", "#샘플2", "#샘플3"
                , "#샘플4", "#샘플5", "#샘플6", "#샘플7", "#샘플8"];

const regionThemes1 = Object.fromEntries(
  regions.map(region => [region, themes])
);

const RegionSelector: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null); // 주요지역
  const [subFilterOptions, setSubFilterOptions] = useState<string[]>([]); // 하위지역
  const [selectedTheme, setSelectedTheme] = useState<string[]>([]); // 테마다중선택
  const [selectedSubRegion, setSelectedSubRegion] = useState<string[]>([]); // 다중하위지역


  // 주요 지역 선택 시 하위 지역 변경 또는 선택 해제
  const handleRegionClick = (region: string) => {
    if (selectedRegion === region) {
      setSelectedRegion(null);
      setSubFilterOptions([]); // 하위 지역도 사라지게 처리
      setSelectedTheme([]); // 테마 초기화
    } else {
      setSelectedRegion(region);
      setSubFilterOptions(subRegions[region] || []);
      setSelectedSubRegion([]); // 시도 바꿀때 시군구 초기화
      // 지역 선택 시 해당 지역에 기본적으로 설정된 테마 추가
      setSelectedTheme(regionThemes1[region] || []);
    }
  };


  // 하위 지역 선택 시 중복 가능, 전체 버튼 관련
  const handleSubRegionClick = (subRegion: string) => {
    if (subRegion === '#전체') {
      setSelectedSubRegion([subRegion]);
    } else {
      setSelectedSubRegion((prevState) => {
        if (prevState.includes('#전체')) {
          return prevState.filter(item => item !== '#전체').concat(subRegion);
        } else {
          if (prevState.includes(subRegion)) {
            return prevState.filter((item) => item !== subRegion);
          } else {
            return [...prevState, subRegion];
          }
        }
      });
    }
  };

  // 테마 중복 선택 가능하도록
  const handleThemeChange = (theme: string) => {
    if (selectedTheme.includes(theme)) {
      setSelectedTheme(selectedTheme.filter((item) => item !== theme));
    } else {
      setSelectedTheme([...selectedTheme, theme]);
    }
  };

  return (
    <div>
      <h3>📍 주요 지역 선택 : {selectedRegion}</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* 첫 번째 줄과 두 번째 줄을 하나의 컨테이너로 합침 */}
        <div style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {Object.keys(subRegions)
            .slice(0, 18) // 총 18개를 한 번에 렌더링
            .map((region) => (
              <div
                key={region}
                onClick={() => handleRegionClick(region)}
                style={{
                  padding: "10px",
                  backgroundColor: selectedRegion === region ? "#4CAF50" : "#ddd",
                  color: selectedRegion === region ? "white" : "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textAlign: "center",
                  justifyContent: "center",
                  height: "50px", // 버튼 높이
                  flex: "1 0 calc(11.1% - 10px)",  // 한 줄에 9개씩 나오는 계산
                  display: "flex",
                }}
              >
                {region}
              </div>
            ))}
        </div>
      </div>

      {/* 하위 지역 표시 UI */}
      {selectedRegion && (
        <>
          <h4>🏙️ 선택한 지역: {selectedSubRegion.join(",")}</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {subFilterOptions.length > 0 ? (
              subFilterOptions.map((subRegion) => (
                <div
                  key={subRegion}
                  onClick={() => handleSubRegionClick(subRegion)} // 하위 지역 클릭 처리
                  style={{
                    backgroundColor: selectedSubRegion.includes(subRegion) ? "#4CAF50" : "#ddd",
                    color: selectedSubRegion.includes(subRegion) ? "white" : "black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    justifyContent: "center",
                    flex: "1 0 calc(20% - 10px)", // 버튼 크기 균등 분배
                    maxWidth: "115px", // 최대 너비 제한
                    height: "50px", // 버튼 높이 동일하게 설정
                  }}
                >
                  {subRegion}
                </div>
              ))
            ) : (
              <p>하위 지역이 없습니다.</p>
            )}
          </div>
        </>
      )}

      {/* 테마 선택 UI */}
      {selectedRegion && (
        <div style={{ marginTop: "20px" }}>
          <h4>🎨 테마 선택 : {selectedTheme.join(",")}</h4>
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {themes.map((theme) => (
              <div
                key={theme}
                onClick={() => handleThemeChange(theme)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: selectedTheme.includes(theme) ? "#4CAF50" : "#ddd",
                  color: selectedTheme.includes(theme) ? "white" : "black",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textAlign: "center",
                  height: "50px",
                }}
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionSelector;