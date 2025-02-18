import { useState } from "react";
import '../../styles/tourListImage.scss';

interface TourListGalleryProps {
  images: string[]; // 여행지에 포함된 이미지 배열
}

const TourListGallery = ({ images }: TourListGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]); // 첫 번째 이미지를 기본 이미지로 설정

  const handleImageClick = (image: string) => {
    setMainImage(image); // 클릭한 이미지를 큰 화면에 표시
  };

  return (
    <div className="tourList-gallery">
      <div className="gallery-container">
        
        <div className="main-image">
          <img src={mainImage} alt="Main view" className="img-fluid" />
        </div>

        
        <div className="thumbnail-images">
          {images.map((subImage, index) => (
            <div
              key={index}
              className="thumbnail"
              onClick={() => handleImageClick(subImage)} // 클릭 시 이미지 변경
            >
              <img
                src={subImage}
                alt={`Thumbnail ${index}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourListGallery;
