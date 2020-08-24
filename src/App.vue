<template>
  <div id="app">
    <div class="title">
      <h1 class="title__sk8">SK8</h1>
      <h1 class="title__dice">DICE</h1>
    </div>
    <div class="dice">
      <component
        v-for="(die, index) in allDice"
        :key="`${die}-${index}`"
        :is="die"
        :selectedSideIndex="selectedSides[index]">
      </component>
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
import { random, shuffle } from 'lodash';

import DirectionDie from './components/DirectionDie.vue';
import SpinDegreeDie from './components/SpinDegreeDie.vue';
import FlipTrickDie from './components/FlipTrickDie.vue';
import StanceDie from './components/StanceDie.vue';

export default {
  name: 'App',
  components: {
    SpinDegreeDie,
    DirectionDie,
    FlipTrickDie,
    StanceDie,
  },
  data() {
    return {
      selectedSides: [0, 1, 1, 0],
      allDice: [
        StanceDie,
        DirectionDie,
        SpinDegreeDie,
        FlipTrickDie,
      ],
    };
  },
  methods: {
    rollDice() {
      this.selectedSides = [
        random(0, 5),
        random(0, 5),
        random(0, 5),
        random(0, 5),
      ];
      this.allDice = shuffle(this.allDice);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style";
</style>
