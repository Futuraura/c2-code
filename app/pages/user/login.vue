<template>
  <div class="content-wrapper">
    <div class="login">
      <FramedSection box-name="loginForm();" class="form-wrapper">
        <AccountForm :external-links="true" mode="login" />
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
