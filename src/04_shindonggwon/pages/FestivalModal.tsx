import React, { useEffect } from "react";
import '../styles/festivalModal.scss'; // SCSS 스타일 import

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  details: string;
  img: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, details, img }) => {
  // ESC 키로 모달 닫기 기능
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Modal;
