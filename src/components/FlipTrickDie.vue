<template>
  <Die
    :sides="['Wild', 'SkateDice', 'Kickflip', 'Heelflip', 'Kickflip', 'Heelflip']"
    :selectedSideIndex="selectedSideIndex"></Die>
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
  },
};
</script>
