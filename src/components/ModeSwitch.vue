<template>
  <div class="mode">
    <div
      class="mode__switch"
      :class="{ 'mode__switch--is-easy-mode': isEasyMode }"
      @click="toggleEasyMode">
      <div class="mode__switch-button"></div>
    </div>
    <div class="mode__label">WARM-UP MODE</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['isEasyMode']),
  },
  methods: {
    ...mapMutations(['toggleEasyMode']),
  },
};
</script>

<style lang="scss" scoped>
$switch-button-height: 1.5em;
$switch-button-color: red;
$switch-button-border-thickness: 2px;
$switch-is-rounded: true;
$button-side-length: calc(
  #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
);

.mode {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5em;
    margin-left: auto;
    margin-right: auto;
}

.mode__switch, .mode__switch-button {
    transition: all 0.2s ease-in-out;
}

.mode__switch {
    height: $switch-button-height;
    width: calc(#{$switch-button-height} * 2);
    border: $switch-button-border-thickness solid $switch-button-color;
    box-shadow: inset 0px 0px $switch-button-border-thickness 0px
      rgba(0, 0, 0, 0.33);
    border-radius: if($switch-is-rounded, $switch-button-height, 0);
    box-shadow: none;
    cursor: pointer;
}

.mode__switch-button {
    height: $button-side-length;
    width: $button-side-length;
    border: $switch-button-border-thickness solid $switch-button-color;
    border-radius: if($switch-is-rounded, $button-side-length, 0);
    background: $switch-button-color;
}

.mode__switch--is-easy-mode {
    background-color: $switch-button-color;
    .mode__switch-button {
        background: white;
        transform: translateX(
          calc(#{$button-side-length} + (2 *#{$switch-button-border-thickness}))
        );
    }
}

.mode__label {
    margin-left: 10px;
}
</style>
