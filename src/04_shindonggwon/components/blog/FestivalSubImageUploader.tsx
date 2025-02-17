import React, { useState } from "react";

interface FestivalSubImageUploaderProps {
  setSubImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const FestivalSubImageUploader = ({ setSubImage }: FestivalSubImageUploaderProps) => {
  const [subImages, setSubImages] = useState<string[]>([]);  // 서브 이미지를 상태로 관리
  const [error, setError] = useState<string>("");  // 에러 메시지를 상태로 관리

  // 파일 업로드 처리
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fileList = Array.from(event.target.files);
    const newImages: string[] = [];
    const maxSize = 800;  // 최대 이미지 크기 (픽셀)

    // 각 파일을 처리
    fileList.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (!reader.result) return; // null 체크

        const img = new Image();
        img.onload = () => {
          // 이미지 크기 검증
          if (img.width > maxSize || img.height > maxSize) {
            setError(`이미지 ${file.name} 크기가 ${maxSize}px을 초과합니다.`);
          } else if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
            // 이미지 형식 검증
            setError(`이미지 ${file.name} 형식이 유효하지 않습니다. PNG 또는 JPG만 허용됩니다.`);
          } else {
            newImages.push(reader.result as string); // 이미지 미리보기 추가
            // 모든 이미지가 처리된 후 상태를 업데이트
            if (newImages.length === fileList.length) {
              setSubImages((prev) => [...prev, ...newImages]);  // 서브 이미지 배열을 상태에 추가
              setSubImage(newImages[0]);  // 첫 번째 이미지를 부모 컴포넌트로 전달
              setError("");  // 에러 초기화
            }
          }
        };
        img.onerror = () => {
          setError(`이미지 ${file.name}를 로드할 수 없습니다.`);
        };
        img.src = reader.result as string;  // 읽은 파일을 이미지로 변환
      };

      reader.readAsDataURL(file);  // 파일을 Data URL로 읽기
    });
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <h3>서브 이미지 업로드</h3>
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="subImageUpload" className="d-flex ratio ratio-1:1 border rounded-4">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Sub Images</div>
            </div>
          </label>
          <input
            type="file"
            id="subImageUpload"
            multiple
            accept="image/png, image/jpeg"
            className="d-none"
            onChange={handleFileUpload}  // 파일이 변경되면 업로드 처리
          />
          <div className="text-start mt-10 text-14 text-light-1">
            PNG or JPG no bigger than 800px wide and tall.
          </div>
        </div>
      </div>

      {/* 업로드된 서브 이미지 미리보기 */}
      {subImages.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200 border rounded-4 p-2">
            <img src={image} alt="uploaded preview" className="img-ratio rounded-4" />
          </div>
        </div>
      ))}

      {/* 에러 메시지 */}
      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
    </div>
  );
};

export default FestivalSubImageUploader;
