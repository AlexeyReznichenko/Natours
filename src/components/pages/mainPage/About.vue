<template>
  <section class="about">
    <div class="text-center">
      <h2 class="heading-secondary margin-bottom-big">Exciting tours for adventurous people</h2>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="heading-tertiary margin-bottom-small">You`re going to fall in love with nature</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse,
          molestias quasi, aspernatur necessitatibus! Repellendus consectetur tempore tempora libero!
        </p>

        <h3 class="heading-tertiary margin-bottom-small">Live adventures like you never have before</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse,
          molestias quasi, aspernatur necessitatibus! Repellendus consectetur tempore tempora libero!
        </p>

        <a href="#" class="btn-text">Learn more &rarr;</a>
      </div>
      <div class="col">
        <div class="composition">
          <img src="../../../assets/img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
          <img src="../../../assets/img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
          <img src="../../../assets/img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .about {
    background-color: $color-grey-light;
    color: $color-grey-dark;
    padding: 25rem 15rem;
    margin-top: -20vh;

    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4.5rem;
    }
  }
</style>