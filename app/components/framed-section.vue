<template>
  <div class="wrapper">
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  border: 3px #fff solid;

  &::before {
    content: "exampleFunction();";
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: #0b0e14;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 2px 12px 4px 12px;
    margin-left: 32px;
  }
}
</style>
