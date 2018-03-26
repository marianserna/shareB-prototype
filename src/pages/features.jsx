import React from 'react';

import SubNav from '../components/SubNav';
import {
  FeaturesContainer,
  TrackSection,
  ImageContainer,
  PhoneImg,
  FollowUpSection
} from '../elements/features';
import { PageContainer, PageVisual, PageContent } from '../elements/layout';

import phone from '../images/phone.png';

export default class Features extends React.Component {
  render() {
    return (
      <PageContainer>
        <SubNav />
        <FeaturesContainer>
          <TrackSection>
            <h2>TRACK</h2>
            <p className="general">
              Lorem ipsum dolor amet master cleanse locavore raw denim salvia
            </p>
            <div>
              <h3>01</h3>
              <hr />
              <p className="general">
                amet master cleanse locavore?
              </p>
            </div>

            <div>
              <h3>02</h3>
              <hr />
              <p className="general">amet master cleanse locavore?</p>
            </div>

            <div>
              <h3>03</h3>
              <hr />
              <p className="general">amet master cleanse locavore?</p>
            </div>
          </TrackSection>

          <ImageContainer>
            <PhoneImg src={phone} alt="phone" />
          </ImageContainer>

          <FollowUpSection>
            <h2>FOLLOW UP</h2>
            <p className="general">
              Lorem ipsum dolor amet master cleanse locavore raw denim salvia
            </p>
            <div>
              <h3>04</h3>
              <hr />
              <p className="general">amet master cleanse locavore?</p>
            </div>

            <div>
              <h3>05</h3>
              <hr />
              <p className="general">
                amet master cleanse locavore?
              </p>
            </div>

            <div>
              <h3>06</h3>
              <hr />
              <p className="general">
                amet master cleanse locavore?
              </p>
            </div>
          </FollowUpSection>
        </FeaturesContainer>
      </PageContainer>
    );
  }
}
