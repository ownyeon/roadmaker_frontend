import React, { useState } from "react";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPage = (pageNumber: number, isActive: boolean = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const totalPages = 5; 
    return Array.from({ length: totalPages }, (_, i) => renderPage(i + 1, i + 1 === currentPage));
  };

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button
            className="circle-button"
            onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
          </div>
          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages()}
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button
            className="circle-button"
            onClick={() => currentPage < 5 && handlePageClick(currentPage + 1)}
            disabled={currentPage === 5}
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
