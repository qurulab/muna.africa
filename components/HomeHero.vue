<template>
  <section class="hero container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Buy & Sell Bitcoin, Ethereum and more</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum
            odit ipsam distinctio ut facere, amet labore nulla, tempore
            quibusdam nam sequi quia explicabo soluta.
          </p>
          <nuxt-link to="/" class="hero__btn"
            >Get Started&nbsp;&nbsp;
          </nuxt-link>
        </div>
        <div class="col-md-1 col-lg-1"></div>
        <div class="col-md-5 img__holder">
          <img
            src="../assets/images/img2.svg"
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
.hero {
  padding: 16rem 0;
  background: #fff;
  height: 100vh;
  h1 {
    font-weight: bolder;
    font-size: 2.5rem;
    padding-bottom: 2rem;
    line-height: 1.5;
    color: #000639;
  }
  p {
    opacity: 0.8;
    padding-bottom: 2rem;
    line-height: 1.8;
    color: #000639;
  }
  .hero__btn {
    background: #000639;
    padding: 1.3rem 4.5rem;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    font-size: 0.9rem;
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
