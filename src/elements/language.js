import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const Language = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 8vw;
  bottom: 8%;
`;

const LanguageCTA = styled.p`
  margin-right: ${margin.small};
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
  text-shadow: 2px 2px ${colors.black};

  @media (max-width: 992px) {
    color: ${colors.orange};
    text-shadow: none;
  }

  @media (max-width: 768px) {
    margin-right: ${margin.mini};
    font-size: 1rem;
  }
`;

const Flag = styled.img`
  margin-right: ${margin.superSmall};
  width: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: ${margin.mini};
    width: 30px;
  }
`;

export { Language, LanguageCTA, Flag };
