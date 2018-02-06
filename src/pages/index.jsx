import React from 'react';

import LanguagePicker from '../components/LanguagePicker';

import {
  SharingInCountry,
  HeadingText,
  Country,
  HomeParagraph,
  HomeSpan,
  Buttons,
  ButtonContainer,
  Button
} from '../elements/home';

import { PageContainer, PageVisual, PageContent } from '../elements/layout';

import vertBible from '../images/vertBible.jpg';
import googlePlay from '../images/googlePlay.svg';
import appStore from '../images/appStore.svg';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: ['Germany', 'Thailand', 'Ecuador', 'USA'],
      countryIndex: 1
    };

    this.countryInterval = null;
  }

  componentDidMount() {
    this.countryInterval = setInterval(() => {
      this.setState({
        countryIndex:
          this.state.countryIndex < this.state.countries.length - 1
            ? this.state.countryIndex + 1
            : 0
      });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.countryInterval) {
      clearInterval(this.countryInterval);
    }
  }

  render() {
    const { countries, countryIndex } = this.state;

    return (
      <PageContainer>
        <PageVisual style={{ backgroundImage: `url('${vertBible}')` }}>
          <SharingInCountry>
            <HeadingText>Sharing bibles in</HeadingText>
            <Country>{countries[countryIndex]}</Country>
          </SharingInCountry>
        </PageVisual>

        <PageContent>
          <HomeParagraph>
            Introducing <br /> <HomeSpan>SHARE BIBLES APP</HomeSpan>
          </HomeParagraph>
          <HomeParagraph>
            A whole new way of{' '}
            <strong style={{ color: '#1FDA9A', textShadow: '1px 1px #505050' }}>
              spreading the word
            </strong>
          </HomeParagraph>

          <ButtonContainer>
            <Button src={googlePlay} alt="google play button" />
            <Button src={appStore} alt="app store button" />
          </ButtonContainer>
        </PageContent>
        <LanguagePicker />
      </PageContainer>
    );
  }
}
