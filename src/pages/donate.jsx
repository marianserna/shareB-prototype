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
            Lorem ipsum dolor amet master cleanse locavore raw denim salvia,
            gluten-free godard pour-over blog. Gastropub ugh williamsburg, pork
            belly shabby chic selfies cornhole gluten-free selvage. Jean shorts
            chillwave artisan gluten-free tattooed cloud bread sartorial hell of
            freegan.
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
