const fontSize = {
  display: '2.5rem',
  large: '1.5rem',
  medium: '1.2rem',
  small: '0.9rem',
};

const color = {
  blue: '#438aff',
  blue2: '#2c5bf1',
  mint: '#21dfa6',
  gray: '#9a9ea3',
  gray2: '#e4e8eB',
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
