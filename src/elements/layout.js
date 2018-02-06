import styled, { css } from 'styled-components';
import { padding, margin, fonts, colors, mixins } from './settings';

const PageContainer = styled.div`
  height: calc(90vh - 40px);
  display: flex;
  flex-wrap: wrap;
`;

const PageVisual = styled.section`
  margin-top: -50px;
  margin-bottom: 10px;
  width: 45%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  @media (max-width: 992px) {
    display: none;
  }
`;

const PageContent = styled.section`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-top: ${margin.large};
  overflow: hidden;

  ${props =>
    props.scroll &&
    css`
      height: 70%;
      margin-bottom: 60px;
      overflow-y: auto;
      ${mixins.scrollbar()};
    `};

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
    padding-top: ${padding.large};
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: ${padding.superSmall};
    margin-top: ${margin.large};
  }

  ${props =>
    props.padding &&
    css`
      padding: ${padding.large};
      padding-top: 0px;

      @media (max-width: 768px) {
        padding: ${padding.small};
        padding-top: ${padding.mini};
      }
    `};
`;

const NormalContent = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: ${padding.small};
  padding-top: 0;
  height: 80%;
  overflow-y: auto;
  ${mixins.scrollbar()};

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: ${margin.small} auto;
    color: ${colors.black};
    padding: ${padding.medium};
    padding-top: 0;
    height: 70%;
  }
`;

const Footer = styled.footer`
  position: absolute;
  right: 5%;
  bottom: 10px;
  color: ${colors.lavender};
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export { PageContainer, PageVisual, PageContent, NormalContent, Footer };
