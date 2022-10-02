import React from "react";
import SearchBar from "./SearchBar";

const CollegeSearch = ({ collegeData }) => {
  return (
    <div>
      <SearchBar collegeData={collegeData} />
    </div>
  );
};

export default CollegeSearch;
