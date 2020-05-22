import React from 'react';
import { arrayOf, number, string } from 'prop-types';
import { createUseStyles } from 'react-jss';
import Dice from './Dice';

const useStyles = createUseStyles(({
  mediaQueries,
  palette,
  typography
}) => ({
  container: {
    fontFamily: typography.fontFamily,
    fontSize: 24,
    padding: [8, '1%'],
    width: '20%'
  },
  diceContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: 32
  },
  healthBar: {
    background: palette.negative,
    height: 8,
    position: 'relative',
    width: '100%'
  },
  health: {
    background: palette.positive,
    height: '100%',
    position: 'absolute',
    transform: ({ health }) => `scaleX(${health / 100})`,
    transformOrigin: 'center left',
    transition: 'transform 300ms ease-in-out',
    width: '100%'
  },
  healthNumber: {
    color: palette.light,
    margin: [8, 0],
    textAlign: 'center'
  },
  image: {
    display: 'block',
    margin: [0, 'auto'],
    width: '75%'
  },
  name: {
    color: palette.light,
    display: 'block',
    fontSize: 12,
    textAlign: 'center',

    [mediaQueries.tablet]: {
      fontSize: 24
    },

    [mediaQueries.desktop]: {
      fontSize: 36
    }
  }
}));

const Character = ({
  dice,
  health,
  image,
  name
}) => {
  const classes = useStyles({ health });

  return (
    <div className={classes.container}>
      <div className={classes.healthBar}>
        <div className={classes.health} />
      </div>
      <p className={classes.healthNumber} data-testid={`${name}-health`}>{health}</p>
      <img alt={name} className={classes.image} src={image} />
      <p className={classes.name}>{name}</p>
      <div className={classes.diceContainer}>
        {dice && dice.map((die, index) => <Dice key={index} score={die} />)}
      </div>
    </div>
  );
};

Character.defaultProps = {
  dice: undefined
}

Character.propTypes = {
  dice: arrayOf(number),
  health: number.isRequired,
  image: string.isRequired,
  name: string.isRequired
}

export default Character;