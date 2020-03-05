<template>
  <div class="process">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="heading--text pb-4">How Muna P2P works</h4>
        </div>
      </div>
      <div class="row__divider">
        <h3
          ref="buyer"
          v-bin
          @click="toggleShowBuyer()"
          v-bind:class="{ present: present }"
          class="holder buyer__holder"
        >
          For Buyer
        </h3>
        <h3
          @click="toggleShowBuyer()"
          v-bind:class="{ present: !present }"
          class="holder seller__holder"
        >
          For Seller
        </h3>
      </div>
      <div id="buyer" v-if="showBuyerFlow" class="row text-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h4 class="pt-4">
            Muna P2P helps you convert your
            <strong>fiat to crypto</strong> instantly. Secure escrow hold funds
            for safekeeping of the transaction.
          </h4>
          <div class="row pt-5">
            <div class="col-md-4">
              <img src="../assets/images/order.png" class="icons" alt="" />
              <h6>Step 1</h6>
              <h5>PLACE AN ORDER</h5>
              <p>You’ll find a seller instantly</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/bag.png" class="icons" alt="" />
              <h6>Step 2</h6>
              <h5>PAY DIRECTLY TO SELLER</h5>
              <p>TThe seller will confirm your payment</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/wallet.svg" class="icons" alt="" />
              <h6>Step 3</h6>
              <h5>MUNA RELEASES THE ESCROWED CRYPTO</h5>
              <p>
                Transaction is fast and safely completed
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>

      <div id="seller" v-else class="row text-center">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h4 class="pt-4">
            Muna P2P helps you convert your
            <strong>crypto to fiat</strong> instantly. Secure escrow hold funds
            for safekeeping of the transaction.
          </h4>
          <div class="row pt-5">
            <div class="col-md-4">
              <img src="../assets/images/order.png" class="icons" alt="" />
              <h6>Step 1</h6>
              <h5>PLACE AN ORDER</h5>
              <p>You’ll find a buyer instantly</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/bag.png" class="icons" alt="" />
              <h6>Step 2</h6>
              <h5>CONFIRM RECEIVING THE PAYMENT</h5>
              <p>
                Muna will transfer the crypto to the buyer only after you
                acknowledge receiving your payment
              </p>
            </div>
            <div class="col-md-4">
              <img src="../assets/images/wallet.svg" class="icons" alt="" />
              <h6>Step 3</h6>
              <h5>MUNA RELEASES THE ESCROWED CRYPTO</h5>
              <p>
                Muna escrow will push crypto to wallet of buyer. Transactions
                are safe and fast.
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
      showBuyerFlow: true,
      active: true,
      present: true
    }
  },
  methods: {
    toggleShowBuyer() {
      // NOTE To Achilles: here I am using event.target which would tell you the element that was clicked and is calling this method. And since I added a ref called buyer on the button with the value of buyer, I am simply checking it the button that was clicked is the same as the button with the ref called buyer. If it is then the boolean showBuyerFlow remains true. But if its not it becomes false. Hope that makes sense. You can delete after reading it.
      if (event.target === this.$refs.buyer) {
        this.showBuyerFlow = true
        this.present = true
        return
      }
      this.showBuyerFlow = false

      this.present = false
    }
  }
}
</script>

<style lang="scss" scoped>
.process {
  background: #f7faff;
  // margin: 3rem 0;
  padding: 4rem 0;
  .heading--text {
    font-weight: bold;
    color: #454545;
    text-transform: uppercase;
  }
  h3 {
    padding-bottom: 1rem;
    font-size: 1.3rem;
  }
  h4 {
    color: #000;
    line-height: 1.7;
  }
  .row__divider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    margin: 0 auto;
    text-align: center;
  }
  .holder {
    cursor: pointer !important;
  }
  // .buyer__holder {
  //   border-bottom: 2px solid #57ac52;
  // }
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
  .present {
    border-bottom: 2px solid #57ac52;
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .process {
    padding: 7rem 0;
    h2 {
      font-size: 1.5rem;
      line-height: 1.5;
    }
    h3 {
      font-size: 1.1rem !important;
    }
    h4 {
      font-size: 1rem;
      padding-top: 3rem;
      line-height: 2;
    }
  }
}
</style>
