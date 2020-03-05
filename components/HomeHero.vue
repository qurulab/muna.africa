<template>
  <section class="hero container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-812 col-xs-12">
          <h1>Africa Stable Coin Wallet, Buy, Sell, Trade, Staking.</h1>
          <div class="hero-text pb-5">
            <p>
              Buy and sell Crypto instantly with your bank account
            </p>
            <p>
              Secure P2P Fiat Crypto conversion wallet. Safer, cheaper, faster
              and simpler for Africans!
            </p>
            <p>
              Stake your crypto and earn up to 10% interest per year.
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1fQQnasyRHcIZxyWJuHwkr_ZqGefiRmKOMFGdE_5i6_Y/edit?usp=sharing"
            class="hero__btn"
            >Read Whitepaper&nbsp;&nbsp;
          </a>
        </div>
        <!-- <div class="col-md-1 col-lg-1"></div> -->
        <div class="col-lg-6 col-sm-12 col-xs-12 img__holder">
          <img
            src="../assets/images/banner2-img.svg"
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
  padding: 12rem 0;
  background: #fff;
  height: 100vh;
  h1 {
    font-weight: bolder;
    font-size: 2.6rem;
    padding-bottom: 1.5rem;
    line-height: 1.5;
    color: #2b2b2b;
  }
  p {
    opacity: 0.8;
    // padding-bottom: 2rem;
    // line-height: 1.8;
    color: #2b2b2b;
    font-size: 0.95rem;
    font-weight: normal;
  }
  .hero__btn {
    background: $primary-color;
    padding: 1.2rem 3.5rem;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    &:hover {
      background: #000639;
      transition: all ease-in-out 0.5s;
    }
  }
  // .hero--img {
  //   animation-name: animate;
  //   animation-duration: 3s;
  //   animation-iteration-count: infinite;
  //   animation-direction: alternate;
  // }
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
    text-align: center;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    .img__holder {
      padding-top: 3rem;
    }
  }
}
</style>
