<template>
  <Die
    :sides="sides"
    :selected-side-index="selectedSideIndex"
    :toggle-roll="toggleRoll">
  </Die>
</template>

<script>
import Die from './Die.vue';
import EasyModeMixin from '../mixins/EasyModeMixin';
import DieMixin from '../mixins/DieMixin';

export default {
  mixins: [EasyModeMixin, DieMixin],
  components: {
    Die,
  },
  data() {
    return {
      easyModeFaces: [
        'Wild',
        'SkateDice',
        'Regular',
        'Regular',
        'Fakie',
        'Fakie',
      ],
      standardModeFaces: [
        'Wild',
        'SkateDice',
        'StanceSwitch',
        'Regular',
        'Fakie',
        'Nollie',
      ],
    };
  },
};
</script>
