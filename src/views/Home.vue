<template>
  <div class="main noscroll">
    <Dashboard class="home" />
    <Stats class="stats" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Dashboard from "@/components/Dashboard.vue";
import Stats from "@/components/Stats.vue";

@Options({
  components: {
    Dashboard,
    Stats
  }
})
export default class Home extends Vue {}
</script>

<style>
.main {
  overflow: hidden auto;
  width: inherit;
  height: inherit;
}
.main > section {
  width: inherit;
  height: inherit;
  padding-top: 3rem;
  overflow: hidden;
}
.home {
  position: relative;
  display: grid;
  justify-content: space-around;
}
img {
  pointer-events: none;
  width: 30rem;
  max-width: 85vw;
}
</style>
