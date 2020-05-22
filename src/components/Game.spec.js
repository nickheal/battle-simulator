import React from 'react';
import { fireEvent, render } from '../test-utils';
import Game from './Game';
import generateDiceScore from '../utils/generateDiceScore';
const { default: actualGenerateDiceScore } = jest.requireActual('../utils/generateDiceScore');

jest.mock('../utils/generateDiceScore');

describe('Game', () => {
  beforeEach(() => {
    generateDiceScore.mockReset();
  });

  it('should let you play through, and restart the game', () => {
    const { getByTestId } = render(<Game />);

    let complete = false;
    let playerHealth = 100;
    let monsterHealth = 100;

    while (!complete) {
      generateDiceScore.mockReset();
      generateDiceScore.mockImplementation(actualGenerateDiceScore);
      fireEvent.click(getByTestId('action-button'));

      const playerScore = generateDiceScore.mock.results[0].value + generateDiceScore.mock.results[1].value;
      const monsterScore = generateDiceScore.mock.results[2].value + generateDiceScore.mock.results[3].value;
      const difference = playerScore - monsterScore;
      
      if (difference > 0) {
        monsterHealth -= difference;
        expect(getByTestId('Monster-health').textContent).toBe(`${Math.max(monsterHealth, 0)}`);
      } else if (difference < 0) {
        playerHealth += difference;
        expect(getByTestId('Player-health').textContent).toBe(`${Math.max(playerHealth, 0)}`);
      }

      if (getByTestId('Player-health').textContent === '0' || getByTestId('Monster-health').textContent === '0') {
        complete = true;
      }
    }

    fireEvent.click(getByTestId('action-button'));
    expect(getByTestId('Player-health').textContent).toBe('100');
    expect(getByTestId('Monster-health').textContent).toBe('100');
  });
});
