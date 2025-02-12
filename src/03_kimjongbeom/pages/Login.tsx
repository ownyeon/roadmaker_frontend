import CallToActions from "../components/common/CallToActions";
import LoginWithSocial from "../components/common/LoginWithSocial";
import LoginForm from "../components/common/LoginForm";
import LoginCSS from "../css/Login.module.scss";



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
                <LoginForm />
                {/* End .Login */}

                <div className="row y-gap-20 pt-30">
                <div className="col-12">
                    <div className={LoginCSS.dividerWithText}>
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
      {/* End Call To Actions Section */}
    </>
  );
};

export default LogIn;
