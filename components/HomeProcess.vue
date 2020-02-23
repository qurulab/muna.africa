<template>
  <div class="process">
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row text-center">
            <div class="col-md-6">
              <button @click="buyer == buyer">Buyer</button>
              <hr />
            </div>
            <div class="col-md-6">
              <button @click="seller == seller">Seller</button>
              <hr />
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div id="buyer" v-if="buyer" class="row text-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <p class="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            pariatur libero tempore. Sit recusandae magnam ratione vel, repellat
            veritatis sint?
          </p>
          <div class="row pt-5">
            <div class="col-md-4">
              <img src="../assets/images/order.png" class="icons" alt="" />
              <h6>Step 1</h6>
              <h5>PLACE AN ORDER</h5>
              <p>You'll be auto-matched with a seller instantly</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/debit.svg" class="icons" alt="" />
              <h6>Step 2</h6>
              <h5>PAY DIRECTLY TO SELLER</h5>
              <p>The seller will confirm your payment</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/debit.svg" class="icons" alt="" />
              <h6>Step 3</h6>
              <h5>MUNA RELEASES THE ESCROWED USDT</h5>
              <p>
                It makes Muna P2P a safe and fast method to convert fiat to
                crypto
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>

      <div id="seller" v-if="seller" class="row text-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          SELLER
          <div class="row pt-5">
            <div class="col-md-4">
              <img src="../assets/images/debit.svg" class="icons" alt="" />
              <h6>Step 1</h6>
              <h5>PLACE AN ORDER</h5>
              <p>You'll be auto-matched with a seller instantly</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/debit.svg" class="icons" alt="" />
              <h6>Step 2</h6>
              <h5>PAY DIRECTLY TO SELLER</h5>
              <p>The seller will confirm your payment</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/debit.svg" class="icons" alt="" />
              <h6>Step 3</h6>
              <h5>MUNA RELEASES THE ESCROWED USDT</h5>
              <p>
                It makes Muna P2P a safe and fast method to convert fiat to
                crypto
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyer: true,
      seller: false
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  background: #f6f7ff;
  padding: 4rem 0;
  .icons {
    max-width: 60px;
    height: auto;
  }
  h6 {
    font-size: 0.8rem;
    color: #454545;
    background: #fff;
    padding: 0.4rem 1rem;
    font-weight: bold;
    width: 40%;
    margin: 1.3rem auto;
    border-radius: 2px;
  }
  h5 {
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.5rem 0;
  }
  p {
    font-size: 1rem;
    color: #545454;
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .process {
    h2 {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
}
</style>
