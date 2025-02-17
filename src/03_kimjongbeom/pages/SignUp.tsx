// src/03_kimjongbeom/pages/SignUp.tsx

import LoginWithSocial from "../components/common/LoginWithSocial"; // SNS 간편 로그인 컴포넌트
import SignUpForm from "../components/common/SignUpForm"; // 회원가입 폼 컴포넌트

const SignUp = () => {
  return (
    <>

      <div className="header-margin"></div>
      {/* header top margin */}


      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <SignUpForm />  {/* 회원가입 폼 컴포넌트 */}
                {/* End SignUP */}

                <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center subFont">or sign in with</div>
                  </div>
                  <LoginWithSocial />   {/* SNS 로그인 버튼들 */}
                  <div className="col-12">
                    <div className="text-center px-30 subFont">
                      By creating an account, you agree to our Terms of Service
                      and Privacy Statement.
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

    </>
  );
};

export default SignUp;
