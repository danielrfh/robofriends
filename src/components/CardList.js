// Create second functional component called CardList that renders a
// list of cards. It will accept a list of robots as props.

import React from "react";
import Card from "./Card";

/**
 * Renders a list of cards for each robot in the provided array.
 * @param {Array} robots - An array of robot objects.
 * @returns The JSX code for rendering the list of cards.
 */
const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, i) => {
    // Loop through the array of robots
    return (
      <Card
        key={robots[i].id} // Assign a unique key to each card to avoid Warning:
        // Each child in an array or iterator should have a unique "key"
        // Also, key prop should have something that doesn't change. For
        // example, index (or i in our case) could change if array items
        // get moved. So a better key in this case would be something
        // unique like the id.
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardsArray}</div>;
};
export default CardList;
