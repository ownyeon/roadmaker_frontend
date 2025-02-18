import { useState } from "react";

const ChartSelect = () => {
  const options = [
    "This Week",
    "Animation",
    "Design",
    "Illustration",
    "Business",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="dropdown js-dropdown js-category-active">
      <div
        className="d-flex items-center bg-white border-light rounded-5 px-5 py-5 text-10 lh-12"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">{selectedOption}</span>
        <i className="icon icon-chevron-sm-down text-7 ml-5" />
      </div>
      <div className="toggle-element -dropdown  dropdown-menu">
        <div className="text-12 js-dropdown-list">
          {options.map((option, index) => (
            <div key={index}>
              <button
                className={`d-block js-dropdown-link ${
                  selectedOption === option ? "text-blue-1 " : ""
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  const dropdownTitle =
                    document.querySelector(".js-dropdown-title");
                  if (dropdownTitle !== null) {
                    dropdownTitle.textContent = option;
                  }
                  // TODO: Apply filter based on selected option
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartSelect;
