import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, filterBySearch, placeholder, buttonText }) => {
  return (
    <div className="d-flex justify-content-center my-3">
      <input
        type="text"
        placeholder={placeholder}
        className="form-control w-50"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="btn btn-dark ms-3 fw-bold"
        onClick={filterBySearch}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
