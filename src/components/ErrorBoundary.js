import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Customized error handling goes here!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>LeadBook encountered an error! Oh My!</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;