import React from 'react';
import { number } from 'prop-types';
import { createUseStyles } from 'react-jss';

function getDotPositions(score) {
  switch(score) {
    case 1:
      return [{
        x: 50,
        y: 50
      }];
    case 2:
      return [{
        x: 25,
        y: 25
      }, {
        x: 75,
        y: 75
      }];
    case 3:
      return [{
        x: 25,
        y: 25
      }, {
        x: 50,
        y: 50
      }, {
        x: 75,
        y: 75
      }];
    case 4:
      return [{
        x: 25,
        y: 25
      }, {
        x: 25,
        y: 75
      }, {
        x: 75,
        y: 25
      }, {
        x: 75,
        y: 75
      }];
    case 5:
      return [{
        x: 25,
        y: 25
      }, {
        x: 25,
        y: 75
      }, {
        x: 75,
        y: 25
      }, {
        x: 75,
        y: 75
      }, {
        x: 50,
        y: 50
      }];
    case 6:
      return [{
        x: 25,
        y: 25
      }, {
        x: 25,
        y: 50
      }, {
        x: 25,
        y: 75
      }, {
        x: 75,
        y: 25
      }, {
        x: 75,
        y: 50
      }, {
        x: 75,
        y: 75
      }];
    default:
      throw new Error(`${score} number of dots not handled.`);
  }
}

const useStyles = createUseStyles(({
  palette
}) => ({
  dice: {
    background: palette.light,
    border: 0,
    borderRadius: 4,
    color: '#000',
    height: 0,
    paddingBottom: '33%',
    position: 'relative',
    width: '33%'
  },
  dot: {
    background: '#000',
    borderRadius: 999,
    height: 0,
    paddingBottom: '20%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '20%'
  }
}));

const Dice = ({ score }) => {
  const classes = useStyles({ score });

  return (
    <div className={classes.dice}>
      {getDotPositions(score).map(({x, y}, index) => (
        <div className={classes.dot} key={index} style={{ top: `${y}%`, left: `${x}%` }} />
      ))}
    </div>
  );
};

Dice.propTypes = {
  score: number.isRequired
};

export default Dice;