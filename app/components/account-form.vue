<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    mode: "login" | "register" | "forgot";
    externalLinks?: boolean;
  }>(),
  {
    externalLinks: true,
  },
);
</script>

<template>
  <div v-if="props.mode === 'login'" class="form">
    <h1>Welcome back!</h1>
    <div class="inputs">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a v-if="props.externalLinks" href="/user/forgot"
        >Forgot your password? ↘</a
      >
    </div>
    <div class="buttons">
      <button type="button">Login</button>
      <a v-if="props.externalLinks" href="/user/register">Register ↘</a>
    </div>
  </div>

  <div v-if="props.mode === 'forgot'" class="form">
    <h1>CTRL + F</h1>
    <div class="inputs">
      <input type="email" placeholder="Email" />
    </div>
    <div class="buttons">
      <button type="button">Submit</button>
      <a v-if="props.externalLinks" href="/user/login">Login ↘</a>
    </div>
  </div>

  <div v-if="props.mode === 'register'" class="loginForm">
    <h1>Hello, world</h1>
    <div class="inputs">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </div>
    <div class="buttons">
      <button type="button">Register</button>
      <a v-if="props.externalLinks" href="/user/login">Login ↘</a>
    </div>
  </div>
</template>

<style lang="scss">
.form {
  width: 100%;
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin: 0;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    input {
      display: flex;
      width: 400px;
      padding: 5px 10px;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
      border: 2px solid #fff;
      background: transparent;

      color: #fff;
      font-family: "JetBrains Mono Local";
      font-size: 20px;
      font-weight: 400;
    }

    a {
      color: #939393;
      font-family: "JetBrains Mono Local";
      font-size: 20px;
      font-weight: 400;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      height: 26px;
      line-height: 26px;

      .iconify {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        aspect-ratio: 1/1;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      display: flex;
      padding: 6px 18px;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background: #fff;
      border: 0;

      color: #000;
      font-family: "JetBrains Mono Local";
      font-size: 20px;
      font-weight: 400;
    }

    a {
      display: flex;
      padding: 3px 15px;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border: 3px solid #fff;
      text-decoration: none;

      color: #fff;
      font-size: 20px;
      font-weight: 400;

      display: inline-flex;
      align-items: center;

      .iconify {
        width: 100%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        aspect-ratio: 1/1;
      }
    }
  }
}
</style>
