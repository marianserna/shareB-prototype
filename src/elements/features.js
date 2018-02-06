import styled from 'styled-components';

import { padding, margin, fonts, colors, mixins } from './settings';
import { NormalContent } from './layout';

const FeaturesContainer = NormalContent.extend`
  width: 100%;
  display: flex;
`;

const TrackSection = styled.section`
  width: 40%;
  padding: ${padding.small};

  @media (max-width: 1280px) {
    padding: ${margin.small};
  }

  @media (max-width: 1163px) {
    width: 50%;
    padding: ${padding.medium};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 512px) {
    width: 100%;
    padding: ${padding.mini};
  }
`;

const ImageContainer = styled.div`
  width: 20%;
  text-align: center;

  @media (max-width: 1163px) {
    display: none;
  }
`;

const PhoneImg = styled.img`
  margin-top: ${margin.small};
  margin-bottom: ${margin.mini};
  max-height: 500px;

  @media (max-width: 1280px) {
    height: 450px;
  }
`;

const FollowUpSection = styled.section`
  width: 40%;
  padding: ${padding.small};

  @media (max-width: 1280px) {
    padding: ${margin.small};
  }

  @media (max-width: 1163px) {
    width: 50%;
    padding: ${padding.medium};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 512px) {
    width: 100%;
    padding: ${padding.mini};
  }
`;

export {
  FeaturesContainer,
  TrackSection,
  ImageContainer,
  PhoneImg,
  FollowUpSection
};
