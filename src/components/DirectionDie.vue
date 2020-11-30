<template>
  <Die
    :sides="['Wild', 'SkateDice', 'FrontSide', 'BackSide', 'FrontSide', 'BackSide']"
    :selected-side-index="selectedSideIndex"
    :toggle-roll="toggleRoll">
  </Die>
</template>

<script>
import Die from './Die.vue';
import DieMixin from '../mixins/DieMixin';

export default {
  mixins: [DieMixin],
  components: {
    Die,
  },
};
</script>
