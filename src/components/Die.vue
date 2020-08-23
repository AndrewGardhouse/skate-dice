<template>
  <div class="die">
    <WildFace></WildFace>
  </div>
</template>

<script>
// import SkateDiceFace from './faces/SkateDice.vue';
import WildFace from './faces/Wild.vue';

export default {
  props: {
    sides: {
      type: Array,
      required: true,
    },
  },
  components: {
    // SkateDiceFace,
    WildFace,
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
