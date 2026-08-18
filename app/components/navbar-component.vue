<script lang="ts" setup>
import { authClient } from "../lib/auth-client";

const { data: session, error } = await useAuthSession();

const user = computed(() => session.value?.data?.user ?? null);
const userId = computed(() => user.value?.id ?? "");
const userLabel = computed(
  () => user.value?.name || user.value?.email || "account",
);
const profileHref = computed(() =>
  userId.value ? `/user/${userId.value}` : "/user/login",
);

if (error.value !== null) {
  await authClient.signOut();
  await refreshNuxtData("session");
  console.log(error);
}

async function logout() {
  await authClient.signOut();
  await refreshNuxtData("session");
  await navigateTo("/user/login");
}
</script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="left">
        <a href="/" class="logo">{C2}</a>
      </div>
      <div class="right">
        <div v-if="user !== null" class="links">
          <a href="/dash">dash</a>
          <a :href="profileHref">profile</a>
        </div>
        <div v-else class="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </div>
        <div v-if="user === null" class="buttons">
          <a href="/user/register" class="primary-button">Get started</a>
          <a href="/user/login" class="secondary-button">Login</a>
        </div>
        <div v-else class="userAccount">
          <details>
            <summary class="account-trigger">{{ userLabel }}</summary>
            <div class="account-dropdown">
              <a href="/dash/settings">/settings</a>
              <a :href="profileHref">/profile</a>
              <button type="button" @click="logout">logout();</button>
            </div>
          </details>
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
      align-items: center;
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

      .userAccount {
        display: flex;
        justify-content: flex-end;
        width: min-content;

        details {
          position: relative;
        }

        .account-trigger {
          list-style: none;
          cursor: pointer;
          color: #fff;
          border: 3px solid #fff;
          padding: 3px 15px;
          font-size: 20px;
          text-transform: lowercase;
          min-width: 180px;
          text-align: center;

          &::-webkit-details-marker {
            display: none;
          }

          &::before {
            content: "{";
            margin-right: 6px;
          }

          &::after {
            content: "}";
            margin-left: 6px;
          }
        }

        .account-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 220px;
          background: #0b0e14;
          border: 3px solid #fff;
          padding: 12px;
          z-index: 10001;

          a,
          button {
            color: #fff;
            font-family: "JetBrains Mono Local";
            font-size: 18px;
            text-decoration: none;
            border: 0;
            background: transparent;
            text-align: left;
            cursor: pointer;
            padding: 6px 8px;
            line-height: 1.2;

            &:hover {
              background: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .navbar-wrapper {
    padding: 0 16px;

    .navbar {
      .right {
        gap: 16px;

        .links {
          gap: 12px;

          a {
            font-size: 16px;
          }
        }

        .buttons,
        .userAccount {
          .primary-button,
          .secondary-button,
          .account-trigger {
            font-size: 16px;
          }
        }

        .userAccount {
          .account-trigger {
            min-width: 140px;
          }

          .account-dropdown {
            width: 180px;

            a,
            button {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
