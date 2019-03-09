import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import SuperComponent from '../components/SuperComponent';

class index extends SuperComponent {
  constructor() {
    super();

    this.state = {
      title: 'I am Index Page'
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle() {
    this.setState({ title: 'I am updated index page' });
  }

  render() {
    debugger;
    const { title } = this.state;

    return (
      <BaseLayout>
        <h1>I am Index Page</h1>
        <h2>{title}</h2>
        <button
          onClick={() => {
            this.updateTitle();
          }}
        >
          Change Title
        </button>
      </BaseLayout>
    );
  }
}

export default index;
