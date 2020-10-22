<template>
  <section>
    <Header
      @settings="
        showFW = true;
        which = 'settings';
      "
    />
    <img src="../assets/ludo_logo_empty_bg.png" alt="" />
    <NavBar
      @invite="
        showFW = true;
        which = 'invite';
      "
    />
    <OverAllStats />
    <StartGame />
    <FloatingWindow
      v-if="showFW"
      @close="
        showFW = false;
        which = '';
      "
    >
      <Settings v-if="which === 'settings'" />
      <Invite v-if="which === 'invite'" />
    </FloatingWindow>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "./NavBar.vue";
import Header from "./Header.vue";
import OverAllStats from "./OverAllStats.vue";
import StartGame from "./StartGame.vue";
import FloatingWindow from "./FloatingWindow.vue";
import Settings from "./Settings.vue";
import Invite from "./Invite.vue";

@Options({
  components: {
    Header,
    NavBar,
    OverAllStats,
    StartGame,
    FloatingWindow,
    Settings,
    Invite
  }
})
export default class Dashboard extends Vue {
  showFW = false;
  which = "";
}
</script>
