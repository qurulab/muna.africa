<template>
  <section class="about container-fluid">
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
          <h4>Safe and Secure</h4>
          <p>
            Muna systems are built on industry-standard with multisig escrow
            accounts to ensure that funds/assets are safe.
          </p>
        </div>
        <div class="about__card">
          <h4>Low fees</h4>
          <p>
            Fees are reasonable and fair in every way. Fees are flat
            irrespective of quantity or location.
          </p>
        </div>
        <div class="about__card">
          <h4>P2P</h4>
          <p>
            Transactions on the Muna Wallet are peer-to-peer without the
            interception of a financial institution.
          </p>
        </div>
        <div class="about__card">
          <h4>Africa Focused</h4>
          <p>
            Enabling Africans send and receive money within Africa and across.
            Africans in diapora can send money to family a home directly from
            their Muna Wallet.
          </p>
        </div>
        <div class="about__card">
          <h4>Stable coin</h4>
          <p>
            Muna supports stable coins pegged to African local currencies which
            are not open to crypto volatility. Value doesn’t drop.
          </p>
        </div>
        <div class="about__card">
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
    color: #000639;
    font-weight: bold;
  }
  p {
    color: #000639;
  }
  .about__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 2rem auto;
    // text-align: center;
    h4 {
      font-size: 1.3rem;
      color: #000639;
      padding-bottom: 1rem;
      font-weight: bold;
    }
    p {
      font-size: 0.95rem;
      color: #000639;
      opacity: 0.8;
    }
  }
}
</style>
