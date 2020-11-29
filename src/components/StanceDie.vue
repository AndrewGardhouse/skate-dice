<template>
  <Die
    :sides="['Wild', 'SkateDice', 'StanceSwitch', 'Regular', 'Fakie', 'Nollie']"
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
        'Regular',
        'Regular',
        'Fakie',
        'Fakie',
      ],
      standardMode: [
        'Wild',
        'SkateDice',
        'StanceSwitch',
        'Regular',
        'Fakie',
        'Nollie',
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
