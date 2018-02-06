import React from 'react';

import '../styles/reset.css';
import '../styles/common.styl';

import Logo from '../components/Logo';

import {
  Container,
  TopColour,
  BottomColour,
  ChildrenContainer
} from '../elements/container';

import { Footer } from '../elements/layout';

import Nav from '../components/Nav';

export default ({ children }) => (
  <Container>
    <TopColour />
    <BottomColour />
    <ChildrenContainer>
      <Nav />
      <div>{children()}</div>
      <Logo />
    </ChildrenContainer>
    <Footer>&copy; Copyright 2016 | ShareBibles</Footer>
  </Container>
);
