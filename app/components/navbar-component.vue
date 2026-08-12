<script></script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="left">
        <a href="/" class="logo">{C2}</a>
      </div>
      <div class="right">
        <div class="links">
          <a href="/">home</a>
          <a href="/about">about</a>
        </div>
        <div class="buttons">
          <a href="/user/register" class="primary-button">Get started</a>
          <a href="/user/login" class="secondary-button">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  border-bottom: 3px solid #fff;
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
    max-width: var(--max-width);
    padding: 15px 0;

    .left {
      justify-self: flex-start;

      .logo {
        color: #fff;
        font-size: 36px;
        font-style: italic;
        font-weight: 800;
        line-height: 1;
        padding: 0;
        margin: 0;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .right {
      justify-self: flex-end;
      display: flex;
      gap: 40px;
      width: 100%;

      a {
        font-size: 20px;
        text-decoration: none;
      }

      .links {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        gap: 20px;

        a {
          color: #fff;
          padding-bottom: 2px;

          &::before {
            content: "/";
          }

          &:hover {
            padding-bottom: 0px;
            border-bottom: #fff solid 2px;
          }
        }
      }

      .buttons {
        width: min-content;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        gap: 20px;

        .primary-button {
          padding: 6px 18px;
          background: #fff;
        }

        .secondary-button {
          color: #fff;
          padding: 3px 15px;
          border: 3px solid #fff;
        }

        a {
          color: #000;
        }
      }
    }
  }
}
</style>
