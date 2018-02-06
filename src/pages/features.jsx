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
              No longer will we miss homes due to a lack of information or
              miscommunication.
            </p>
            <div>
              <h3>01</h3>
              <hr />
              <p className="general">
                What Bible was distributed, when was it distributed, and by who
              </p>
            </div>

            <div>
              <h3>02</h3>
              <hr />
              <p className="general">Was the Bible actually received</p>
            </div>

            <div>
              <h3>03</h3>
              <hr />
              <p className="general">Notes, observations, and needs</p>
            </div>
          </TrackSection>

          <ImageContainer>
            <PhoneImg src={phone} alt="phone" />
          </ImageContainer>

          <FollowUpSection>
            <h2>FOLLOW UP</h2>
            <p className="general">
              Local believers (or short-term outreach teams) can follow-up with
              the people around.
            </p>
            <div>
              <h3>04</h3>
              <hr />
              <p className="general">Did the person receive the prayer</p>
            </div>

            <div>
              <h3>05</h3>
              <hr />
              <p className="general">
                Did the person read the Bible and understand the gospel of Jesus
                Christ
              </p>
            </div>

            <div>
              <h3>06</h3>
              <hr />
              <p className="general">
                Did the person join a discipleship group and/or get baptized
              </p>
            </div>
          </FollowUpSection>
        </FeaturesContainer>
      </PageContainer>
    );
  }
}
