import React from 'react';

import { PageContainer, PageVisual, PageContent } from '../elements/layout';

import mapImage from '../images/map.png';

export default class Contact extends React.Component {
  render() {
    return (
      <PageContainer>
        <PageVisual style={{ backgroundImage: `url('${mapImage}')` }} />
        <PageContent padding scroll>
          <h2>Contact Us!</h2>
          <p className="general">
            Lorem ipsum dolor amet master cleanse locavore raw denim salvia,
            gluten-free godard pour-over blog. Gastropub ugh williamsburg, pork
            belly shabby chic selfies cornhole gluten-free selvage. Jean shorts
            chillwave artisan gluten-free tattooed cloud bread sartorial hell of
            freegan.
          </p>
          <p className="general left">
            <a href="mailto:contact@sharebibles.com">contact@sharebibles.com</a>
          </p>
          <p className="general left">1-555-555-5555</p>
          <p className="general left">
            123 Road St.<br />Kitchener, ON<br />M8X 1A3<br />Canada
          </p>
        </PageContent>
      </PageContainer>
    );
  }
}
