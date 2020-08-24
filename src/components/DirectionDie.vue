<template>
  <Die
    :sides="['Wild', 'SkateDice', 'FrontSide', 'BackSide', 'FrontSide', 'BackSide']"
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
