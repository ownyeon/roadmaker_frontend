import React, { useState } from "react";
import BlogPagination from "./BlogPagination";
import Tourlist from "./tourlist";


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
const regions = ["#전국","#서울", "#인천", "#대전", "#대구", "#부산", "#광주", "#대전", "#울산", 
                "#세종", "#경기", "#강원", "#충북", "#충남", "#전북", "#전남", "#경북", "#경남", "#제주"];               

const themes = ["#전체","#대한민국100대명소","#숙박", "#가족과함께", "#연인", "#샘플1", "#샘플2", "#샘플3"
                , "#샘플4", "#샘플5", "#샘플6", "#샘플7", "#샘플8"];


const RegionSelector: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null); // 주요지역
  const [subFilterOptions, setSubFilterOptions] = useState<string[]>([]); // 하위지역
  const [selectedTheme, setSelectedTheme] = useState<string[]>([]); // 테마
  const [selectedSubRegion, setSelectedSubRegion] = useState<string[]>([]); // 다중하위지역
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]); //선택된 키워드 저장


  //주요지역
  const handleRegionClick = (region: string) => {
    let updatedKeywords: string[] = [];
  
    if (region === "#전국") {
      // '전국'을 선택하면 하위 지역과 테마에서 기본적으로 '#전체'를 선택
      setSelectedRegion("#전국");
      setSelectedKeywords((prevKeywords) => {
        // '#전국'을 항상 목록에 추가
        const newKeywords = [...prevKeywords, "#전국"];
        return Array.from(new Set(newKeywords));  // 중복 제거
      });
      setSubFilterOptions([]); // 하위 지역 초기화 (전국 선택 시 더 이상 하위 지역 없음)
      setSelectedSubRegion(["#전체"]); // 하위 지역에서 기본적으로 '전체' 설정
      setSelectedTheme(["#전체"]); // 테마에서 기본적으로 '전체' 설정
      updatedKeywords = ["#전국", "#전체"];
    } else {
      if (selectedRegion === region) {
        setSelectedRegion(null);
        updatedKeywords = updatedKeywords.filter((item) => item !== region);
        setSubFilterOptions([]); // 하위 지역 초기화
        setSelectedSubRegion([]); // 하위 지역 초기화
        setSelectedTheme([]); // 테마 초기화
      } else {
        setSelectedRegion(region);
        updatedKeywords = [region];
        setSubFilterOptions(subRegions[region] || []); // 해당 지역의 하위 지역을 설정
        setSelectedSubRegion([]); // 하위 지역 초기화
        setSelectedTheme([]); // 테마 초기화
      }
    }
  
    // 선택된 키워드 업데이트
    setSelectedKeywords(updatedKeywords);
  };


// 하위 지역 관리
const handleSubRegionClick = (subRegion: string) => {
  setSelectedSubRegion((prevState) => {
    let updatedSubRegions = [...prevState];
    if (subRegion === "#전체") {
      if (prevState.includes("#전체")) {
        updatedSubRegions = prevState.filter((item) => item !== "#전체");
      } else {
        updatedSubRegions = ["#전체"];
      }
    } else {
      if (prevState.includes(subRegion)) {
        updatedSubRegions = prevState.filter((item) => item !== subRegion);
      } else {
        updatedSubRegions = [...prevState, subRegion];
      }
      if (updatedSubRegions.includes("#전체")) {
        updatedSubRegions = updatedSubRegions.filter((item) => item !== "#전체");
      }
    }

    setSelectedKeywords((prevKeywords) => {
      const majorRegionKeywords = selectedRegion ? [selectedRegion] : [];
      const themeKeywords = selectedTheme.length > 0 ? selectedTheme : [];
      return [...majorRegionKeywords, ...updatedSubRegions, ...themeKeywords];
    });

    return updatedSubRegions;
  });
};

// 테마 선택 처리
const handleThemeChange = (theme: string) => {
  setSelectedTheme((prevState) => {
    let updatedThemes: string[];

    if (theme === "#전체") {
      // '#전체' 클릭 시 다른 테마를 모두 비우고 '#전체'만 추가
      if (prevState.includes("#전체")) {
        updatedThemes = [];  // '#전체'를 다시 클릭하면 선택된 테마를 모두 비운다.
      } else {
        updatedThemes = ["#전체"];  // '#전체'를 활성화하면 다른 모든 테마는 비활성화
      }
    } else {
      // 다른 테마를 선택했을 때 '#전체'는 제외하고 해당 테마만 추가
      if (prevState.includes("#전체")) {
        updatedThemes = prevState.filter(item => item !== "#전체");  // '#전체'가 선택된 상태에서 다른 테마를 추가
      } else {
        updatedThemes = [...prevState, theme];  // '#전체'가 선택되지 않은 상태에서 다른 테마를 추가
      }
    }

    // 선택된 키워드를 업데이트
    setSelectedKeywords((prevKeywords) => {
      const majorRegionKeywords = selectedRegion ? [selectedRegion] : [];
      const subRegionKeywords = selectedSubRegion.length > 0 ? selectedSubRegion : [];
      return [...majorRegionKeywords, ...subRegionKeywords, ...updatedThemes];
    });

    return updatedThemes;
  });
};

            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "100vh",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <h3>📍{selectedRegion === "#전국" ? "전국" : selectedRegion}</h3> {/* "전국" 표시 */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {Object.keys(subRegions)
                      .slice(0, 18)
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
                            height: "50px",
                            flex: "1 0 calc(11.1% - 10px)",
                            display: "flex",
                          }}
                        >
                          {region}
                        </div>
                      ))}
                  </div>
                </div>

                    {selectedRegion && (
                      <>
                        <h4>🏙️ {selectedSubRegion.join(",")}</h4>
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                          {subFilterOptions.length > 0 ? (
                            subFilterOptions.map((subRegion) => (
                              <div
                                key={subRegion}
                                onClick={() => handleSubRegionClick(subRegion)}
                                style={{
                                  backgroundColor: selectedSubRegion.includes(subRegion) ? "#4CAF50" : "#ddd",
                                  color: selectedSubRegion.includes(subRegion) ? "white" : "black",
                                  padding: "10px 20px",
                                  borderRadius: "5px",
                                  justifyContent: "center",
                                  flex: "1 0 calc(20% - 10px)",
                                  maxWidth: "115px",
                                  height: "50px",
                                }}
                              >
                                {subRegion}
                              </div>
                            ))
                          ) : (
                            <p>전국 선택!!</p>
                          )}
                        </div>
                      </>
                    )}

{selectedRegion && (
  <div style={{ marginTop: "20px" }}>
    <h4>🎨 {selectedTheme.length > 0 ? selectedTheme.join(",") : "선택된 테마 없음"}</h4>
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
            backgroundColor:
              selectedTheme.includes(theme) || (selectedRegion && theme === "#전체")
                ? "#4CAF50"  // '#전체' 버튼 또는 선택된 테마 활성화
                : "#ddd", 
            color:
              selectedTheme.includes(theme) || (selectedRegion && theme === "#전체")
                ? "white"
                : "black",
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
                <div style={{ marginTop: "20px", width: "100%" }}>
                  <section
                    style={{
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      backgroundColor: "#f9f9f9",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2>선택된 키워드들:</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {selectedKeywords.map((keyword, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: "transparent",
                            color: "#4CAF50",
                            padding: "5px 10px",
                            border: "1px solid #4CAF50",
                            borderRadius: "5px",
                            fontSize: "16px",
                          }}
                        >
                          {keyword}
                        </div>
                      ))}
                    </div>                  
                  </section>
                </div>
                <Tourlist selectedKeywords={selectedKeywords} />     
              <BlogPagination />
            </div>
            );
          };

export default RegionSelector;