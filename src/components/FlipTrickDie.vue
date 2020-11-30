<template>
  <Die
    :sides="['Wild', 'SkateDice', 'Kickflip', 'Heelflip', 'Kickflip', 'Heelflip']"
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
