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
    props.padding &&
    css`
      padding: ${padding.large};
      padding-top: 0px;
    `};

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
    padding: ${padding.mini};
    margin-top: ${margin.large};
  }
`;

const NormalContent = styled.section`
  width: 60%;
  margin: 0 auto;
  margin-top: ${margin.small};
  padding: ${padding.small};
  padding-top: 0;
  height: 80%;
  overflow-y: auto;
  ${mixins.scrollbar()};

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: ${margin.mini};
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: ${margin.small} auto;
    color: ${colors.black};
    padding: ${padding.small};
    padding-top: 0;
    margin-bottom: 60px;
    height: 70%;
  }
`;

const Footer = styled.footer`
  position: absolute;
  right: 5%;
  bottom: 80px;
  color: ${colors.lavender};
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    bottom: 10px;
    background-color: ${colors.white};
  }
`;

export { PageContainer, PageVisual, PageContent, NormalContent, Footer };
