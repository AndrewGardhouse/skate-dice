<template>
  <div class="die">
    <!-- <Heelflip></Heelflip> -->
  </div>
</template>

<script>
// import Fakie from './faces/Fakie.vue';
// import Nollie from './faces/Nollie.vue';
// import StanceSwitch from './faces/StanceSwitch.vue';
// import Regular from './faces/Regular.vue';
// import BackSide from './faces/Backside.vue';
// import FrontSide from './faces/FrontSide.vue';
// import Heelflip from './faces/Heelflip.vue';
// import Kickflip from './faces/Kickflip.vue';
// import ThreeSixty from './faces/ThreeSixty.vue';
// import OneEighty from './faces/OneEighty.vue';
// import SkateDiceFace from './faces/SkateDice.vue';
// import WildFace from './faces/Wild.vue';

export default {
  props: {
    sides: {
      type: Array,
      required: true,
    },
  },
  components: {
    // Fakie,
    // Nollie,
    // StanceSwitch,
    // Regular,
    // BackSide,
    // FrontSide,
    // Heelflip,
    // Kickflip,
    // ThreeSixty,
    // OneEighty,
    // SkateDiceFace,
    // WildFace,
  },
};
</script>

<style lang="scss">
.die {
  background: red;
  color: white;
  border-radius: 25px;
}
</style>
