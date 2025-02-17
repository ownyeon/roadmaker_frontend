import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";
import { FaEye } from "react-icons/fa"; 

const ChangePW = () => {

  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__content">
          <h1 className="text-30 lh-14 fw-600 titleFont" style={{marginBottom : "10px"}}>회원 탈퇴</h1>

          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <form>        
            <div className="alert-box">
              <h2 className="alert-title">탈퇴 시 유의해주세요!</h2>
              <p className="alert-text">
                회원 정보 및 여행 일정 데이터 등 개인 서비스 이용 기록은 탈퇴 즉시 삭제되며, <br />
                삭제된 데이터는 복구되지 않습니다.
              </p>
          </div>
              <div className="row y-gap-20">
                <div className="col-12">
                <label className="lh-1 text-16 fw-600 subFont">현재 비밀번호</label>
                  <div className="form-input">
                    <input type="password" required  placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
                      style={{  padding: "0 15px"}}
                      />
                    <span className="eye-icon">
                        <FaEye />
                    </span>
                    </div>
                </div>

      
              </div>

              <div className="d-inline-block pt-30" style={{ width: "100%" }}> 
                <button
                  type="submit"
                  className="button h-60 px-32 bg-red-1 text-white subFont"
                >
                  탈퇴하기
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePW;
