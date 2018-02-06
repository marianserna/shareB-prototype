import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, NavList, NavItem, NavLink } from '../elements/subnav';

export default class SubNav extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  matches = str => {
    const { pathname } = this.context.router.route.location;
    return pathname.endsWith(str);
  };

  render() {
    return (
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="/features" active={this.matches('/features')}>
              FEATURES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/story" active={this.matches('/story')}>
              STORY
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/faq" active={this.matches('/faq')}>
              FAQ
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    );
  }
}
