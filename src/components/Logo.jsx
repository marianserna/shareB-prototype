import React from 'react';
import Link from 'gatsby-link';
import { LogoImage } from '../elements/logo';
import logo from '../images/logo-lg.png';

export default class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <LogoImage src={logo} alt="logo" />
      </Link>
    );
  }
}
