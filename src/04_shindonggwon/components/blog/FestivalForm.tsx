import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import FestivalSubImageUploader from "./FestivalSubImageUploader";
import FestivalMainImageUploader from "./FestivalMainImageUploader";
import "../../styles/common.scss";
import "../../styles/festivalForm.scss";

const FestivalForm = () => {
  const [festivalName, setFestivalName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [subImage, setSubImage] = useState<string | null>(null);

  const navigate = useNavigate(); // navigate 훅 사용

  // 모든 입력이 완료되었는지 체크 (이미지 업로드 상태 포함)
  const isFormComplete =
    festivalName &&
    date &&
    address &&
    price &&
    contact &&
    website &&
    mainImage && // 메인 이미지 업로드 체크
    subImage;   // 서브 이미지 업로드 체크

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 후 데이터 처리
    const festivalData = {
      festivalName,
      date,
      address,
      price,
      contact,
      website,
      mainImage,
      subImage,
    };
    console.log("Festival Data Submitted:", festivalData);

    // 폼 제출 후 /list/festival로 이동
    navigate("/list/festival");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row x-gap-20 y-gap-20">
        <h3>축제명</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="festivalName"
              value={festivalName}
              onChange={(e) => setFestivalName(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        </div>

        <h3>날짜</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        </div>

        <h3>주소</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        </div>

        <h3>이용 금액</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <h3>연락처</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        </div>

        <h3>홈페이지</h3>
        <div className="col-12">
          <div className="form-input1">
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-left-1"></label>
          </div>
        </div>

        <div className="d-flex justify-center align-items-center">
          <div className="w-48%">
            <FestivalMainImageUploader setMainImage ={setMainImage} />
          </div>
          <div className="w-48%">
            <FestivalSubImageUploader setSubImage={setSubImage} />
          </div>
        </div>

        {/* 자동으로 활성화되는 등록 요청 버튼 */}
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={!isFormComplete} // 모든 필드가 완료되었을 때만 활성화
          >
            등록 요청
          </button>
        </div>
      </div>
    </form>
  );
};

export default FestivalForm;
