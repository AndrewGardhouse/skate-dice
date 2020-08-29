<template>
  <Die
    :sides="['Wild', 'SkateDice', 'Kickflip', 'Heelflip', 'Kickflip', 'Heelflip']"
    :selected-side-index="selectedSideIndex"
    :toggle-roll="toggleRoll">
  </Die>
</template>

<script>
import Die from './Die.vue';

export default {
  components: {
    Die,
  },
  props: {
    selectedSideIndex: {
      type: Number,
      required: true,
    },
    toggleRoll: {
      type: Boolean,
    },
  },
};
</script>
