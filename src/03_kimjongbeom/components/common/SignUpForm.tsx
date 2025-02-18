import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../css/SignUp.scss" // 성별 SCSS 파일 임포트

// 회원가입 폼 컴포넌트
const SignUpForm = () => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    gender: "",
    birthYear: new Date().getFullYear().toString(), //초기 태어난 연도값을 현재 연도로 설정
    agreeToTerms: false,
    verificationCode: "", // 이메일 인증 코드
  });

  const [isEmailSent, setIsEmailSent] = useState(false); // 이메일 인증 상태 관리

  // 폼 필드 값 변경 시 호출되는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 약관 동의 체크박스 변경 시 호출되는 함수
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      agreeToTerms: e.target.checked,
    }));
  };

  // 이메일 인증 버튼 클릭 시 호출되는 함수
  const handleSendVerification = async () => {
    try {
      // 서버에 이메일 인증 요청 보내기
      const response = await axios.post("/api/send-verification", {
        email: formData.email,
      });

      if (response.data.success) {
        setIsEmailSent(true);
        alert("이메일 인증 코드가 발송되었습니다.");
      } else {
        alert(response.data.message); // 실패 시 오류 메시지
      }
    } catch (error) {
      console.error("이메일 인증 오류:", error);
      alert("이메일 인증 오류. 다시 시도해주세요!");
    }
  };

  // 폼 제출 처리 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 비밀번호와 확인용 비밀번호 일치 여부 확인
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 필수 항목들이 모두 채워졌는지 확인
    if (!formData.email || !formData.password || !formData.nickname || !formData.gender || !formData.birthYear) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 인증 코드가 발송되었는지 확인
    if (!isEmailSent || !formData.verificationCode) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }

    try {
      // 서버에 회원가입 요청 보내기
      const response = await axios.post("/api/register", {
        email: formData.email,
        password: formData.password,
        nickname: formData.nickname,
        gender: formData.gender,
        birthYear: formData.birthYear,
        verificationCode: formData.verificationCode,
      });

      // 성공적으로 회원가입된 경우 이메일 인증 안내
      if (response.data.success) {
        alert("회원가입이 완료되었습니다!");
      } else {
        alert(response.data.message); // 실패 시 오류 메시지
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원 가입 오류. 다시 시도해주세요!");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-24 fw-500 titleFont">회원가입</h1>
        <p className="mt-10 subFont">
          이미 계정이 있나요?{" "}
          <Link to="/login" className="text-blue-1">
            로그인
          </Link>
        </p>
      </div>

      {/* 이메일 */}
      <div className="col-12 subFont">
        <div className="form-input email-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">이메일 (아이디)</label>
          <button
            type="button"
            onClick={handleSendVerification}
            className="button py-10 -dark-1 bg-blue-1 text-white email-btn"
          >
            인증 요청
          </button>
        </div>
      </div>

      {/* 이메일 인증 코드 */}
      {isEmailSent && (
        <div className="col-12 subFont">
          <div className="form-input">
            <input
              type="text"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              required
            />
            <label className="lh-1 text-14 text-light-1">인증번호</label>
          </div>
        </div>
      )}

      {/* 닉네임 */}
      <div className="col-12 subFont">
        <div className="form-input">
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">닉네임</label>
        </div>
      </div>

      {/* 비밀번호 */}
      <div className="col-12 subFont">
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">비밀번호</label>
        </div>
      </div>

      {/* 비밀번호 확인 */}
      <div className="col-12 subFont">
        <div className="form-input">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">비밀번호 확인</label>
        </div>
      </div>

      {/* 성별 선택 */}
      <div className="col-12 subFont">
        <div className="form-input">
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="male"
                name="gender"
                value="m"
                checked={formData.gender === "m"}
                onChange={handleChange}
              />
              <label htmlFor="male" className="text-14 text-light-1">남</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="female"
                name="gender"
                value="f"
                checked={formData.gender === "f"}
                onChange={handleChange}
              />
              <label htmlFor="female" className="text-14 text-light-1">여</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="other"
                name="gender"
                value="o"
                checked={formData.gender === "o"}
                onChange={handleChange}
              />
              <label htmlFor="other" className="text-14 text-light-1">기타</label>
            </div>
          </div>
        </div>
      </div>


      {/* 태어난 연도 */}
      <div className="col-12 subFont">
        <div className="form-input">
          <input
            type="number"
            name="birthYear"
            value={formData.birthYear}
            onChange={handleChange}
            required
            min="1900"  // 최소 연도 (1900년)
            max={new Date().getFullYear()}  // 현재 연도를 최대값으로 설정
            placeholder="태어난 연도"
          />
          <label className="lh-1 text-14 text-light-1">태어난 연도</label>
        </div>
      </div>


      {/* 약관 동의 */}
      <div className="col-12 subFont">
        <div className="d-flex">
          <div className="form-checkbox mt-5">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            이메일 수신에 동의합니다. 추후 개인정보 보호정책에 따라 이메일 수신을 취소할 수 있습니다.
          </div>
        </div>
      </div>

      <div className="col-12 subFont">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          회원 가입 <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
