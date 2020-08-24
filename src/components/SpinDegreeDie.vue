<template>
  <Die
    :sides="['Wild', 'SkateDice', 'OneEighty', 'ThreeSixty', 'OneEighty', 'ThreeSixty']"
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
