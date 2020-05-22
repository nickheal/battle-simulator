import React, { useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import { reducer, initialState, run, restart } from '../reducers/game';
import sum from '../utils/sum';
import Actions from './Actions';
import Button from './Button';
import Character from './Character';

function getMessage({ player, monster }) {
  if (player.health <= 0) {
    return 'Game over!';
  }
  if (monster.health <= 0) {
    return 'You win!';
  }
  if (!player.dice) return 'Get started!';
  const difference = sum(player.dice) - sum(monster.dice);
  if (difference === 0) {
    return 'Tie!';
  }
  if (difference > 0) {
    return `You hit ${difference}, finish him!`;
  }
  if (difference < 0) {
    return `He hit you for ${-difference}!`;
  }
}

const useStyles = createUseStyles(({ mediaQueries, typography }) => ({
  battleField: {
    display: 'flex',
    flexWrap: 'nowrap',
    margin: [0, 'auto'],
    maxWidth: 1024
  },
  container: {
    background: 'url(/img/background.jpg)',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: [60, 0]
  },
  h1: {
    ...typography.h1,
    marginTop: 0
  },
  message: {
    ...typography.h1,
    flexGrow: 1,
    fontSize: 36,
    width: '60%',

    [mediaQueries.tablet]: {
      fontSize: 48
    },

    [mediaQueries.desktop]: {
      fontSize: 56
    }
  }
}));

function App() {
  const classes = useStyles();
  const [gameState, gameDispatch] = useReducer(reducer, { ...initialState });

  return (
    <main className={classes.container}>
      <h1 className={classes.h1}>Battle simulator</h1>
      <section className={classes.battleField}>
        <Character
          health={gameState.player.health}
          image={'/img/player.gif'}
          name="Player"
          dice={gameState.player.dice}
        />
        <p className={classes.message}>{getMessage(gameState)}</p>
        <Character
          health={gameState.monster.health}
          image={'/img/monster.gif'}
          name="Monster"
          dice={gameState.monster.dice}
        />
      </section>
      <Actions>
        <Button data-testid="action-button" onClick={() => gameDispatch(gameState.finished ? restart() : run() )}>
          {gameState.finished ? 'Replay' : 'Attack!'}
        </Button>
      </Actions>
    </main>
  );
}

export default App;
