import CallToActions from "../components/common/CallToActions"; 
// CallToActions 컴포넌트 불러오기

import LoginWithSocial from "../components/common/LoginWithSocial"; 
// SNS 간편 로그인 컴포넌트 불러오기

import LoginForm from "../components/common/LoginForm"; 
// 로그인 폼 컴포넌트 불러오기

import LoginCSS from "../css/Login.module.scss"; 
// 로그인 페이지 스타일을 위한 CSS 모듈 불러오기

//====================================================================
/*
상단 여백이 추가된 후 로그인 섹션이 화면에 표시
중앙에 배치된 로그인 폼이 사용자가 입력할 수 있는 필드를 제공
SNS 간편 로그인을 위한 구분선이 보여지고, 그 아래에는 소셜 로그인 버튼이 c출력
일반 로그인이나 SNS 로그인 중 선택
로그인 관련 주의 사항 텍스트로 안내
로그인 이후 사용자 액션 안내 
*/
//====================================================================

const LogIn = () => {
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                 {/* 큰 화면에서는 여백을 크게, 작은 화면에서는 여백을 작게 설정, 흰 배경, 그림자, 둥근 모서리 스타일 */}
                <LoginForm />
                {/* End .Login */}

                <div className="row y-gap-20 pt-30">
                  {/* 로그인 폼 아래에 요소들 사이의 간격을 설정하는 row */}
                  <div className="col-12">
                    <div className={LoginCSS.dividerWithText}>
                      {/* SNS 간편 로그인 구분선 */}
                      <div className={LoginCSS.dividerWithTextContainer}>
                        <span className={LoginCSS.dividerText}>&nbsp;SNS 간편 로그인&nbsp;</span>
                      </div>
                    </div>
                  </div>
                  <LoginWithSocial />
                  <div className="col-12">
                    <div className="text-center px-30">
                      <div className={LoginCSS.loginInfo}>각 소셜 로그인 계정과 일반 로그인 계정은</div>
                      <div className={LoginCSS.loginInfo}> 서로 연동되지 않습니다.</div>
                      {/* 소셜 로그인 계정과 일반 로그인 계정이 연동되지 않음을 안내하는 문구 */}
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* 로그인 후 사용자가 취할 수 있는 행동을 유도하는 Call To Action 섹션 */}
      {/* End Call To Actions Section */}
    </>
  );
};

export default LogIn;
