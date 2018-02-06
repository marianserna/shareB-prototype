import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const SharingInCountry = styled.section`
  position: absolute;
  bottom: 15%;
  left: 8%;
  z-index: 3;
  width: 65%;
  color: ${colors.white};

  @media (max-width: 1280px) {
    width: 65%;
  }
`;

const HeadingText = styled.p`
  font-size: 1.8rem;
  text-shadow: 2px 2px ${colors.black};
`;

const Country = styled.div`
  text-transform: uppercase;
  font-size: 5rem;
  color: ${colors.white};
  text-shadow: 2px 2px ${colors.black};
  background-color: ${colors.purple};
  background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
  text-align: right;
  padding: ${padding.mini};

  @media (max-width: 1163px) {
    font-size: 3rem;
  }
`;

const HomeParagraph = styled.p`
  text-align: left;
  padding-left: ${padding.ultraLarge};
  color: ${colors.black};
  font-size: 2.5rem;
  line-height: 4rem;

  @media (max-width: 1475px) {
    padding-left: ${padding.large};
    font-size: 2rem;
  }

  @media (max-width: 1163px) {
    line-height: 3rem;
    font-size: 1.5rem;
  }

  @media (max-width: 992px) {
    padding-left: 0px;
  }
`;

const HomeSpan = styled.span`
  color: ${colors.lavender};
  text-align: left;
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  line-height: 5rem;
  padding-top: 100px;
  color: #7f00ff;
  background: -webkit-linear-gradient(${colors.orange}, #7f00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1163px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

const ButtonContainer = styled.section`
  width: 100%;
  margin-top: ${margin.large};
  text-align: center;

  @media (max-width: 1280px) {
    margin-top: ${margin.medium};
  }
`;

const Button = styled.img`
  margin: ${margin.superSmall};
  width: 180px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export {
  SharingInCountry,
  HeadingText,
  Country,
  HomeParagraph,
  HomeSpan,
  ButtonContainer,
  Button
};
