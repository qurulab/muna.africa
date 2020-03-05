<template>
  <nav class="container-fluid">
    <div class="container">
      <div
        class="navbar__contents d-flex justify-content-between align-items-center"
      >
        <div class="navbar__logo">
          <h4>
            <nuxt-link to="/" class="logo"
              ><img
                src="../assets/images/logo.svg"
                class="logo__img"
                alt="Logo image"
              />
              Muna Wallet</nuxt-link
            >
          </h4>
        </div>
        <ul class="nav__links d-flex justify-content-between pt-3">
          <li class="dropdown__container">
            <nuxt-link to="/">Learn</nuxt-link>
            <ul class="dropdown__menu">
              <li>
                <a href="https://en.wikipedia.org/wiki/Stablecoin"
                  >What is stable coin</a
                >
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1eyUnLZB1HE2uYx4UNyakaecW9FR9n-yJkTjZJ85MVPo/edit?usp=drivesdk"
                  >What is Neutrino</a
                >
              </li>
              <li>
                <a
                  href="https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-staking#how-to-deposit-assets"
                  >How staking works</a
                >
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="#features" class="nav-links">Features</nuxt-link>
          </li>
          <li>
            <a href="https://medium.com/auctionlance" target="_blank">Blog</a>
          </li>
          <li>
            <a
              href="https://t.me/munawallet"
              class="telegram--link"
              target="_blank"
              >Join Telegram Discussion</a
            >
          </li>
          <!-- <li><nuxt-link to="/" class="signin--link">Sign In</nuxt-link></li> -->
        </ul>
        <div @click.prevent="toggleNav()" class="navbar__toggler">
          <font-awesome-icon :icon="['fa', 'bars']" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      const navbarToggler = document.querySelector('.navbar__toggler')
      const nav = document.querySelector('.nav__links')
      const navItems = document.querySelector('.nav-links')
      navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('open__nav')
      })
      navItems.addEventListener('click', () => {
        nav.classList.remove('open__nav')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
nav {
  padding: 0.8rem 0;
  //   box-shadow: 3px 0 5px rgba(0, 0, 0, 0.15);
  position: fixed;
  background: #fff;
  z-index: 1000;
  .logo {
    font-weight: bold;
    color: #000;
    text-decoration: none;
    padding-top: 0.5rem;
  }
  .logo__img {
    max-width: 40px;
    height: auto;
  }
  ul {
    li a {
      text-decoration: none;
      margin: 0 0.9rem;
      color: $primary-color;
      font-weight: bold;
      opacity: 0.9;
      font-size: 0.9rem;
      // &:hover {
      //   color: #000639;
      // }
    }
    .telegram--link {
      border-radius: 4px;
      background: transparent;
      // color: #fff;
      padding: 1rem 2.3rem;
      font-weight: normal;
      border: 1px solid $primary-color;
      &:hover {
        background: #000639;
        transition: all ease-in-out 0.5s;
        color: #fff;
        border: none;
      }
    }
  }
  //Dropdown section
  .dropdown__container {
    position: relative;
    display: inline-block;
  }
  .dropdown__container:hover .dropdown__menu {
    display: block !important;
    transition: all ease-in-out 0.5s;
  }
  .dropdown__menu {
    // box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.13);
    min-width: 200px;
    position: absolute;
    z-index: 1000 !important;
    display: none;
    padding: 1rem 0;
    li a {
      font-weight: normal;
      display: block;
      font-size: 0.9rem;
      color: #2b2b2b;
      padding: 0.5rem;
      &:hover {
        color: $primary-color;
      }
    }
  }
  .navbar__toggler {
    display: none;
    cursor: pointer;
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 990px) {
  .nav__links {
    background: #000;
    position: absolute;
    top: 100%;
    padding: 4rem 2.5rem;
    left: 0;
    flex-direction: column;
    border-radius: 3px;
    display: none !important;
    transition: all ease-in 0.5;
    height: 100vh;
    width: 100%;
    li a {
      line-height: 4;
      color: #fff;
    }
  }
  .telegram--link {
    border: 1px solid #fff !important;
  }
  .open__nav {
    display: block !important;
    transition: all ease-in-out 0.5s;
  }
  .navbar__toggler {
    display: block !important;
    padding-right: 1rem;
  }
}

//MEDIA QUERIS FOR THE DROP DOWN MENU ON MOBILE
@media only screen and (max-width: 400px) {
  .dropdown__menu {
    position: static !important;
    width: 100% !important;
    li a {
      color: #fff !important;
    }
  }
}
</style>
