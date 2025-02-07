import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri"; // Optional: Close button for mobile

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      <form action="/search" method="GET">
        {/* Mobile View */}
        <div className="sm:hidden">
          {/* Search Icon when Search Box is Hidden */}
          {!isSearchOpen && (
            <button
              type="button"
              onClick={toggleSearch}
              className="text-[#FB2E86] p-2"
            >
              <CiSearch size={24} />
            </button>
          )}

          {/* Search Box that Appears when Search is Open */}
          {isSearchOpen && (
            <div className="relative flex items-center">
              <input
                type="text"
                name="query"
                placeholder="Search products..."
                className="border-2 focus:ring-1 focus:ring-[#E7E6EF] focus:outline-none border-[#E7E6EF] p-2 w-[250px] sm:w-[400px] rounded-md"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-[#FB2E86] p-2 rounded-md"
              >
                <CiSearch size={20} />
              </button>
              {/* Close Button to Hide Search Box */}
              <button
                type="button"
                onClick={toggleSearch}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#FB2E86] p-2 rounded-md"
              >
                <RiCloseFill size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="relative hidden sm:block sm:ml-4 max-w-[500px] sm:max-w-[400px] lg:max-w-[500px]">
    <input
      type="text"
      name="query" 
      placeholder="Search products..."
     
      
      className="border-2 focus:ring-1 focus:ring-[#E7E6EF] focus:outline-none border-#E7E6EF p-[3px] md:p-[7px] md:text-[12px] lg:text-[14px] sm:text-[16px] lg:w-[317px] sm:w-[150px] md:w-[200px] pr-[50px]"
    />
    <button
      type="submit"
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white flex items-center justify-center text-xl bg-[#FB2E86] lg:w-[51px] sm:w-[51px] md:w-[30px] font-semibold h-9"
    >
      <CiSearch />
    </button>
  </div>

        
      </form>
    </div>
  );
}

export default SearchButton;
