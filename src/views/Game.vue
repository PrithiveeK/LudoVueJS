<template>
  <div class="game-component">
    <GameOptions />
    <Board />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Board from "@/components/Board.vue";
import GameOptions from "@/components/GameOptions.vue";

@Options({
  components: {
    Board,
    GameOptions
  }
})
export default class Game extends Vue {}
</script>

<style scoped>
.game-component {
  width: inherit;
  height: inherit;
  display: grid;
  place-items: center;
}
</style>
