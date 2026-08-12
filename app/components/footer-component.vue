<template>
  <div class="footer-wrapper">
    <div class="footer">
      <p class="art">
        ⠀⠀⠀⣠⣶⣶⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣶⣶⣦⣄⠀⠀⠀<br />
        ⠀⠀⢰⣿⣿⠉⠉⠀⠀⠀⢀⣴⣶⣿⣿⣿⣶⣄⠀⠀⠀⢀⣤⣶⣿⣿⣿⣶⣄⠀⠀⠀⠀⠉⠙⣿⣿⠀⠀⠀<br />
        ⠀⠀⠘⣿⣿⠀⠀⠀⠀⠀⣾⣿⠋⠁⠀⠀⢻⣿⣧⠀⠀⣾⣿⡏⠀⠀⠈⢻⣿⣷⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀<br />
        ⠀⠀⢀⣿⣿⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⣼⣿⡿⠀⠀⠀⠀⠀⣿⣿⡀⠀⠀<br />
        ⣿⣿⣿⣿⣉⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⠏⠀⠀⠀⠀⠀⠀⣉⣿⣿⣿⣿<br />
        ⠀⠀⠈⣿⣿⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⢀⣴⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀<br />
        ⠀⠀⢰⣿⣿⠀⠀⠀⠀⠀⢿⣿⣆⡀⠀⢀⣼⣿⠏⠀⠀⢀⣴⣿⣟⣁⣀⣀⣀⡀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀<br />
        ⠀⠀⠸⣿⣿⣀⣀⠀⠀⠀⠈⠻⠿⢿⣿⡿⠿⠋⠀⠀⠀⠸⠿⠿⠿⠿⠿⠿⠿⠿⠀⠀⢀⣀⣠⣿⣿⠀⠀⠀<br />
        ⠀⠀⠀⠙⠿⠿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⠿⠟⠋⠀⠀⠀
      </p>
      <div class="footer-links">
        <div class="links-column">
          <p class="links-title">Legal stuff</p>
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
          <a href="/terms">Terms</a>
        </div>
        <div class="links-column">
          <p class="links-title">Project</p>
          <a href="/about">About</a>
          <a href="https://github.com/">Github</a>
        </div>
      </div>
    </div>
    <p class="copyright">
      Written by an idiot and a genius named
      <a href="https://itsmark.dev/">Markusha</a>
    </p>
  </div>
</template>

<style lang="scss">
.footer-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0 40px;
  flex-direction: column;

  border-top: 3px solid #fff;
  border-image: repeating-linear-gradient(
      90deg,
      #fff 0 40px,
      transparent 40px 70px
    )
    1;

  .footer {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 75px;
    padding: 30px 0;
    flex-direction: row;
    justify-content: center;

    .art {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      user-select: none;
    }

    .footer-links {
      display: flex;
      padding: 10px;
      align-items: flex-start;
      gap: 10px;
      width: 100%;

      .links-column {
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        .links-title {
          color: #fff;
          font-size: 24px;
          font-weight: 500;
          margin: 0;
        }

        a {
          color: #fff;
          font-size: 20px;
          font-weight: 400;
          text-decoration: none;
          padding-bottom: 2px;
          margin: 0;

          &:hover {
            padding-bottom: 0;
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }

  .copyright {
    opacity: 0.6;

    a {
      color: #fff;
      text-decoration: underline;

      &:hover {
        color: #c0d7ff;
      }
    }
  }
}
</style>
