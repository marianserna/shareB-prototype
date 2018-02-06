import React from 'react';

import { Navigation, NavList, NavItem, NavLink } from '../elements/subnav';

const matches = str => window.location.pathname.endsWith(str);

export default class SubNav extends React.Component {
  render() {
    return (
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="/features" active={matches('/features')}>
              FEATURES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/story" active={matches('/story')}>
              STORY
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/faq" active={matches('/faq')}>
              FAQ
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    );
  }
}
