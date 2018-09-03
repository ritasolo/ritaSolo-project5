import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <p className="small">001</p>
          <h1 class="logo__h1">
            digital
            <br />— zine
          </h1>
        </div>
        <div className="info">
          <p className="small">002</p>
          <h2>share your vision </h2>
          <h2>+ create culture.</h2>
          <h2>open source.</h2>
        </div>
        <div className="post">
          <p className="small">003</p>
          <h1 class="post__h1">
            <a href="#formSection">post something.</a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
