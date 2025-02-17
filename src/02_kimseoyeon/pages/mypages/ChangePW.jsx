import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";
import { FaEye } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";


const ChangePW = () => {
    const navigate = useNavigate(); 

  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__content">
          <h1 className="text-30 lh-14 fw-600 titleFont">비밀번호 변경</h1>
          <p className="text-15 text-light-1 subFont">
            비밀번호를 수정할 수 있습니다.
          </p>

          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <form>
              <div className="row y-gap-20">
                <div className="col-12">
                <label className="lh-1 text-16 fw-600 subFont">현재 비밀번호</label>
                  <div className="form-input">
                    <input type="text" required  placeholder="현재 비밀번호를 입력해 주세요."
                    style={{  padding: "0 15px"}}
                    />
                  </div>
                </div>
                <div className="col-12">
                <label className="lh-1 text-16 fw-600 subFont">새 비밀번호</label>
                  <div className="form-input">
                    <input type="password" required  placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
                      style={{  padding: "0 15px"}}
                      />
                  </div>
                </div>
                <div className="col-12">
                <label className="lh-1 text-16 fw-600 subFont">새 비밀번호 확인</label>
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

              <div className="d-flex gap-3 pt-30"> 
                <button
                    type="submit"
                    className="button h-60 px-32 -dark-1 bg-white-1  subFont white-button"
                    onClick={() => navigate(-1)} 

                >
                    돌아가기
                </button>

                <button
                    type="button"
                    className="button h-60 px-32 -dark-1 bg-white-1 text-white subFont"                >
                    저장
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
