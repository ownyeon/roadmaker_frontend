
import kakaoIcon from '../../assets/linkbuttons/kakao_btn.png';
import naverIcon from '../../assets/linkbuttons/naver_btn.png';
import googleIcon from '../../assets/linkbuttons/google_light.png';
import LoginCSS from '../../css/Login.module.scss';

const LoginWithSocial = () => {
  return (
    <>
    <div className="row flex-center social">  {/* 가운데 정렬을 위해 row와 justify-content-center 사용 */}
      
      {/* Google 버튼 */}
      <div className="col-3 mb-3"> {/* 각 버튼을 col-md-3로 설정하고 모바일에서 col-6으로 설정 */}
        <button className={`${LoginCSS.socialButton} ${LoginCSS.socialButtonOutlineBlue} col-12 py-15 rounded-8`}>
          <img
            src={googleIcon}
            alt="Google Icon"
            className={LoginCSS.socialIcon}  // 이미지 크기 조정
          />
        </button>
      </div>

      {/* Naver 버튼 */}
      <div className="col-3 mb-3"> {/* 각 버튼을 col-md-3로 설정하고 모바일에서 col-6으로 설정 */}
        <button className={`${LoginCSS.socialButton} ${LoginCSS.socialButtonOutlineBlue} col-12 py-15 rounded-8`}>
          <img
            src={naverIcon}
            alt="Naver Icon"
            className={LoginCSS.socialIcon}  // 이미지 크기 조정
          />
        </button>
      </div>

      {/* Kakao 버튼 */}
      <div className="col-3 mb-3"> {/* 각 버튼을 col-md-3로 설정하고 모바일에서 col-6으로 설정 */}
        <button className={`${LoginCSS.socialButton} ${LoginCSS.socialButtonOutlineRed} col-12 py-15 rounded-8`}>
          <img
            src={kakaoIcon}
            alt="Kakao Icon"
            className={LoginCSS.socialIcon}  // 이미지 크기 조정
          />
        </button>
      </div>
    </div>
    </>
  );
};

export default LoginWithSocial;
