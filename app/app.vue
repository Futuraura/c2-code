<script>
import "~/assets/fonts.css";
import "~/assets/limits.css";
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100dvh;
  background: #0b0e14;
  color: #fff;
  display: flex;

  font-family: "JetBrains Mono Local";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-wrap-mode: nowrap;
}

#__nuxt {
  width: 100%;
  min-height: 100dvh;
  padding: 0;
  margin: 0;
}
</style>
