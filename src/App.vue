<template>
  <div id="app">
    <div class="title">
      <h1 class="title__sk8">SK8</h1>
      <h1 class="title__dice">DICE</h1>
    </div>
    <div class="dice">
      <Die :sides="[]"></Die>
      <Die :sides="[]"></Die>
      <Die :sides="[]"></Die>
      <Die :sides="[]"></Die>
    </div>
    <div class="tricklist">
      <h2 class="tricklist__title">Trick List</h2>
    </div>
    <div class="rolldice-button">
      <button type="button" name="button">Roll 'Em</button>
    </div>
  </div>
</template>

<script>
import Die from './components/Die.vue';

export default {
  name: 'App',
  components: {
    Die,
  },
};
</script>

<style lang="scss">
@import "./assets/style";
</style>
