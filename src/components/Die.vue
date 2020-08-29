<template>
  <div
    class="die"
    :class="{ 'die--roll': toggleRoll }">
    <component
      :is="selectedSide">
    </component>
  </div>
</template>

<script>
import Fakie from './faces/Fakie.vue';
import Nollie from './faces/Nollie.vue';
import StanceSwitch from './faces/StanceSwitch.vue';
import Regular from './faces/Regular.vue';
import BackSide from './faces/Backside.vue';
import FrontSide from './faces/FrontSide.vue';
import Heelflip from './faces/Heelflip.vue';
import Kickflip from './faces/Kickflip.vue';
import ThreeSixty from './faces/ThreeSixty.vue';
import OneEighty from './faces/OneEighty.vue';
import SkateDice from './faces/SkateDice.vue';
import Wild from './faces/Wild.vue';

export default {
  props: {
    sides: {
      type: Array,
      required: true,
    },
    selectedSideIndex: {
      type: Number,
    },
    toggleRoll: {
      type: Boolean,
    },
  },
  components: {
    Fakie,
    Nollie,
    StanceSwitch,
    Regular,
    BackSide,
    FrontSide,
    Heelflip,
    Kickflip,
    ThreeSixty,
    OneEighty,
    SkateDice,
    Wild,
  },
  computed: {
    selectedSide() {
      return this.sides[this.selectedSideIndex];
    },
  },
};
</script>

<style lang="scss">
.die {
  background: red;
  color: white;
  border-radius: 25px;
  transform-origin: center center;
  transition: transform .5s;
}

.die--roll {
  transform: rotate(360deg);
}
</style>
