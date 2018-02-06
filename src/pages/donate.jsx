import React from 'react';

import { PageContainer, PageVisual, PageContent } from '../elements/layout';

import { DonateLink } from '../elements/donate';

import appImage from '../images/app.jpg';

export default class Donate extends React.Component {
  render() {
    return (
      <PageContainer>
        <PageVisual style={{ backgroundImage: `url('${appImage}')` }} />
        <PageContent padding>
          <h2>Built By Volunteers</h2>
          <p className="general">
            Through the generosity of time, skills and gifting, this project is
            becoming a reality. YWAM and FaithTech have partnered together to
            serve the body of Christ by creating and developing free tool. With
            your help we can continue to make it more powerful for kingdom
            purposes.
          </p>
          <p className="general centered">
            <DonateLink href="https://www.google.com" target="_blank">
              DONATE NOW!
            </DonateLink>
          </p>
        </PageContent>
      </PageContainer>
    );
  }
}
