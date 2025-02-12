import { Link } from "react-router-dom";
import LoginCSS from "../../css/Login.module.scss";

const LoginForm = () => {
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <div className="d-flex align-items-center">
          {/* 로고 이미지 */}
          <img
            src="/src/01_common/assets/imgs/HeaderLogo.png"  // 로고 이미지 경로
            alt="Logo"
            className="logo-img mr-10"  // margin-right로 간격 추가
            style={{ width: "60px", height: "40px" }}  // 로고 크기 조정
          />
          {/* 텍스트 */}
          <div className="font-large" style={{fontSize:"24px"}}>Road Maker</div>
        </div>
        <h1 className="text-22 fw-500">AI 여행 스케줄링 플래너, 로드 메이커</h1>
      </div>

      {/* End .col */}

      <div className="col-12">
        <div>아이디(이메일)</div>
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div>비밀번호</div>
        <div className="form-input ">
          <input type="password" required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}


      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          로그인
        </button>
      </div>
      <div className="col-12">
        <div className={LoginCSS.loginInfo}>비밀번호를 잊으셨나요?&nbsp;
        <a href="#" className={LoginCSS.infoLink}>
           비밀번호 찾으러 가기
        </a>
        </div>
        <div className={LoginCSS.loginInfo}>
          아직 회원이 아니세요?&nbsp;{" "}
          <Link to="/signup" className={LoginCSS.infoLink}>
            이메일회원가입
          </Link>
        </div>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
