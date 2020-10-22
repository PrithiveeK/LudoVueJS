/* eslint-disable */

const state = {
  piece1: {
    currentPosition: [0, 0],
    startPosition: [-9, 7],
    isOut: false,
    isHome: false
  },
  piece2: {
    currentPosition: [0, 0],
    startPosition: [-17, 15],
    isOut: false,
    isHome: false
  },
  piece3: {
    currentPosition: [0, 0],
    startPosition: [-17, -1],
    isOut: false,
    isHome: false
  },
  piece4: {
    currentPosition: [0, 0],
    startPosition: [-25, 7],
    isOut: false,
    isHome: false
  },
  isEnd: false,
  noOfPiecesOut: 0,
  topWall: [-39.5, -22],
  leftWall: [-31.5, -14]
};

const getters = {
  piecePosition: (state: any) => (piece: string) => {
    return {
      top: `${state[piece].currentPosition[0]}em`,
      left: `${state[piece].currentPosition[1]}em`
    };
  }
};

const mutations = {
  startPiece(state: any, whichPiece: string) {
    state[whichPiece].currentPosition = state[whichPiece].startPosition;
    state[whichPiece].isOut = true;
    ++state.noOfPiecesOut;
  },
  movePiece(state: any, payload: { whichPiece: string, toPosition: number[] }) {
    state[payload.whichPiece].currentPosition = payload.toPosition;
  }
};

const actions = {
  diceRolled(ctx: any, payload: any) {
    console.log("Player3 rolled");
    if (ctx.state.noOfPiecesOut === 0 && payload.dice !== 6) return true;
    return false;
  },
  movePiece(ctx: any, payload: any) {
    console.log("Player3 moved");
    if (payload.dice === 6 && ctx.state.noOfPiecesOut < 4)
      ctx.commit("startPiece", "piece" + payload.whichPiece);
    return ctx.getters.piecePosition("piece" + payload.whichPiece);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
