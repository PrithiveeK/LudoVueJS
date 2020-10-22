<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #2c3e50;
  background-image: radial-gradient(circle, #4275a7, #2c3e50 60%);
  transition: all 0.3s;
}
.noscroll {
  scrollbar-width: none;
}
.noscroll::-webkit-scrollbar {
  display: none;
}
</style>
