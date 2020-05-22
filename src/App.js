import React from 'react';
import { createUseStyles } from 'react-jss';
import Game from './components/Game';

const useStyles = createUseStyles(({ typography }) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      fontFamily: typography.fontFamily,
      margin: 0,
      padding: 0
    }
  }
}));

function App() {
  useStyles();

  return (
    <main>
      <Game />
    </main>
  );
}

export default App;
