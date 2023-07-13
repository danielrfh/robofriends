import React, { Component } from "react";

/**
 * A React component representing a header.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return <h1 className="f2">RoboFriends</h1>;
  }
}
export default Header;
