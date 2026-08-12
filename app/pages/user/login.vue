<template>
  <div class="content-wrapper">
    <div class="login">
      <FramedSection box-name="loginForm();" class="form-wrapper">
        <div class="loginForm">
          <h1>Welcome back!</h1>
          <div class="inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/user/forgot">Forgot your password?</a>
          </div>
          <div class="buttons">
            <button type="button">Login</button>
            <a href="/user/register">Register</a>
          </div>
        </div>
      </FramedSection>

      <p class="art">
        ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⢀⠖⠢⡀⠀⠀⠀<br />
        ⠀⠀⠀⠀⠰⠊⠁⠀⠀⠀⠀⠀⠀⠈⠑⠢⣀⠀⠀⠀⠀⡞⠀⠘⠀⡆⠀⢠⠁⡠⠒⠢<br />
        ⠀⠀⣠⠂⠀⣠⣴⣶⡀⠀⠀⠀⠀⢠⣦⣄⠀⠣⡀⠀⠀⢡⠀⠀⡀⠇⠀⠇⠰⠀⢠⠊<br />
        ⠀⡰⠃⠀⠀⢿⣿⠿⠁⠀⠀⠀⠀⠈⠻⢿⠗⠀⠱⡀⠀⠈⢆⠀⠀⠂⠀⠈⠁⠀⡆⠀<br />
        ⠰⠁⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢡⠀⠄⠈⠄⠀⠀⠀⠀⠀⠀⠀⠀<br />
        ⢈⠀⢣⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡆⠘⢢⣀⡀⠀⣀⠀⠀⠀⠀⢠⠆⠀<br />
        ⢸⠀⠘⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠃⠸⠀⠀⠀⠀⠀⠐⠤⠤⠂⠁⠀⠀<br />
        ⠀⢧⡀⠙⢿⣷⣄⠀⠀⠀⠀⠀⠀⠀⢀⣼⡿⠃⢠⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
        ⠀⠈⢿⠀⠈⠻⣿⣷⣦⣄⣀⣀⣤⣾⡿⠋⠀⣠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
        ⠀⠀⠀⠑⢄⠀⠀⠀⠉⠙⠉⠉⠉⠁⠀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
        ⠀⠀⠀⠀⠀⠀⠒⠚⠲⠶⠶⠶⠾⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  padding: 140px 40px 80px 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  height: 100dvh;

  .login {
    display: flex;
    flex-direction: row;
    display: flex;
    max-width: 1500px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .form-wrapper {
      width: min-content;

      .loginForm {
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

            color: #939393;
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
          }
        }
      }
    }

    .art {
      color: #fff;
      font-size: 28px;
      font-weight: 500;
      user-select: none;
    }
  }
}
</style>
