import { css } from 'styled-components';

const padding = {
  mini: '5px',
  superSmall: '10px',
  small: '30px',
  medium: '50px',
  large: '100px',
  ultraLarge: '150px',
  huge: '300px'
};

const margin = {
  mini: '5px',
  superSmall: '10px',
  small: '30px',
  medium: '50px',
  large: '100px',
  ultraLarge: '200px',
  huge: '300px'
};

const fonts = {
  nav: 'Fjalla One, sans-serif',
  body: 'Oswald, sans-serif',
  roboto: 'Roboto Slab, serif'
};

const colors = {
  white: '#FFFFFF',
  black: '#505050',
  beige: '#DBD3D8',
  purple: '#7f00ff',
  orange: '#f15a24',
  blue: '#1FDA9A',
  lavender: '#9068BE'
};

const mixins = {
  scrollbar: () => css`
    &::-webkit-scrollbar-track {
      border: 1px solid black;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000000;
    }
  `
};

export { padding, margin, fonts, colors, mixins };
