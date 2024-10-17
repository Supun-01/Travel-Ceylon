import React from "react";

function Searchbar() {
  return (
    <div>
      <div>
        <div class="w-full max-w-md">
          <form action="" class="relative flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search here..."
              class="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
              search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
