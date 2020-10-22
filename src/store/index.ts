import { createStore } from "vuex";
import Player1 from "./modules/Player1";
import Player2 from "./modules/Player2";
import Player3 from "./modules/Player3";
import Player4 from "./modules/Player4";

export default createStore({
  state: {
    playerColor: 'red',
    currentPlayer: 1
  },
  mutations: {
    chooseColor (state, color) {
      state.playerColor = color
    },
    nextPlayer (state) {
      if (state.currentPlayer === 4) state.currentPlayer = 1;
      else ++state.currentPlayer;
    }
  },
  actions: {
    setPiecePositions (ctx) {
      //... Yet to complete
    }
  },
  modules: {
    Player1,
    Player2,
    Player3,
    Player4
  }
});
