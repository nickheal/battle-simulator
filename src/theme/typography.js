import palette from './palette';

export default {
  fontFamily: 'Bangers, Arial, sans-serif',
  h1: {
    fontSize: 72,
    background: `-webkit-linear-gradient(${palette.light}, ${palette.primary})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    // fontSize: 64,
    textAlign: 'center'
  }
};
