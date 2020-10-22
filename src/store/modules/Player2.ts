/* eslint-disable */

const state = {
  piece1: {
    currentPosition: [0, 0],
    startPosition: [1, -17],
    isOut: false,
    isHome: false
  },
  piece2: {
    currentPosition: [0, 0],
    startPosition: [-7, -9],
    isOut: false,
    isHome: false
  },
  piece3: {
    currentPosition: [0, 0],
    startPosition: [-7, -25],
    isOut: false,
    isHome: false
  },
  piece4: {
    currentPosition: [0, 0],
    startPosition: [-15, -17],
    isOut: false,
    isHome: false
  },
  isEnd: false,
  noOfPiecesOut: 0
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
    console.log("Player2 rolled");
    if (ctx.state.noOfPiecesOut === 0 && payload.dice !== 6) return true;
    return false;
  },
  movePiece(ctx: any, payload: any) {
    console.log("Player2 moved");
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
