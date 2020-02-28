<template>
  <footer>
    <div class="container">
      <div class="footer__contents">
        <div class="footer__card">
          <h6>Products</h6>
          <ul>
            <li><nuxt-link to="/">Neutrino Stable coin</nuxt-link></li>
            <li><nuxt-link to="/">API</nuxt-link></li>
            <li><nuxt-link to="/">Stalking</nuxt-link></li>
          </ul>
        </div>
        <div class="footer__card">
          <h6>Legal</h6>
          <ul>
            <li><nuxt-link to="/">KYC</nuxt-link></li>
            <li><nuxt-link to="/">AML</nuxt-link></li>
            <li><nuxt-link to="/">Terms of usage</nuxt-link></li>
            <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
          </ul>
        </div>
        <div class="footer__card">
          <h6>Connect with us</h6>
          <ul>
            <li><nuxt-link to="/">Facebook</nuxt-link></li>
            <li><nuxt-link to="/">Twitter</nuxt-link></li>
            <li><nuxt-link to="/">Telegram</nuxt-link></li>
            <li><nuxt-link to="/">Instagram</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="row pt-5 footer__bottom">
        <div class="col-12">
          <p>
            Trading cryptocurrencies involves significant risk and can result in
            the loss of your invested capital. You should not invest more than
            you can afford to lose and should ensure that you fully understand
            the risks involved. Before trading, please take into consideration
            your level of experience, investment objectives, and seek
            independent financial advice if necessary. It is the responsibility
            of the Client to ascertain whether they are permitted to use Muna -
            Stable coin wallet on the legal requirements in their country of
            residence.
            <br />
            The information on this site is not directed at residents of the
            United States, Canada, Singapore, Japan, Australia, and New Zealand
            or any particular country or jurisdiction where such distribution or
            use would be contrary to local law or regulation. Made with love in
            Africa"
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  padding-top: 4rem;
  .footer__contents {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 30px;
    .footer__card {
      h6 {
        color: #403e54;
        font-weight: bold;
        padding-bottom: 1.2rem;
      }
      ul li a {
        color: #545454;
        font-size: 0.85rem;
        opacity: 0.95;
        line-height: 2.2;
      }
    }
  }
  .footer__bottom {
    p {
      font-size: 0.85rem;
      line-height: 2;
      color: #545454;
      opacity: 0.8;
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .footer__contents {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
    grid-gap: 10px;
    justify-items: center;
  }
}
</style>
