<template>
  <div id="app">
    <div class="title">
      <h1 class="title__sk8">SK8</h1>
      <h1 class="title__dice">DICE</h1>
    </div>
    <div class="dice">
      <Die
        :sides="['Wild', 'SkateDice', 'StanceSwitch', 'Regular', 'Fakie', 'Nollie']"
        :selectedSideIndex="dieOneIndex"></Die>
      <Die
        :sides="['Wild', 'SkateDice', 'FrontSide', 'BackSide', 'FrontSide', 'BackSide']"
        :selectedSideIndex="dieTwoIndex"></Die>
      <Die
        :sides="['Wild', 'SkateDice', 'OneEighty', 'ThreeSixty', 'OneEighty', 'ThreeSixty']"
        :selectedSideIndex="dieThreeIndex"></Die>
      <Die
        :sides="['Wild', 'SkateDice', 'Kickflip', 'Heelflip', 'Kickflip', 'Heelflip']"
        :selectedSideIndex="dieFourIndex"></Die>
    </div>
    <div class="rolldice">
      <button
        type="button"
        name="button"
        @click="rollDice"
        class="rolldice__button">ROLL 'EM</button>
    </div>
  </div>
</template>

<script>
import { random } from 'lodash';
import Die from './components/Die.vue';

export default {
  name: 'App',
  components: {
    Die,
  },
  data() {
    return {
      dieOneIndex: 1,
      dieTwoIndex: 0,
      dieThreeIndex: 0,
      dieFourIndex: 1,
    };
  },
  methods: {
    rollDice() {
      this.dieOneIndex = random(0, 5);
      this.dieTwoIndex = random(0, 5);
      this.dieThreeIndex = random(0, 5);
      this.dieFourIndex = random(0, 5);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style";
</style>
