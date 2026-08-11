<script setup lang="js">
const props = defineProps({
  boxName: { type: String, default: "idiotDevForgotTheName();" },
});
</script>

<template>
  <div class="wrapper" :style="{ '--before-content': `'${props.boxName}'` }">
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
  width: 100%;

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
    content: var(--before-content);
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: #0b0e14;
    font-family: "JetBrains Mono", monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-left: 16px;
    display: flex;
    padding: 2px 12px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
