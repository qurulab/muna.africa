<template>
  <div class="wrapper">
    <HomeNavbar />
    <HomeHero />
    <HomeProcess />
    <HomeAbout />
    <HomeApp />
    <Footer />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeProcess from '~/components/HomeProcess.vue'
import HomeAbout from '~/components/HomeAbout.vue'
import HomeApp from '~/components/HomeApp.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HomeNavbar,
    HomeHero,
    HomeProcess,
    HomeAbout,
    HomeApp,
    Footer
  }
}
</script>

<style></style>
