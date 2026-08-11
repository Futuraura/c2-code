<script lang="js"></script>

<template>
  <div>
    <navbar-component />
    <slot />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #0b0e14;
  color: #fff;
  display: flex;
}

#__nuxt {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  place-self: stretch stretch;
}
</style>
