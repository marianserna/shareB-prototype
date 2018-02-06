import styled from 'styled-components';
import Link from 'gatsby-link';

import { padding, margin, fonts, colors } from './settings';

const Navigation = styled.nav`
  width: 50%;
  margin: 0 0 0 47%;

  @media (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: ${margin.medium};
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  @media (max-width: 768px) {
    align-items: flex-end;
    flex-direction: column;
    margin-right: ${margin.mini};
  }
`;

const NavItem = styled.li`
  width: calc(100% / 5);
  text-align: center;
  background-color: transparent;
  transition: all 1s ease;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const NavLink = styled(Link)`
  border: 1px solid ${colors.beige};
  display: inline-block;
  padding: ${padding.superSmall};
  width: 100%;
  text-decoration: none;
  font-family: ${fonts.nav};
  font-size: 1.2rem;
  color: ${colors.orange};
  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lavender};
    color: ${colors.white};
  }

  @media (max-width: 992px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1280px) {
    font-size: 0.9rem;
  }

  @media (max-width: 1016px) {
    font-size: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { Navigation, NavList, NavItem, NavLink };
