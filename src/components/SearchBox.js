// Create the the third functional component called SearchBox
// and pass it the searchfield and the searchChange function
// as props and return an input element.

import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        // Create an event handler that calls the searchChange function
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
