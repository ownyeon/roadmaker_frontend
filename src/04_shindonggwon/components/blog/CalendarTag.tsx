import React from 'react';
import "../../styles/calendarTag.scss";

const tags = [
  { label: "#전체", value: "" },
  { label: "#서울", value: "#서울" },
  { label: "#부산", value: "#부산" },
  { label: "#대구", value: "#대구" },
  { label: "#인천", value: "#인천" },
  { label: "#광주", value: "#광주" },
  { label: "#대전", value: "#대전" },
  { label: "#울산", value: "#울산" },
  { label: "#세종", value: "#세종" },
  { label: "#경기", value: "#경기" },
  { label: "#강원", value: "#강원" },
  { label: "#충북", value: "#충북" },
  { label: "#충남", value: "#충남" },
  { label: "#경북", value: "#경북" },
  { label: "#경남", value: "#경남" },
  { label: "#전북", value: "#전북" },
  { label: "#전남", value: "#전남" },
  { label: "#제주", value: "#제주" },
];

interface TagListProps {
  onTagClick: (tag: string) => void; // 클릭된 태그 값을 부모에게 전달
}

const TagList: React.FC<TagListProps> = ({ onTagClick }) => {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="tag"
          onClick={() => onTagClick(tag.value)} // 클릭 시 onTagClick 호출
        >
          {tag.label}
        </div>
      ))}
    </div>
  );
};

export default TagList;
