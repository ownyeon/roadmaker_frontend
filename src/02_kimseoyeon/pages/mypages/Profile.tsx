import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";
import AvatarUploader from "./AvatarUploader";

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__main">
        <div className="dashboard__content">
          <h1 className="text-30 lh-14 fw-600 titleFont">내 정보</h1>
          <p className="text-15 text-light-1 subFont">
            계정 정보를 수정할 수 있습니다.
          </p>
          <AvatarUploader />

          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <form>
              <div className="row y-gap-20">
                <div className="col-12">
                <label className="lh-1 text-16 fw-600">닉네임</label>
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1 ">
                      사용자 이름
                    </label>
                  </div>
                </div>
                <div className="col-12">
                <label className="lh-1 text-16 fw-600">이메일</label>
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      사용자 이메일
                    </label>
                  </div>
                </div>



                <div className="col-md-6">
                <label className="lh-1 text-16 fw-600">나이</label>
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      사용자 나이
                    </label>
                  </div>
                </div>
              
                <div className="col-md-6">
                <label className="lh-1 text-16 fw-600" style={{ marginTop: "10px" }}>성별</label>
                  <div className="d-flex align-items-center gap-4"  style={{ marginTop: "20px" }}>
                    <div className="d-flex align-items-center gap-1">
                      <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="male" 
                        required 
                        style={{ width: "16px", height: "16px" }} 
                      />
                      <label htmlFor="male" className="mb-0">남</label>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female" 
                        required 
                        style={{ width: "16px", height: "16px" }} 
                      />
                      <label htmlFor="female" className="mb-0">여</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="lh-1 text-30 fw-600" style={{ marginBottom: "20px" }}>비밀번호 설정</label>
                  <p></p>
                  <a href="/password-reset" className="password-link">
                    비밀번호 변경하기
                  </a>
                </div>

            
              </div>

              <div className="d-inline-block pt-30" style={{ width: "100%" }}> 
                <button
                  type="submit"
                  className="button h-60 px-32 -dark-1 bg-blue-1 text-white"
                >
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

export default Profile;
