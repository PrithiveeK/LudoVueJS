<template>
  <header>
    <div class="profile">
      <div class="icon">
        <div class="profile-icon"></div>
      </div>
      <span class="level"></span>
      <div class="user">
        <span class="name">Name</span>
        <span class="level-progress"></span>
      </div>
    </div>
    <div class="empty"></div>
    <div class="icon">
      <div class="bell-solid"></div>
    </div>
    <div class="icon">
      <div class="search-icon"></div>
    </div>
    <div class="icon" @click="$emit('settings')">
      <div class="gear"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: inherit;
  display: flex;
  height: 3rem;
  gap: 2px;
  border-bottom: 2px solid #ffffff70;
  position: fixed;
  top: 0;
  left: 0;
  color: #4275a7;
  background-color: #2c3e50;
  z-index: 100;
}
.empty {
  flex: 1;
}
.profile {
  width: 15rem;
  height: 100%;
  display: flex;
  position: relative;
}
.level {
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  bottom: 0;
  left: 2rem;
}
.user {
  display: grid;
  grid-template-rows: 1fr 5px;
  width: 100%;
  gap: 5px;
}
.name {
  justify-self: flex-start;
  font-size: 1.5rem;
  align-self: end;
}
.level-progress {
  width: 100%;
  height: 5px;
  background-color: gold;
}
.icon {
  width: 3rem;
  height: 100%;
  position: relative;
  transition: all 0.3s;
  pointer-events: all;
}
.icon:hover {
  transform: scale(1.2);
}
.icon:active {
  transform: scale(0.95);
}
.profile > .icon {
  float: left;
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
.bell-solid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 14px;
  height: 15px;
  border: solid 1px currentColor;
  background-color: currentColor;
  border-radius: 40% 40% 0 0;
}
.bell-solid:before {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
}
.bell-solid:after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: -3px;
  width: 18px;
  height: 0px;
  border-top: solid 1px currentColor;
  border-bottom: solid 1px;
}
.search-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -70%) rotate(-45deg);
  width: 20px;
  height: 20px;
  border: solid 3px currentColor;
  border-radius: 100%;
}
.search-icon:before {
  content: "";
  position: absolute;
  top: 102%;
  left: calc(50% - 1px);
  height: 10px;
  width: 2px;
  background-color: currentColor;
}
.gear {
  position: absolute;
  top: calc(50% - 0.6em);
  left: calc(50% - 0.6em);
  width: 1em;
  height: 1em;
  background: #2c3e50;
  border-radius: 50%;
  border: 4px solid currentColor;
}
.gear:before,
.gear:after {
  content: "+";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.7em;
}
.gear:after {
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
