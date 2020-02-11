<template>
  <section class="process">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-12">
          <h2 class="text-center">You don't need to be an expert to begin</h2>
          <p class="text-center">
            Our process is very simple and you can begin in 3 easy steps
          </p>
          <div class="process__wrapper">
            <div class="process__card">
              <div class="card__border__img">
                <img
                  src="../assets/images/half-maze-gray.png"
                  class="border--img"
                  alt=""
                />
              </div>
              <!-- <img
                src="../assets/images/register.svg"
                class="img-fluid icons"
                alt="Register image"
              /> -->
              <h3>Create a free account</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto error laborum quae consequuntur corporis dolores
                aliquam.
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
              <!-- <img
                src="../assets/images/debit.svg"
                class="img-fluid icons"
                alt="Register image"
              /> -->
              <h3>Create a free account</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, facere ut. Laborum ea vero totam impedit ducimus fugit
                quasi ab?
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
              <!-- <img
                src="../assets/images/register.svg"
                class="img-fluid icons"
                alt="Register image"
              /> -->
              <h3>Create a free account</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                porro enim natus sequi alias iusto eaque quasi earum,
                perferendis
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
.process {
  padding: 5rem 0;
  background: #f4f8fc;
  position: relative;
  h2 {
    text-transform: capitalize;
    color: #000639;
    font-weight: bold;
  }
  p {
    color: #000639;
  }
  .process__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin-top: 4rem;
    .process__card {
      background: #fff;
      padding: 4rem 2rem;
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
        max-width: 50px;
        height: auto;
        padding-bottom: 0.5rem;
      }
      h3 {
        font-size: 1.4rem;
        padding: 0.5rem 0;
        font-weight: bold;
        color: #000639;
      }
      p {
        font-size: 0.85rem;
        // opacity: 0.7;
        line-height: 1.8;
        color: #000639;
      }
    }
  }
}
</style>
