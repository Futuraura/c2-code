<template>
  <div class="wrapper">
    <div class="inner-box">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-self: stretch;
  max-width: 1540px;
  flex-direction: column;
  align-items: flex-start;

  .inner-box {
    border: 2px #fff solid;
    border-radius: 4px;
    display: flex;
    max-width: 1500px;
    box-sizing: border-box;
    padding: 40px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &::before {
    content: "exampleFunction();";
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: #0b0e14;
    font-family: "JetBrains Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-left: 16px;

    display: flex;
    padding: 2px 12px 0 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
