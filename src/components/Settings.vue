<template>
  <section>
    <h2>Settings</h2>
    <div class="options">
      <div class="sound">
        <h4>Sound</h4>
        <span
          class="toggle"
          @click="$event.target.classList.toggle('toggled')"
        />
      </div>
      <div class="vibration">
        <h4>Vibration</h4>
        <span
          class="toggle"
          @click="$event.target.classList.toggle('toggled')"
        />
      </div>
      <div class="board-skin">Board Skin</div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 20px 0;
  font-size: 40px;
}
.options {
  display: grid;
  margin: 20px;
  gap: 20px;
}
.sound,
.vibration {
  display: flex;
}
h4 {
  flex: 1;
}
.toggle {
  display: block;
  width: 40px;
  height: 20px;
  background-color: #4275a7;
  border-radius: 10px;
  position: relative;
}
.toggle:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  transition: all 0.3s;
}
.toggled {
  filter: brightness(1.5);
}
.toggled:after {
  transform: translateX(100%);
}
</style>
