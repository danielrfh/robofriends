import React, { Component } from "react";

/**
 * A React component that acts as an error boundary, catching any errors that occur
 * within its child components.
 * @class ErrorBoundry
 * @extends Component
 */
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
