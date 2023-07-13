// Create the the third functional component called SearchBox
// and pass it the searchfield and the searchChange function
// as props and return an input element.

import React from "react";

/**
 * A search box component that allows users to input search queries.
 * @param {Function} searchChange - A callback function that is triggered when the search input changes.
 * @returns {JSX.Element} - The rendered search box component.
 */
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
