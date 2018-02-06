import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const TopColour = styled.div`
  position: absolute;
  width: 100vw;
  height: 40vh;
  top: 0;
  z-index: -1;
`;

const BottomColour = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 60vh;
  top: 40vh;
  background-color: ${colors.brightBlue};
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  z-index: -1;
`;

const ChildrenContainer = styled.main`
  margin: 0 auto;
  width: 95vw;
  height: 90vh;
  margin-top: 5vh;
  background-color: ${colors.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export { Container, TopColour, BottomColour, ChildrenContainer };
