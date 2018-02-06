import styled from 'styled-components';
import { padding, margin, fonts, colors } from './settings';

const DonateLink = styled.a`
  padding: ${padding.superSmall} ${padding.small};
  border: 2px solid ${colors.purple};
  border-radius: 0px;
  font-family: ${fonts.roboto};
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  color: ${colors.black};

  &:hover {
    background-color: ${colors.purple};
    color: ${colors.white};
  }
`;

export { DonateLink };
