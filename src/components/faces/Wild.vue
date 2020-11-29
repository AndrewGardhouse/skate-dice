<template lang="html" functional>
  <div class="die__face">
    <div class="board board--top">
      <div class="board__bolts board__bolts--left">
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
      </div>
      <div class="board__bolts board__bolts--right">
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
      </div>
    </div>
    <div class="board board--bottom">
      <div class="board__bolts board__bolts--left">
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
      </div>
      <div class="board__bolts board__bolts--right">
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
        <div class="board__bolt"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.die__face {
    width: 100%;
    position: relative;
    height: 100%;
}

.board {
    position: absolute;
    border: 2px solid white;
    background-color: red;
    height: 35px;
    border-radius: 25px;
    width: 97%;
    top: calc(10.5vh - (35px / 2));
    display: flex;
    justify-content: space-between;
}

.board--top {
   transform: rotate(45deg);
   z-index: 1;
}

.board--bottom {
   transform: rotate(-45deg);
}

.board__bolts {
    height: 20px;
    width: 20px;
    margin-top: auto;
    margin-bottom: auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
}

.board__bolts--left {
    margin-left: 25px;
}

.board__bolts--right {
    margin-right: 25px;
}

.board__bolt {
    border-radius: 100%;
    background-color: white;
    height: 4px;
    width: 4px;
    margin: auto;
}
</style>
