import React from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate

const FestivalAddButton: React.FC = () => {
  const navigate = useNavigate();

  // 버튼 클릭 시 새로운 축제 등록 페이지로 이동
  const handleClick = () => {
    navigate('/list/festival/new'); // 새로운 축제 등록 페이지로 이동
  };

  return (
    <div className="pt-30">
      <button 
        onClick={handleClick} 
        className="btn btn-primary w-full"
      >
        신규 축제 등록
      </button>
    </div>
  );
};

export default FestivalAddButton;
