import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    this.setState({hasError: true})
  }
  render() {
    if(this.state.hasError){
        return <p>error</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
