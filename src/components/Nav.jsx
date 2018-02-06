import React from 'react';

import {
  Navigation,
  NavList,
  NavItem,
  NavLink,
  ExternalNavLink
} from '../elements/navigation';

export default class Nav extends React.Component {
  render() {
    return (
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/features">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/volunteer">Volunteer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/donate">Donate</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    );
  }
}
