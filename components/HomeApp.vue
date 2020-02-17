<template>
  <section class="app">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12  app__container">
          <h3>
            Powered by Waves Platform.
          </h3>
          <p>
            Built exclusively on the Binance Chain for speed, affordability and
            ultra-UX.
          </p>
          <nuxt-link to="/" class="register__btn">Read Whitepaper</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app {
  padding: 4rem 0;
  .app__container {
    background: #000639;
    color: #fff;
    padding: 5rem 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 59px 51px -34px rgba(0, 6, 57, 0.2);
    h3 {
      padding-bottom: 0.3rem;
    }
    p {
      padding-bottom: 2rem;
      font-size: 0.9rem;
      opacity: 0.7;
    }
    .register__btn {
      background: transparent;
      padding: 1rem 3rem;
      border-radius: 3px;
      color: #fff;
      border: 1px solid #f4f4f4;
      text-decoration: none;
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
}
</style>
