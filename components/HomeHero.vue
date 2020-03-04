<template>
  <section class="hero container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-812 col-xs-12">
          <h1>Africa Stable Coin Wallet, Buy, Sell, Trade, Staking.</h1>
          <p>
            Muna Wallet is the easiest way to store, send and receive stable
            coins across Africa. Stake your crypto and earn interest upto 12%
            per year.
          </p>
          <a
            href="https://docs.google.com/document/d/1fQQnasyRHcIZxyWJuHwkr_ZqGefiRmKOMFGdE_5i6_Y/edit?usp=sharing"
            class="hero__btn"
            >Read Whitepaper&nbsp;&nbsp;
          </a>
        </div>
        <!-- <div class="col-md-1 col-lg-1"></div> -->
        <div class="col-lg-6 col-sm-12 col-xs-12 img__holder">
          <img
            src="../assets/images/banner-img.svg"
            class="img-fluid hero--img"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.hero {
  padding: 13rem 0;
  background: #fff;
  height: 100vh;
  h1 {
    font-weight: bolder;
    font-size: 2.5rem;
    padding-bottom: 2rem;
    line-height: 1.5;
    color: #2b2b2b;
  }
  p {
    opacity: 0.8;
    padding-bottom: 2rem;
    line-height: 1.8;
    color: #2b2b2b;
  }
  .hero__btn {
    background: $primary-color;
    padding: 1.3rem 3.5rem;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
  .hero--img {
    animation-name: animate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}

//Animation
@keyframes animate {
  from {
    transform: translateY(-10px);
  }
  //   to {
  //     transform: translateY(10px);
  //   }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .hero {
    padding: 10rem 0;
    h1 {
      font-size: 2rem;
    }
    .img__holder {
      padding-top: 3rem;
    }
  }
}
</style>
