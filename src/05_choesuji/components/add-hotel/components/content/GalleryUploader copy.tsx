import React, { useState } from "react";
import "../../../../styles/RegistTour.scss";

// 파일 업로드 컴포넌트
const GalleryUploader: React.FC = () => {
  // 각 이미지 업로드 상태 (썸네일 + 3개의 일반 이미지)
  const [images, setImages] = useState<(string | null)[]>(new Array(4).fill(null)); // 4개의 이미지 슬롯 (null로 초기화)
  const [error, setError] = useState<string>("");

  // 파일 업로드 처리 함수
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const fileList = event.target.files;
    if (!fileList) return;

    const file = fileList[0]; // 한 번에 하나의 파일만 처리

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const maxSize = 800; // 최대 크기 (픽셀 단위)
        if (img.width > maxSize || img.height > maxSize) {
          setError(`Image ${file.name} exceeds the maximum size of ${maxSize}px.`);
        } else if (!["image/png", "image/jpeg"].includes(file.type.toLowerCase())) {
          setError(`Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`);
        } else {
          // 이미지를 업로드할 수 있는 자리가 있는지 체크
          if (images.filter((img) => img !== null).length < 4) {
            const newImages = [...images];
            newImages[index] = reader.result as string; // 해당 인덱스에 이미지 저장
            setImages(newImages);
            setError(""); // 오류가 없으면 초기화
          } else {
            setError("You can only upload a total of 4 images.");
          }
        }
      };

      img.onerror = () => {
        setError(`Image ${file.name} could not be loaded.`);
      };
      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
  };

  // 이미지 삭제 처리 함수
  const handleRemoveImage = (index: number): void => {
    const newImages = [...images];
    newImages[index] = null; // 해당 이미지 슬롯 초기화
    setImages(newImages);
  };

  return (
    <div className="container">
      <div className="row x-gap-20 y-gap-20 pt-15">
        {/* 이미지 업로드 슬롯을 감싸는 테두리 박스 */}
        <div className="col-12">
          <div
            className="w-full p-4 border border-solid border-gray-300 rounded-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)', // 기본적으로 4개의 슬롯 고르게 배치
              gap: '10px',
              alignItems: 'center',
            }}
          >
            {/* 업로드 창 4개 */}
            {images.map((image, index) => (
              <div
                className="w-100"
                key={index}
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: index === 0 ? 'flex-start' : 'flex-end', // 첫 번째 이미지는 왼쪽, 나머지는 오른쪽
                }}
              >
                <div
                  className="w-full h-full border border-dashed border-gray-300 rounded-4 p-2"
                  style={{ height: '200px' }} // 각 이미지 박스 높이 지정
                >
                  <label htmlFor={`uploadGallery-${index}`} className="d-flex ratio ratio-1:1">
                    <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                      <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                      <div className="text-blue-1 fw-500">
                        {index === 0 ? "Upload Thumbnail" : `Upload Image ${index}`}
                      </div>
                    </div>
                  </label>
                  <input
                    type="file"
                    id={`uploadGallery-${index}`}
                    accept="image/png, image/jpeg"
                    className="d-none"
                    onChange={(e) => handleFileUpload(e, index)}
                  />
                  <div className="text-start mt-10 text-14 text-light-1">
                    PNG or JPG no bigger than 800px wide and tall.
                  </div>

                  {/* 업로드된 이미지가 있으면 표시 */}
                  {image && (
                    <div className="d-flex justify-center w-100 mt-10">
                      <img
                        src={image}
                        alt={`image-${index}`}
                        className="rounded-4"
                        style={{
                          width: '100%', // 이미지 크기를 업로드 박스에 맞게 자동으로 설정
                          height: '100%', // 이미지 크기를 업로드 박스에 맞게 자동으로 설정
                          objectFit: 'cover', // 비율 유지하면서 박스를 꽉 채움
                        }}
                      />
                      <div
                        className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                          <i className="icon-trash text-16" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오류 메시지 표시 */}
        {error && <div className="col-12 mb-10 text-red-1">{error}</div>}
      </div>
    </div>
  );
};

export default GalleryUploader;
