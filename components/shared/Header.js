import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

export default class Header extends Component {
  render() {
    const title = this.props.title;

    return (
      <Fragment>
        <p className='customClassFromFile'>test</p>
        <Link href='/'>
          <a> Home </a>
        </Link>
        <Link href='/about'>
          <a> About </a>
        </Link>
        <Link href='/portfolios'>
          <a> Portfolios </a>
        </Link>
        <Link href='/blogs'>
          <a> Blogs </a>
        </Link>
        <Link href='/cv'>
          <a> CV </a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
