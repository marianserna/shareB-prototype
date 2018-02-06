import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { MobileNavLink, mobileStyles } from '../elements/navigation';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onChange = state => {
    this.setState({ isOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Menu
        right
        width="75%"
        styles={mobileStyles}
        isOpen={this.state.isOpen}
        onStateChange={this.onChange}
      >
        <MobileNavLink to="/" onClick={() => this.closeMenu()}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/features" onClick={() => this.closeMenu()}>
          About
        </MobileNavLink>
        <MobileNavLink to="/volunteer" onClick={() => this.closeMenu()}>
          Volunteer
        </MobileNavLink>
        <MobileNavLink to="/donate" onClick={() => this.closeMenu()}>
          Donate
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={() => this.closeMenu()}>
          Contact
        </MobileNavLink>
      </Menu>
    );
  }
}
