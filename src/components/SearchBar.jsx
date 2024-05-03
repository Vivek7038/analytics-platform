import React, { useState } from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
const SearchBar = ({ onFilterTextChange, clearFilters, isFilter }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterTextChange(e.target.value);
  };
  const handleOnClear = (e) => {
    onFilterTextChange("");
    setSearchTerm("");
  };
  const [searchTerm, setSearchTerm] = useState("");
  console.log(isFilter);
  return (
    <div className="w-full md:w-1/3 lg:w-1/4  ml-auto my-2">
      <div className="flex flex-row items-center gap-x-2 ">
        {isFilter ||
          (searchTerm.trim() !== "" && (
            <span className="rounded-md px-2 py-2 h-12 min-w-50 text-center whitespace-nowrap ">
              <FilterAltOffIcon
                onClick={() => {
                  handleOnClear();
                  clearFilters();
                }}
                className="cursor-pointer"
              />
            </span>
          ))}
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
