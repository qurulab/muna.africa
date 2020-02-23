<template>
  <section id="features" class="about container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Why Muna?</h2>
          <p>
            See what makes Muna Wallet stand out
          </p>
        </div>
      </div>
      <div class="about__wrapper">
        <div class="about__card">
          <img src="../assets/images/lock.png" class="icons" />
          <h4>Safe and Secure</h4>
          <p>
            Muna systems are built on industry-standard with multi sign-in
            escrow accounts to ensure that funds/assets are safe.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/price.svg" class="icons" />
          <h4>Low fees</h4>
          <p>
            Fees are reasonable and fair in every way. Fees are flat
            irrespective of quantity or location.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/peer.png" class="icons" />
          <h4>P2P</h4>
          <p>
            Transactions on the Muna Wallet are peer-to-peer without the
            interception of a financial institution.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/map.svg" class="icons" />
          <h4>Africa Focused</h4>
          <p>
            Enabling Africans send and receive money within Africa and across.
            Africans in diaspora can send money to their families at home
            directly from their Muna Wallet.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/stable.png" class="icons" />
          <h4>Stable coin</h4>
          <p>
            Muna supports stable coins pegged to African local currencies which
            are not open to crypto volatility. Value doesn’t drop.
          </p>
        </div>
        <div class="about__card">
          <img src="../assets/images/support.png" class="icons" />
          <h4>Quality Support</h4>
          <p>
            24/7 support service. Send a mail. Place a call or join our telegram
            group.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  padding: 5rem 0;
  h2 {
    color: #403e54;
    font-weight: bold;
  }
  p {
    color: #545454;
  }
  .about__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    margin: 2rem auto;
    text-align: center;
    .about__card {
      h4 {
        font-size: 1.3rem;
        color: #403e54;
        padding-bottom: 0.7rem;
        font-weight: bold;
      }
      p {
        font-size: 0.93rem;
        color: #545454;
        opacity: 0.9;
        line-height: 1.7;
      }
      .icons {
        max-width: 40px;
        height: auto;
        padding-bottom: 1.5rem;
      }
    }
  }
}
</style>
