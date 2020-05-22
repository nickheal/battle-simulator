import { initialState, reducer } from './game';

describe('reducer', () => {
  it('should subtract the difference from the lower scored player', () => {
    const currentState = {
      player: {
        health: 100
      },
      monster: {
        health: 100
      }
    }
    const action = {
      type: 'ATTACK',
      playerScores: [2, 2],
      monsterScores: [1, 1]
    }
    expect(reducer(currentState, action).player.health).toBe(100);
    expect(reducer(currentState, action).monster.health).toBe(98);
  });

  it('should not allow health to go below 0', () => {
    const currentState = {
      player: {
        health: 100
      },
      monster: {
        health: 1
      }
    }
    const action = {
      type: 'ATTACK',
      playerScores: [2, 2],
      monsterScores: [1, 1]
    }
    expect(reducer(currentState, action).player.health).toBe(100);
    expect(reducer(currentState, action).monster.health).toBe(0);
  });

  it('should return the initial state after a reset', () => {
    const currentState = {
      player: {
        health: 10
      }
    }
    expect(reducer(currentState, { type: 'RESTART' })).toEqual(initialState);
  });
});