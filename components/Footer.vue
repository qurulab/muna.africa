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
            <li><nuxt-link to="/">KYC</nuxt-link></li>
            <li><nuxt-link to="/">AML</nuxt-link></li>
            <li><nuxt-link to="/">Terms of usage</nuxt-link></li>
            <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="row pt-5 footer__bottom">
        <div class="col-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            voluptates ratione ullam quod fugiat quas nihil eligendi repudiandae
            assumenda non commodi quisquam ducimus voluptate facilis ad
            explicabo maxime cupiditate sint, alias perferendis libero, ab
            tempore eveniet distinctio. Magni eius veritatis voluptatem, tenetur
            quibusdam excepturi doloribus quia eveniet maiores veniam saepe
            ratione delectus, laudantium expedita odio! Perferendis fuga,
            adipisci odio natus iusto nobis! Similique illo eveniet tempore
            officiis est ab voluptatum fuga, labore autem, qui quasi nemo
            reiciendis cupiditate quis? Ipsam rerum vitae earum quisquam dolores
            voluptatem aperiam praesentium saepe consequatur, ea qui odit nam
            sed repudiandae illo. Pariatur, maiores accusantium!
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
