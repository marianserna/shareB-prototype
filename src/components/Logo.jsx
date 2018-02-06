import React from 'react';
import { LogoImage } from '../elements/logo';
// import logo from '../images/logo.svg';
import logo from '../images/logo-lg.png';

export default class Logo extends React.Component {
  render() {
    return <LogoImage src={logo} alt="logo" />;
  }
}
