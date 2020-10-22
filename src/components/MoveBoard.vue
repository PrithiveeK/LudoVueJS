<template>
  <div class="board-overlay">
    <PlayerManager
      class="red"
      id="Player1"
      :isPlaying="currentPlayer === 1"
      :playerId="'Player1'"
    />
    <PlayerManager
      class="blue"
      id="Player2"
      :isPlaying="currentPlayer === 2"
      :playerId="'Player2'"
    />
    <PlayerManager
      class="green"
      id="Player3"
      :isPlaying="currentPlayer === 3"
      :playerId="'Player3'"
    />
    <PlayerManager
      class="yellow"
      id="Player4"
      :isPlaying="currentPlayer === 4"
      :playerId="'Player4'"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PlayerManager from "./PlayerManager.vue";

@Options({
  components: {
    PlayerManager
  },
  computed: {
    currentPlayer() {
      return this.$store.state.currentPlayer;
    }
  }
})
export default class MoveBoard extends Vue {}
</script>

<style>
.board-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: repeat(15, 1fr) / repeat(15, 1fr);
  /* background-color: #12345680; */
  gap: 1.4em;
}
/* .path {
  background-color: chocolate;
  display:flex;
  align-items: center;
  justify-content: center;
} */
#Player1 {
  grid-row: 1/7;
  grid-column: 1/7;
}
#Player2 {
  grid-row: 1/7;
  grid-column: -1/-7;
}
#Player3 {
  grid-row: -1/-7;
  grid-column: -1/-7;
}
#Player4 {
  grid-row: -1/-7;
  grid-column: 1/7;
}
.player-info {
  position: absolute;
  border: 4px solid currentColor;
  display: flex;
  border-radius: 12px;
}
#Player1 .player-info {
  bottom: 100%;
  left: 0;
  flex-direction: row;
}
#Player2 .player-info {
  bottom: 100%;
  right: 0;
  flex-direction: row-reverse;
}
#Player3 .player-info {
  top: 100%;
  right: 0;
  flex-direction: row-reverse;
}
#Player4 .player-info {
  top: 100%;
  left: 0;
  flex-direction: row;
}
</style>
