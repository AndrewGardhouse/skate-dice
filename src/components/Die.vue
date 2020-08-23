<template>
  <div class="die">
  </div>
</template>

<script>
export default {
  props: {
    sides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.die {
  background: red;
  color: white;
  border-radius: 25px;
}
</style>
