<template>
  <Die
    :sides="sides"
    :selected-side-index="selectedSideIndex"
    :toggle-roll="toggleRoll">
  </Die>
</template>

<script>
import { mapState } from 'vuex';
import Die from './Die.vue';

export default {
  components: {
    Die,
  },
  data() {
    return {
      easyModeFaces: [
        'Wild',
        'SkateDice',
        'OneEighty',
        'OneEighty',
        'OneEighty',
        'SkateDice',
      ],
      standardModeFaces: [
        'Wild',
        'SkateDice',
        'OneEighty',
        'ThreeSixty',
        'OneEighty',
        'ThreeSixty',
      ],
    };
  },
  computed: {
    ...mapState(['isEasyMode']),
    sides() {
      return this.isEasyMode ? this.easyModeFaces : this.standardModeFaces;
    },
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
