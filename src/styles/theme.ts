const fontSize = {
  display: '4rem',
  large: '3rem',
  medium: '1.8rem',
  small: '1.5rem',
};

const color = {
  blue: '#438aff',
  blue2: '#2c5bf1',
  mint: '#21dfa6',
  gray: '#9a9ea3',
  gray2: '#e4e8eB',
  white: '#ffffff',
  black: '#1e1f21',
};

const theme = {
  fontSize,
  color: {
    primary: color.blue,
    line: color.gray2,
    ...color,
  },
};

export default theme;
