<template>
  <div class="content-wrapper">
    <FramedSection box-name="welcomeBanner();">
      <div class="welcomeBanner">
        <div class="left">
          <h1>Learn to <em>speak</em> code like you're a native</h1>
          <div class="buttons">
            <a href="/user/register" class="primary-button">Get started</a>
            <a href="/user/login" class="secondary-button">Login</a>
          </div>
        </div>
        <div class="right">
          <p class="art">
            ⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⣀⡀⠈⠻⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣀⣀⠤⠤⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⢰⠟⠀⠀⠀⠈⢷⣄⠀⠀⠀⠀⠀⢿⡛⠷⠶⠶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠶⠶⠛⠉⠉⠀⠀⠀⠀⢰⠀⠀⠀<br />
            ⠀⠀⠀⠀⢠⡟⠁⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠈⢿⡄⠀⠀⠈⠙⢷⣄⠀⠀⠀⠀⠀⢀⣤⠞⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀<br />
            ⠀⠀⠀⠀⣾⠁⠀⠀⢀⣀⣠⡶⠶⠒⠒⠒⠒⠒⢶⣼⡇⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀<br />
            ⠀⠀⠀⢐⡟⠀⠀⢲⣎⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠛⠅⠾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀<br />
            ⠀⠀⠀⢸⠃⠀⠀⠀⠙⢷⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀<br />
            ⠀⠀⠀⣾⠄⠀⠀⠀⠀⠀⠙⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀<br />
            ⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠂⠀⠀⠀⠀<br />
            ⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⠀⣀⠀<br />
            ⠀⠀⠀⠸⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠖⠒⠆⠀⠀⠀⠀⠀⠀⢠⣴⠖⠒⠒⠲⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣟⠀⠀⣰⡞⠋⠈<br />
            ⠀⠀⠀⠀⠈⠛⠶⠀⠀⠀⠀⠀⢀⠞⠋⣴⣾⣿⣆⠀⠀⠀⠀⠀⠀⣴⣷⣶⡀⠀⠀⠀⠙⣷⡀⠀⠀⠀⠀⠀⢀⣴⠿⠃⠀⠘⠋⠀⠀⠀<br />
            ⠀⠀⢀⣀⣶⣶⣀⠀⠀⠀⠀⠀⣿⠁⢰⣿⣿⣿⣿⠀⠀⠀⠀⠀⣸⣿⣿⣿⡇⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠈⠀⢀⣶⡿⣿⣶⣆⡀⠀<br />
            ⠀⣴⠟⠍⠉⣉⡽⠷⠶⠂⠀⠐⡇⠀⢨⣿⣿⣿⡿⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠉⠓⠛⢷⡄⠀⠀⠉⣿⡄<br />
            ⢸⡏⡀⡜⠅⣿⠀⠀⠀⣤⠀⢀⣀⠀⠐⢿⣿⣿⠇⠰⠆⠀⠀⠀⠹⣿⣿⣿⠇⠀⠀⠀⠀⠰⠏⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⡅⠴⢸⣿<br />
            ⢸⡇⠀⢀⠀⠹⣧⣀⠐⣷⠈⠻⢵⠶⠂⠀⠀⠀⢦⣤⠷⢦⠤⣶⡀⠉⠉⠁⠀⠀⠀⠀⠀⢠⣤⡀⣀⣄⠄⠀⠀⢀⣸⠇⠀⡠⠕⠀⣼⡏<br />
            ⠘⢿⣄⠀⠉⠁⠀⢙⡧⠺⣆⡀⠀⠀⠀⠀⠀⠀⠀⠹⣇⠀⠀⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠈⠛⠋⠀⠀⣠⡤⠾⠋⠀⠀⠀⠀⢠⣾⠀<br />
            ⠀⠀⠻⣦⡀⠀⠀⢸⡇⠀⠈⠳⢦⣀⡀⠀⠀⠀⠀⠀⠹⣦⡀⢀⣿⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⠇⠀⠀⠀⠸⣧⠀⠀⠀⠀⢀⣴⠿⠁⠀<br />
            ⠀⠀⠀⠘⣷⣄⠀⢸⣇⣠⣤⣀⠀⠙⣛⣛⠒⠀⠀⠀⠀⠀⠛⠚⠃⠀⠀⠀⠀⠀⠀⠐⢒⣶⠙⠳⣦⣄⡀⠀⠙⠁⠀⢀⣴⠟⠋⠀⠀⠀<br />
            ⠀⠀⠀⠀⠈⢻⣦⡈⠉⠉⢸⡟⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠈⠁⠀⠀⣠⣶⠟⠁⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠉⠻⣦⡀⠈⠻⣦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⠟⠀⠀⠀⠀⠀⠀⣨⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣄⠀⠀⢈⣷⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢷⡀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠒⠒⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          </p>
        </div>
      </div>
    </FramedSection>
    <FramedSection box-name='const fasterLearning = "Repetition";'>
      <div class="fasterLearning">
        <div class="left">
          <p class="art">
            ⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⢀⣀⣀⣀⣀⣾⣿⣇⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⣾⣿⠇⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠻⣿⣿⣦⡀⣼⣿⡟⠀⠀⠀⠀⠀⠀⣾⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⢀⣀⣤⣾⣿⡿⣿⣿⣦⡀⠀⠀⠀⢠⣿⣿⠉⢿⣿⣧⠀⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⢿⡿⠿⠛⠁⠀⠈⠻⢿⠿⠀⠀⢀⣿⣿⠃⠀⠈⣿⣿⣆⠀⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡿⠉⠉⠉⠉⠉⠹⣿⣿⠀⠀⠀⠀<br />
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠁⠀⠀⠀⠀⠀⠀⠙⠋⠀⠀⠀⠀
          </p>
        </div>
        <div class="right">
          <h2>
            Has anyone ever told you that repetition is the key to learning?
          </h2>
          <p>
            In Russian there is a saying “Повторение мать учения!”, meaning
            “repetition is the mother of learning.”<br />
            <br />
            Learning a programming language is similar to learning a human
            language. Understanding is not enough. You have to use it. <br />
            <br />
            You learn programming by programming. <br />
            <br />
            Reading a book or watching a tutorial once will not make you good at
            a language. You need to write code, bugs and fixes again and again.
            <br />
            <br />
            That is why this platform exists. You start with small tasks and
            slowly write your way up until you can write programs in a language
            in the wild.
          </p>
        </div>
      </div>
    </FramedSection>
    <FramedSection
      box-name="genericLesson(python.foundations.print);"
    ></FramedSection>
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

  .welcomeBanner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    align-self: stretch;

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 40px;

      h1 {
        font-size: 48px;
        font-weight: 700;
        text-wrap-mode: wrap;
        margin: 0;
      }

      .buttons {
        user-select: none;
        width: min-content;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 40px;

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
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: #000;
          text-decoration: none;
        }
      }
    }

    .right {
      width: 100%;

      .art {
        padding: 0;
        margin: 0;
        color: #fff;
        font-size: 19px;
        font-weight: lighter;
        line-height: 1.4;
        user-select: none;
      }
    }
  }

  .fasterLearning {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    align-self: stretch;

    .left {
      width: min-content;

      .art {
        color: #fff;
        font-size: 32px;
        font-weight: 100;
        font-family: monospace;
        margin: 0;
        user-select: none;
      }
    }

    .right {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 40px;

      h2 {
        text-wrap-mode: wrap;
        margin: 0;

        color: #fff;
        font-size: 32px;
        font-weight: 700;
      }

      p {
        text-wrap-mode: wrap;
        margin: 0;

        color: #fff;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>
