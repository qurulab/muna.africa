<template>
  <nav class="container-fluid">
    <div class="container">
      <div
        class="navbar__contents d-flex justify-content-between align-items-center"
      >
        <div class="navbar__logo">
          <h5><nuxt-link to="/" class="logo">Muna</nuxt-link></h5>
        </div>
        <ul class="nav__links d-flex justify-content-between pt-3">
          <li><nuxt-link to="/">Our Features</nuxt-link></li>
          <li><nuxt-link to="/">Blog</nuxt-link></li>
          <li><nuxt-link to="/">Our Team</nuxt-link></li>
          <li><nuxt-link to="/">Get Started</nuxt-link></li>
          <li><nuxt-link to="/">Contact Us</nuxt-link></li>
          <li><nuxt-link to="/" class="signin--link">Sign In</nuxt-link></li>
        </ul>
        <div @click.once.prevent="toggleNav()" class="navbar__toggler">
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
      navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('open__nav')
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
  ul {
    li a {
      text-decoration: none;
      margin: 0 0.9rem;
      color: $primary-color;
      font-weight: bold;
      opacity: 0.9;
      font-size: 0.9rem;
    }
    .signin--link {
      border-radius: 3px;
      background: $primary-color;
      color: #fff;
      padding: 1rem 2.3rem;
      font-weight: normal;
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
    background: #333;
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
    }
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
</style>
