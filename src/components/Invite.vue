<template>
  <section>
    <form @submit="createInvite" @keyup:enter="createInvite">
      <div class="input-container">
        <label for="user" class="required">
          Players
          <i class="add-player" @click="addPlayer" />
        </label>
        <transition-group name="appear">
          <div
            class="player-selector"
            v-for="(player, i) in inviteData.players"
            :key="i"
          >
            <input
              type="text"
              name="user"
              placeholder="Choose Player"
              v-model="inviteData.players[i]"
              autocomplete="0"
            />
            <i class="remove-player" @click="removePlayer(i)" />
          </div>
        </transition-group>
      </div>
      <div class="input-container">
        <label for="room_name" class="required">Room Name</label>
        <input
          type="text"
          name="room_name"
          placeholder="Room name"
          v-model="inviteData.roomName"
          autocomplete="0"
        />
      </div>
      <div class="input-container">
        <label for="schedule">Schedule At</label>
        <input
          type="datetime-local"
          name="schedule"
          v-model="inviteData.scheduledAt"
          autocomplete="0"
        />
      </div>
      <button type="submit">Create Invite</button>
    </form>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Invite extends Vue {
  inviteData = {
    players: [""],
    roomName: "",
    scheduledAt: new Date().toISOString().substr(0, 16)
  };
  addPlayer() {
    this.inviteData.players.push("");
  }
  removePlayer(i: number) {
    this.inviteData.players.splice(i, 1);
  }
  createInvite(event: HTMLFormElement) {
    event.preventDefault();
    console.log(this.inviteData);
  }
}
</script>

<style scoped>
section {
  padding: 20px;
  height: 100%;
  width: 100%;
}
form {
  display: flex;
  gap: 10px;
  /* width: 50%; */
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
}
.input-container {
  display: grid;
  color: #ffffff;
  gap: 5px;
}
label {
  font-size: 24px;
  width: 100%;
  position: relative;
}
label.required::after {
  content: "*";
  color: red;
  margin-left: 5px;
}
input {
  color: #ffffff;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid currentColor;
  height: 40px;
  width: 100%;
  font-size: 20px;
}
.player-selector {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #2c3e50;
  z-index: 1;
}
button {
  font-size: 1.7rem;
  outline: none;
  background-color: #4275a7;
  padding: 5px 10px;
  color: white;
  box-shadow: 0 4px 14px 2px #2c3e50;
  border-radius: 8px;
  transition: all 0.3s;
  border: none;
}
button:hover {
  box-shadow: 0 8px 18px 8px #2c3e50;
  transform: scale(1.03);
}
button:active {
  box-shadow: 0 1px 8px 1px #2c3e50;
  transform: scale(0.98);
}
.add-player,
.remove-player {
  float: right;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s;
}
.add-player:hover,
.remove-player:hover {
  background-color: #2c3e50;
  filter: brightness(1.5);
}
.add-player:before {
  content: "";
  position: absolute;
  width: 70%;
  height: 2px;
  background-color: green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.add-player:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 70%;
  background-color: green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.remove-player:before {
  content: "";
  position: absolute;
  width: 70%;
  height: 2px;
  background-color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s ease-in-out;
}
.appear-enter-from,
.appear-leave-to {
  z-index: 0;
  opacity: 0;
  transform: translateY(-100%);
}
</style>
