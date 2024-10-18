import React from "react";

function Searchbar() {
  return (
    <div className="w-full max-w-md">
      <form action="" className="relative flex items-center my-8 ">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 py-2 pr-12 rounded-full border border-[#8B174E] focus:ring-2 focus:ring-[#8B174E] focus:outline-none"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D12B79] text-white rounded-full px-8 hover:bg-[#] focus:ring-2 focus:ring-blue-300 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
