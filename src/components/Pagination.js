import React, { useState, useEffect } from "react";

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const endIndex = currentPage * dataLimit;
    const startIndex = endIndex - dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const pageSurplus = pages % pageLimit;
    const amount = currentPage > pages - pageSurplus ? pageSurplus : pageLimit;
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(amount).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {/* Show the gnomes, 10 gnomes at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} {...d} />
        ))}
      </div>

      {/* Show the pagiantion it consists of next and previous buttons along with page numbers, in our case, 5 page numbers at a time*/}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* Show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
