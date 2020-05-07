import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDetails: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error + errorInfo);
    // this.setState((errorInfo) => {
    //   errorDetails: errorInfo;
    // });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorDetails}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
