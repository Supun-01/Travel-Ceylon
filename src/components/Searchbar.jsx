import React from "react";

function Searchbar() {
  return (
    <div>
        <div>
            <div>
                <input type="text" placeholder="Search here..." required/>
                <button type="submit">🔍</button>
            </div>
        </div>
    </div>
  );
}

export default Searchbar;
