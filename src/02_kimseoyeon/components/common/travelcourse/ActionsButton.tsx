import { JSX, useState } from "react";
import { FaShareAlt, FaTrash, FaArrowUp, FaArrowDown, FaEdit } from "react-icons/fa";

interface FilterItem {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface ActionsButtonProps {
  customFilters?: FilterItem[]; // ✅ 원하는 화면에서만 추가 필터 적용
}

const ActionsButton: React.FC<ActionsButtonProps> = ({ customFilters }) => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  const handleFilterClick = (filter: string): void => {
    setActiveFilter(filter);
  };

  const defaultFilters: FilterItem[] = [
    { label: "공유하기", value: "share", icon: <FaShareAlt /> },
    { label: "삭제", value: "delete", icon: <FaTrash /> },
  ];

  const filtersToShow = [...defaultFilters, ...(customFilters || [])];

  return (
    <div className="dropdown js-dropdown js-actions-1-active">
      <div
        className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-15 py-5"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title"></span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>

      <div className="toggle-element -dropdown-2 js-click-dropdown dropdown-menu">
        <div className="text-14 fw-500 js-dropdown-list">
          {filtersToShow.map((filter) => (
            <div key={filter.value}>
              <button
      
                onClick={() => handleFilterClick(filter.value)}
                style={{
                  width: "110px",
                  
                }}
              >
                {filter.icon}
                {filter.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionsButton;
