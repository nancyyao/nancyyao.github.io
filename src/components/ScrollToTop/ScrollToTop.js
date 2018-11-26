import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location === "/") {
      window.scrollTo(0, 0);
      console.log(this.props.location.pathname);
      console.log(typeof(this.props.location.pathname))
      console.log(prevProps.location);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
