import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
