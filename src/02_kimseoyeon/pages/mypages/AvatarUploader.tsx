import React, { useState } from "react";

const AvatarUploader: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<string>(""); 
  const [success, setSuccess] = useState<boolean>(false); // ✅ `success`의 타입을 `boolean`으로 명시

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // ✅ `?.[0]` 사용하여 파일 존재 여부 체크
    const reader = new FileReader();

    if (!file) {
      setError("Please select an image.");
      setSuccess(false);
      return;
    }

    if (file.size > 800 * 1024) {
      setError("Image must be smaller than 800KB.");
      setSuccess(false);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      setSuccess(false);
      return;
    }

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result); // ✅ `reader.result`가 `string`인지 확인 후 설정
        setSuccess(true);
        setError("");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="row y-gap-30 items-center" style={{ marginLeft: "10px", marginTop: "25px" }}>
      <div className="col-auto">
        {image ? (
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt="avatar" className="img-ratio rounded-4" />
            <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
              <div
                className="size-40 bg-white rounded-4 flex-center cursor-pointer"
                onClick={() => setImage("")}
              >
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex ratio ratio-1:1 w-200">
            <img
              src="/src/02_kimseoyeon/assets/images/picture.svg"
              alt="image"
              className="img-ratio rounded-4"
            />
            <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="col-auto">
        <h4 className="text-26 fw-500 titleFont"> 홍길동</h4>
        <div className="text-14 mt-5 subFont">
          PNG 또는 JPG의 크기는 가로 및 세로 800px를 초과할 수 없습니다.
        </div>
        <div className="d-inline-block mt-15">
          <label
            htmlFor="avatar-upload"
            role="button"
            className="button h-50 px-24 -dark-1 bg-black-1 text-white subFont"
          >
            <i className="icon-upload-file text-20 mr-10" />
            Browse
          </label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        {error && !success && <div className="text-red-1 mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default AvatarUploader;
