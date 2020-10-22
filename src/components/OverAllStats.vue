<template>
  <section>
    <article></article>
    <article></article>
    <article></article>
  </section>
</template>

<style scoped>
section {
  margin: 10px;
  display: flex;
  gap: 10px;
  position: absolute;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
}
article {
  width: 13rem;
  height: 5.5rem;
  border-radius: 8px;
  background-color: chocolate;
}
</style>
