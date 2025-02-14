import "../../../02_kimseoyeon/styles/mypage.scss";
import "../../styles/font.scss";

const Profile = () => {
  return (
    <div className="dashboard">
      {/* 사이드바는 제외된 상태 */}
      <div className="dashboard__main">
        <div className="dashboard__content">
          <h1 className="text-30 lh-14 fw-600">내 정보</h1>
          <p className="text-15 text-light-1">
            계정 정보를 수정할 수 있습니다.
          </p>

          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <form>
              <div className="row y-gap-20">
                <div className="col-12">
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      사용자 이름
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      이메일
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      전화번호
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input">
                    <textarea required rows={5}></textarea>
                    <label className="lh-1 text-16 text-light-1">
                      자기소개
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-inline-block pt-30">
                <button
                  type="submit"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  저장하기
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
