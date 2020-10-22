<template>
  <div class="player">
    <span v-for="i in 4" :key="i">
      <Piece
        :class="{
          choose:
            choosePiece &&
            (currentDiceValue === 6 || this.playerState[`piece${i}`].isOut)
        }"
        @click="moveThisPiece(i)"
        :style="piecePositions[i - 1]"
      />
    </span>
    <div class="player-info" :class="{ block: !isPlaying }">
      <div class="icon">
        <div class="profile-icon"></div>
      </div>
      <Dice :class="{ pe: isPlaying && !choosePiece }" @roll="diceRolled" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Piece from "./Piece.vue";
import Dice from "./Dice.vue";

@Options({
  components: {
    Piece,
    Dice
  },
  props: {
    isPlaying: Boolean,
    playerId: String
  },
  computed: {
    playerState() {
      return this.$store.state[this.playerId];
    }
  },
  methods: {
    async diceRolled(event: number) {
      const result = await this.$store.dispatch(`${this.playerId}/diceRolled`, {
        dice: event
      });
      if (result) {
        this.$store.commit("nextPlayer");
      } else {
        this.choosePiece = true;
        this.currentDiceValue = event;
      }
    },
    async moveThisPiece(i: number) {
      const result = await this.$store.dispatch(`${this.playerId}/movePiece`, {
        dice: this.currentDiceValue,
        whichPiece: i
      });
      this.piecePositions[i - 1] = result;
      this.choosePiece = false;
      if (this.currentDiceValue !== 6) {
        this.$store.commit("nextPlayer");
      }
      this.currentDiceValue = 0;
    }
  }
})
export default class MoveBoard extends Vue {
  playerId!: string;
  choosePiece = false;
  currentDiceValue = 0;
  piecePositions = [
    {
      top: "0em",
      left: "0em"
    },
    {
      top: "0em",
      left: "0em"
    },
    {
      top: "0em",
      left: "0em"
    },
    {
      top: "0em",
      left: "0em"
    }
  ];
}
</script>

<style scoped>
.block {
  filter: brightness(0.5);
}
.choose {
  transform: scale(1.15);
  pointer-events: all;
}
.icon {
  width: 50px;
  height: 50px;
  position: relative;
  transition: all 0.3s;
}
.profile-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 10px;
  border-radius: 100% 100% 0 0;
  background-color: currentColor;
}
.profile-icon:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -140%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: currentColor;
  border: 1px solid currentColor;
}
.player {
  position: relative;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  place-items: center;
  padding: 1.5em;
}
span {
  display: grid;
  width: 10px;
  height: 10px;
  place-items: center;
}
span:nth-child(1) {
  grid-row: 1;
  grid-column: 2;
}
span:nth-child(2) {
  grid-row: 2;
  grid-column: 1;
}
span:nth-child(3) {
  grid-row: 2;
  grid-column: 3;
}
span:nth-child(4) {
  grid-row: 3;
  grid-column: 2;
}
</style>
