<template>
  <header>
    <div class="container__header">
      <h1>Rave</h1>
      <h1>Index</h1>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.container__header {
  font-family: Danfo;
  font-size: 10vmin;
  justify-content: space-between;
  display: flex;
  width: 100%;

  h1 {
    font-family: inherit;
    font-variation-settings: "ELSH" 50;
  }
}
</style>
