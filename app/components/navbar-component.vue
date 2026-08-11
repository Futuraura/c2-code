<script></script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="left">
        <p class="logo">{C2}</p>
      </div>
      <div class="right">
        <div class="links"></div>
        <div class="buttons"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 100%;
  border-bottom: 2px dashed #fff;
  border-image: repeating-linear-gradient(
      90deg,
      #fff 0 40px,
      transparent 40px 70px
    )
    1;
  position: absolute;
  top: 0;
  left: 0;
  background: #0b0e14;
  z-index: 10000;
  padding: 0 40px;

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: auto;
    max-width: 1500px;
    padding: 15px 0;

    .left {
      justify-self: flex-start;

      .logo {
        color: #fff;
        font-family: "JetBrains Mono", monospace;
        font-size: 36px;
        font-style: italic;
        font-weight: 900;
        line-height: 1;
        padding: 0;
        margin: 0;
      }
    }

    .right {
      justify-self: flex-end;
      display: flex;
      gap: 40px;
      width: 100%;

      .links {
        width: 100%;
      }

      .buttons {
        width: auto;
      }
    }
  }
}
</style>
