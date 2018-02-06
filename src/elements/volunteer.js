import styled, { css } from 'styled-components';

import { padding, margin, fonts, colors } from './settings';

const Form = styled.form`
  width: 65%;
  margin: 0 auto;
  margin-bottom: ${margin.small};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: ${margin.small};

  ${props =>
    props.right &&
    css`
      text-align: right;
    `};

  @media (max-width: 768px) {
    margin-bottom: ${margin.superSmall};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${margin.superSmall};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const placeholder = css`
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${colors.purple};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${colors.purple};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${colors.purple};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${colors.purple};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: ${padding.superSmall};
  font-family: ${fonts.body};
  font-size: 1.2rem;
  border: 2px solid ${colors.black};
  color: ${colors.purple};
  ${placeholder};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: ${padding.mini};
  }
`;

const Textarea = Input.withComponent('textarea');

const Submit = styled.button`
  padding: ${padding.superSmall} ${padding.small};
  border: 2px solid ${colors.purple};
  border-radius: 0px;
  font-family: ${fonts.roboto};
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${colors.purple};
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    margin-top: ${margin.mini};
    font-size: 1.1rem;
  }
`;

const Agreement = styled.div`
  font-size: 1rem;
  width: 100%;
  font-family: ${fonts.roboto};
  line-height: 1.5rem;

  @media (max-width: 768px) {
    margin-top: ${margin.small};
    font-size: 0.85rem;
    line-height: 1.3rem;
  }
`;

export { Form, Label, InputGroup, Input, Textarea, Submit, Agreement };
