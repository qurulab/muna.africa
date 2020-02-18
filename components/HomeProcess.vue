<template>
  <section class="process">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-12">
          <h2 class="text-center">You don't need to be an expert to begin</h2>
          <div class="process__wrapper">
            <div class="process__card">
              <div class="card__border__img">
                <img
                  src="../assets/images/half-maze-gray.png"
                  class="border--img"
                  alt=""
                />
              </div>
              <img
                src="../assets/images/register.svg"
                class="img-fluid icons"
                alt="Register image"
              />
              <h3>Create Account</h3>
              <p>
                Get started on our platform in minutes with our easy step by
                step, hassle-free sign up procedure.
              </p>
            </div>
            <div class="process__card">
              <div class="card__border__img">
                <img
                  src="../assets/images/half-maze-orange.png"
                  class="border--img"
                  alt=""
                />
              </div>
              <img
                src="../assets/images/wallet.svg"
                class="img-fluid icons"
                alt="Register image"
              />
              <h3>Send and Receive</h3>
              <p>
                Once your account is setup, you can deposit funds into your
                wallet and start trading. Your funds are safe and you have
                nothing to worry about.
              </p>
            </div>
            <div class="process__card">
              <div class="card__border__img">
                <img
                  src="../assets/images/half-maze-green.png"
                  class="border--img"
                  alt=""
                />
              </div>
              <img
                src="../assets/images/bag.png"
                class="img-fluid icons"
                alt="Register image"
              />
              <h3>Withdraw to Bank Account</h3>
              <p>
                Move your funds from and into your local bank account.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-1"></div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.process {
  margin-top: 5rem;
  padding: 5rem 0;
  background: #f4f8fc;
  position: relative;
  h2 {
    text-transform: capitalize;
    color: #403e54;
    font-weight: bold;
  }
  p {
    color: #545454;
  }
  .process__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin-top: 4rem;
    .process__card {
      background: #fff;
      padding: 3rem 2rem;
      border-radius: 4px;
      position: relative;
      .card__border__img {
        position: absolute;
        bottom: 0;
        right: 0;
        .border--img {
          max-width: 80px;
          height: auto;
        }
      }
      .icons {
        max-width: 40px;
        height: auto;
        padding-bottom: 0.8rem;
      }
      h3 {
        font-size: 1.2rem;
        padding: 0.5rem 0;
        font-weight: bold;
        color: #403e54;
      }
      p {
        font-size: 0.87rem;
        // opacity: 0.7;
        line-height: 1.8;
        color: #545454;
        padding-top: 0.5rem;
      }
    }
  }
}
</style>
