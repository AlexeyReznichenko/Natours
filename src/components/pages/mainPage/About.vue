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
          <img srcset="../../../assets/img/nat-1.jpg 300w, ../../../assets/img/nat-1-large.jpg 1000w"
               sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw' 
               alt="Photo 1" class="composition__photo composition__photo--p1"
               src="../../../assets/img/nat-1-large.jpg">

          <img srcset="../../../assets/img/nat-2.jpg 300w, ../../../assets/img/nat-2-large.jpg 1000w"
               sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw' 
               alt="Photo 2" class="composition__photo composition__photo--p2"
               src="../../../assets/img/nat-2-large.jpg">

          <img srcset="../../../assets/img/nat-3.jpg 300w, ../../../assets/img/nat-3-large.jpg 1000w"
               sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw' 
               alt="Photo 3" class="composition__photo composition__photo--p3"
               src="../../../assets/img/nat-3-large.jpg">
          </div>
      </div>
    </div>

    <section-slider></section-slider>
  </section>
</template>

<script>
  import Slider from '../../Shared/Slider';

  export default {
    components: {
        'section-slider': Slider,
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    background-color: $color-grey-light;
    color: $color-grey-dark;
    padding: 25rem 15rem;
    margin-top: -20vh;

    @include respond(tab-land) {
      padding-bottom: 60rem;
      padding-top: 15rem;
    }

    @include respond(tab-port) {
      padding-bottom: 55rem;
    }

    @include respond(phone) {
      padding-bottom: 40rem;
    }

    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4.5rem;

      @include respond(tab-land) {
        grid-gap: 10rem 0;
        grid-template-columns: 1fr;
      }
    }
  }
</style>