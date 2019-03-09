import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

export default class SuperComponent extends Component {
  constructor() {
    super();

    this.someVariable = 'Just some variable';
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <BaseLayout>
        <h1>I am Blogs Page</h1>
      </BaseLayout>
    );
  }
}
