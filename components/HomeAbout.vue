<template>
  <section class="about container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Why Muna?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            facere.
          </p>
        </div>
      </div>
      <div class="about__wrapper">
        <div class="about__card">
          <h4>Customer experience.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui alias
            debitis architecto necessitatibus. Beatae accusantium facere eum
            ipsum totam iusto recusandae ab temporibus architecto odio.
          </p>
        </div>
        <div class="about__card">
          <h4>Speed and Efficiency.</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            accusantium asperiores eaque vitae molestias obcaecati at beatae,
            earum incidunt velit veritatis corrupti illo dolorum eos.
          </p>
        </div>
        <div class="about__card">
          <h4>No hidden carges.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            distinctio! Nostrum nemo saepe ducimus tempora, eum totam facilis ea
            ut sapiente nihil sit omnis dolor.
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
