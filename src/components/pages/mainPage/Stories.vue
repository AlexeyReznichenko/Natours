<template>
  <section class="stories">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="src/assets/img/video.mp4" type="video/mp4">
        <source src="src/assets/img/video.webm" type="video/webm">
        Your browser is not supported!
      </video>
    </div>
    <div class="text-center">
      <h2 class="heading-secondary margin-bottom-big">We make people genuinely happy</h2>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img src="../../../assets/img/nat-8.jpg" alt="Person on a tour" class="story__img">
          <figcaption class="story__caption abs-center">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary margin-bottom-small">I had the best week ever with my family</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            atque aperiam laboriosam animi facilis dolores nobis quod accusantium repudiandae optio tenetur,
            sint debitis recusandae alias nostrum? Sequi omnis beatae similique.
          </p>
        </div>
      </div>

      <div class="story">
        <figure class="story__shape">
          <img src="../../../assets/img/nat-9.jpg" alt="Person on a tour" class="story__img">
          <figcaption class="story__caption abs-center">Jack Wilson</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary margin-bottom-small">WOW! My life is completely different now</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            atque aperiam laboriosam animi facilis dolores nobis quod accusantium repudiandae optio tenetur,
            sint debitis recusandae alias nostrum? Sequi omnis beatae similique.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center margin-top-big">
      <a href="#" class="btn-text">Read all stories &rarr;</a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .stories {
    padding: 15rem 0;
    position: relative;
    width: 100%;

    .row {
      display: grid;
      grid-row-gap: 6rem;
      justify-content: center;
    }
  }
</style>