<template>
  <section>
    <div class="heading">
      <span @click="display = 'my_stats'">My Stats</span>
      <span class="seperator"></span>
      <span @click="display = 'leaderboard'">Leaderboard</span>
    </div>
    <div class="table-container">
      <Table
        v-if="display === 'my_stats'"
        :tHead="['S.No', 'Against', 'Result', 'Points']"
        :lookUp="'my_stats'"
      />
      <Table
        v-if="display === 'leaderboard'"
        :tHead="['Rank', 'Name', 'Points']"
        :lookUp="'leaderboard'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Table from "./Table.vue";

@Options({
  components: {
    Table
  }
})
export default class Stats extends Vue {
  display = 'my_stats';
}
</script>

<style scoped>
section {
  padding: 20px 20px 0;
  display: grid;
  grid-template-rows: 30% 70%;
}
.heading {
  color: #a0a0a0;
  border-bottom: 2px solid currentColor;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  width: 100%;
  height: 70px;
  padding: 5px;
  place-self: center;
  place-items: center;
}
.heading > span {
  height: 100%;
  font-size: 40px;
  transition: all 0.3s;
}
span.seperator {
  width: 2px;
  height: 100%;
  background-color: currentColor;
}
.heading > span:hover {
  transform: scale(1.12);
}
.heading > span:active {
  transform: scale(0.97);
}
.table-container {
  width: 100%;
}
</style>
