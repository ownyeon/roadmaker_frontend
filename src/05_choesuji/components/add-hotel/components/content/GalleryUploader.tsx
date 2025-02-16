import React, { useState } from "react";

// 파일 업로드 컴포넌트
const GalleryUploader: React.FC = () => {
  // 이미지 상태 (이미지는 파일 URL 형식으로 저장됨)
  const [images, setImages] = useState<string[]>([]);
  
  // 오류 메시지 상태
  const [error, setError] = useState<string>("");

  // 파일 업로드 처리 함수
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = event.target.files;
    if (!fileList) return;

    const newImages: string[] = [];
    const maxSize = 800; // 최대 크기 (픽셀 단위)

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width > maxSize || img.height > maxSize) {
            setError(
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`,
            );
          } else if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`,
            );
          } else {
            newImages.push(reader.result as string);
            if (newImages.length === fileList.length) {
              setImages((prevImages) => [...prevImages, ...newImages]);
              setError(""); // 오류가 없다면 오류 메시지 초기화
            }
          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  };

  // 이미지 삭제 처리 함수
  const handleRemoveImage = (index: number): void => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="uploadGallery" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Images</div>
            </div>
          </label>
          <input
            type="file"
            id="uploadGallery"
            multiple
            accept="image/png, image/jpeg"
            className="d-none"
            onChange={handleFileUpload}
          />
          <div className="text-start mt-10 text-14 text-light-1">
            PNG or JPG no bigger than 800px wide and tall.
          </div>
        </div>
      </div>
      {/* 업로드된 이미지들 표시 */}
      {images.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image} alt="image" className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={() => handleRemoveImage(index)}
            >
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* 오류 메시지 표시 */}
      {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
    </div>
  );
};

export default GalleryUploader;
