import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./01_common/styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" /> {/* 메인페이지*/}
        <Route path="/login" /> {/* 로그인페이지*/}
        <Route path="/login/recovery" /> {/* 비밀번호 찾기 페이지*/}
        <Route path="/register" /> {/* 회원가입페이지*/}
        <Route path="/airoadmaker" /> {/* AI로드메이커 메인*/}
        <Route path="/airoadmaker/generate" /> {/* AI로드메이커 생성*/}
        <Route path="/airoadmaker/detail" /> {/* AI로드메이커 상세페이지*/}
        <Route path="/list" /> {/* 여행지 리스트 */}
        <Route path="/list/detail" /> {/* 여행지 상세페이지*/}
        <Route path="/list/new" /> {/* 여행지 신규 등록*/}
        <Route path="/list/report" /> {/* 여행지 신고 */}
        <Route path="/list/rank" /> {/* 여행지 순위 */}
        <Route path="/list/festival" /> {/* 여행지 축제 페이지 */}
        <Route path="/list/festival/new" /> {/* 축제 신규등록 페이지 */}
        <Route path="/roadtalk" /> {/* 로드톡 리스트 페이지*/}
        <Route path="/roadtalk/detail" /> {/* 로드톡 상세 페이지 */}
        <Route path="/mypage" /> {/* 마이페이지 */}
        <Route path="/admin" /> {/* 관리자페이지 */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
