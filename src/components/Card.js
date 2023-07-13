// Create first functional component called Card. It will receive props
// name, email and id in order to display random robots images with a
// size of 200 by 200 pixels from robohash.org API and with name and
// email below the image.

import React from "react";

/**
 * A functional component that represents a card with user information.
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {number} id - The unique identifier of the user.
 * @returns JSX code representing the card component.
 */
const Card = ({ name, email, id }) => {
  // Using destructuring to pass props to Card component
  return (
    // With React we always have to return just one element from a
    // component. And we end up wrapping a lot of our components in
    // <div></div>. Unless we use fragments
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadows-5">
      {/* CSS styles from tachyions */}
      <img src={`https://robohash.org/${id}test?size=200x200`} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
