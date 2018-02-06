import React from 'react';

import { Language, LanguageCTA, Flag } from '../elements/language';
import german from '../images/flag-de.svg';
import thai from '../images/flag-th.svg';
import spanish from '../images/flag-es.svg';
import english from '../images/flag-en.svg';

const flags = {
  en: english,
  de: german,
  es: spanish,
  th: thai
};

export default class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
      active: false
    };
  }

  componentDidMount() {
    this.setState({ language: localStorage.getItem('language') || 'en' });
  }

  render() {
    return (
      <Language>
        <LanguageCTA>Language</LanguageCTA>

        {this.state.active ? (
          Object.keys(flags).map(key => (
            <Flag
              src={flags[key]}
              key={key}
              alt="language flag"
              onClick={e => {
                this.setState({ language: key, active: false });
                localStorage.setItem('language', key);
              }}
            />
          ))
        ) : (
          <Flag
            src={flags[this.state.language]}
            alt="language flag"
            onClick={e => {
              this.setState({ active: true });
            }}
          />
        )}
      </Language>
    );
  }
}
