import React, { Component } from 'react';

class Layout1 extends Component {
  render() {
    return (
      <div>
        <header>header</header>
        <main>{this.props.children}</main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default Layout1;
