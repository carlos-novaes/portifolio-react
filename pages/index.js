import React, { Component, Fragment } from "react";

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <h1>I am Index Page</h1>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/portfolios"> Portfolios </a>
        <a href="/blogs"> Blogs </a>
        <a href="/cv"> CV </a>
      </Fragment>
    );
  }
}
