<template>
  <i class="sphere" />
</template>

<style scoped>
.sphere {
  position: relative;
  width: 0;
  height: 0;
  font-size: 0.7em;
  z-index: 100;
  transition: all 0.3s;
}
.sphere:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  border-style: solid;
  border-color: currentColor transparent transparent transparent;
  border-width: 6em 2.5em 0 2.5em;
  z-index: -1;
  filter: drop-shadow(0 3em 10px black) contrast(0.5);
}
.sphere:before {
  position: absolute;
  content: "";
  width: 5em;
  height: 5em;
  border-radius: 100%;
  background-color: currentColor;
  box-shadow: inset 0 -2px 1.3em 1px black;
  bottom: 5em;
  left: -2.5em;
}
</style>
