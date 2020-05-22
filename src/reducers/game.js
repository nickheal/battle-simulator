import generateDiceScore from '../utils/generateDiceScore';
import sum from '../utils/sum';

const ATTACK = 'ATTACK';
const RESTART = 'RESTART';

export const initialState = {
  player: {
    health: 100
  },
  monster: {
    health: 100
  }
};

export function reducer(state, action) {
  switch(action.type) {
    case ATTACK:
      const { playerScores, monsterScores } = action;
      const difference = sum(playerScores) - sum(monsterScores);
      const playerHealth = difference > 0 ? state.player.health : state.player.health + difference;
      const monsterHealth = difference < 0 ? state.monster.health : state.monster.health - difference;
      return {
        player: {
          dice: playerScores,
          health: Math.max(playerHealth, 0)
        },
        monster: {
          dice: monsterScores,
          health: Math.max(monsterHealth, 0)
        },
        finished: playerHealth <= 0 || monsterHealth <= 0
      }
    case RESTART:
      return { ...initialState };
    default:
      throw new Error(`Action ${action.type} unrecognised`);
  }
};

export function run() {
  return {
    type: ATTACK,
    playerScores: [generateDiceScore(), generateDiceScore()],
    monsterScores: [generateDiceScore(), generateDiceScore()]
  }
}

export function restart() {
  return {
    type: RESTART
  }
}
