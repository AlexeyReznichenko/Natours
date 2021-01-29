<template>
  <section class="features">
    <div class="row">
      <div class="feature-box">
        <i class="feature-box__icon icon-basic-world"></i>
        <h3 class="heading-tertiary margin-bottom-small">Explore the world</h3>
        <p class="feature-box__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse!
        </p>
      </div>

      <div class="feature-box">
        <i class="feature-box__icon icon-basic-compass"></i>
        <h3 class="heading-tertiary margin-bottom-small">Meet nature</h3>
        <p class="feature-box__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse!
        </p>
      </div>

      <div class="feature-box">
        <i class="feature-box__icon icon-basic-map"></i>
        <h3 class="heading-tertiary margin-bottom-small">Find your way</h3>
        <p class="feature-box__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse!
        </p>
      </div>

      <div class="feature-box">
        <i class="feature-box__icon icon-basic-heart"></i>
        <h3 class="heading-tertiary margin-bottom-small">Live a healthier life</h3>
        <p class="feature-box__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat possimus illum corrupti optio veritatis error minima quidem ut sequi nostrum, esse!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .features {
    width: 100%;
    padding: 20rem 5rem;
    background-image: 
    linear-gradient(to right bottom, rgba($color-primary-light, .8), rgba($color-primary-dark, .8)),
     url(../../../assets/img/nat-4.jpg);
     background-size: cover;
     transform: skewY(-7deg);
     margin-top: -10rem;

     & > * {
      transform: skewY(7deg);
     }
     

     .row {
       width: 100%;
       display: grid;
       grid-template-columns: repeat(4, 18%);
       grid-column-gap: 7rem;
       justify-content: center;
     }
  }
</style>