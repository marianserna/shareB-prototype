import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

import { padding, margin, fonts, colors } from './settings';

const Navigation = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  margin-left: 15%;

  @media (max-width: 992px) {
    margin-top: 5%;
  }

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  width: 50%;
`;

const NavItem = styled.li`
  text-align: center;
  background-color: transparent;
  margin-right: ${margin.superSmall};
  transition: all 1s ease;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: ${padding.superSmall};
  width: 100%;
  text-decoration: none;
  font-family: ${fonts.nav};
  font-size: 1.2rem;
  color: ${colors.blue};
  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lavender};
    color: ${colors.white};
  }

  @media (max-width: 520px) {
    font-size: 0.85rem;
  }

  ${props =>
    props.active &&
    css`
      background-color: #000;
    `};
`;

export { Navigation, NavList, NavItem, NavLink };
