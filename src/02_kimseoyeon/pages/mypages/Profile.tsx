import React from "react";
import AvatarUploader from "./AvatarUploader";
import { Link } from "react-router-dom";

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
                  <label className="lh-1 text-16 fw-600 subFont">닉네임</label>
                  <div className="form-input">
                    <input type="text" required placeholder="사용자 닉네임" style={{ padding: "0 15px" }} />
                  </div>
                </div>
                <div className="col-12">
                  <label className="lh-1 text-16 fw-600 subFont">이메일</label>
                  <div className="form-input">
                    <input type="text" required placeholder="사용자 이메일" style={{ padding: "0 15px" }} />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="lh-1 text-16 fw-600 subFont">나이</label>
                  <div className="form-input">
                    <input type="text" required placeholder="사용자 나이" style={{ padding: "0 15px" }} />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="lh-1 text-16 fw-600 subFont" style={{ marginTop: "10px" }}>성별</label>
                  <div className="d-flex align-items-center gap-4" style={{ marginTop: "20px" }}>
                    <div className="d-flex align-items-center gap-1">
                      <input type="radio" id="male" name="gender" value="male" required />
                      <label htmlFor="male" className="mb-0 subFont">남</label>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <input type="radio" id="female" name="gender" value="female" required />
                      <label htmlFor="female" className="mb-0 subFont">여</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="lh-1 text-30 fw-600 titleFont" style={{ marginBottom: "20px" }}>비밀번호 설정</label>
                  <p></p>
                  <Link to="/mypage/change-password" className="password-link subFont">
                    비밀번호 변경하기
                  </Link>
                </div>
              </div>

              <div className="d-inline-block pt-30" style={{ width: "100%" }}> 
                <button type="submit" className="button h-60 px-32 -dark-1 bg-black-1 text-white subFont">
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
