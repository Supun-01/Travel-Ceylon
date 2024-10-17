import React from "react";

function Searchbar() {
  return (
    <div>
      <form action="/search" method="GET">
        <input type="text" name="query" placeholder="Search here..." required>
          <button type="submit">Search</button>
        </input>
      </form>
    </div>
  );
}

export default Searchbar;
