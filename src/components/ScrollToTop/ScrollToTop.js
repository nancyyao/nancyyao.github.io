import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === "/dev") {
      document.getElementById("developer-id").scrollIntoView()
      console.log(this.props.location.pathname);
      console.log(prevProps.location);
    }
    else if (this.props.location.pathname === "/design") {
      document.getElementById("design-id").scrollIntoView()
    }
    else if (this.props.location.pathname === "/sketches") {
      document.getElementById("sketches-id").scrollIntoView()
    }
    else if (this.props.location.pathname === "/contact") {
      document.getElementById("contact-id").scrollIntoView()
    }
    else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
