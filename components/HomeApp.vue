<template>
  <section class="app">
    <div class="app__container">
      <h2>Join The Exclusive Waitlist</h2>
      <p>
        Join community of user on the waiting list and do more with your crypto
        once Muna Wallet is launched soon. Don’t get left behind!
      </p>
      <nuxt-link to="/waitlist" class="register__btn"
        >Join The Waitlist</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.app {
  padding: 4rem 0;
  margin: 0 1rem;
  .app__container {
    background: linear-gradient(to left, $primary-color, #5ccf55);
    color: #fff;
    box-shadow: 0 59px 51px -34px rgba(0, 6, 57, 0.2);
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: 4.5rem 2rem;
    border-radius: 7px;
    h2 {
      padding-bottom: 1.5rem;
    }
  }
  p {
    padding-bottom: 2rem;
    font-size: 0.9rem;
    opacity: 0.85;
  }
  .register__btn {
    background: #fff;
    padding: 1.3rem 4rem;
    border-radius: 4px;
    color: #545454;
    border: 1px solid #f4f4f4;
    text-decoration: none;
    font-size: 1rem;
    // opacity: 0.9;
    font-weight: bold;
    &:hover {
      background: #49ad01;
      transition: all ease-in-out 0.5s;
      color: #fff !important;
      border: none !important;
      font-weight: normal;
    }
  }
}
</style>
