/* Create a functional component that wraps other components and allow
to scroll what's inside */
import React from "react";

/**
 * A scrollable container component that wraps its children.
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} - The JSX element representing the scrollable container.
 */
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
