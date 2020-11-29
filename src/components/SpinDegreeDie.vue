<template>
  <Die
    :sides="['Wild', 'SkateDice', 'OneEighty', 'ThreeSixty', 'OneEighty', 'ThreeSixty']"
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
  data() {
    return {
      easyMode: [
        'Wild',
        'SkateDice',
        'OneEighty',
        'OneEighty',
        'OneEighty',
        'SkateDice',
      ],
      standardMode: [
        'Wild',
        'SkateDice',
        'OneEighty',
        'ThreeSixty',
        'OneEighty',
        'ThreeSixty',
      ],
    };
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
