<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <picture class="footer__logo">
        <source srcset="../../../assets/img/logo-green-small-1x.png 1x, ../../../assets/img/logo-green-small-2x.png 2x"
                media='(max-width: 37.5em)'>
        <img srcset="../../../assets/img/logo-green-1x.png 1x, ../../../assets/img/logo-green-2x.png 2x"
             alt="Full logo" src="../../../assets/img/logo-green-2x.png" >
      </picture>
    </div>
    <div class="row">
      <div class="footer__navigation col">
        <ul class="footer__list">
          <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
          <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
        </ul>
      </div>
      <div class="col">
        <p class="footer__copyright">
          Lorem ipsum dolor sit amet <a href="#" class="footer__link">consectetur</a> adipisicing elit. Excepturi culpa laborum tempora dolorem
          aperiam praesentium, ducimus, quas quaerat, ipsum voluptates consequatur optio maxime. Quaerat
          libero id deserunt sapiente nisi! Ea.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer {
    background-color: $color-grey-dark-3;
    padding: 10rem 10rem;
    font-size: 1.4rem;
    color: $color-grey-light;

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      justify-content: center;
      grid-column-gap: 20rem;

      @include respond(tab-land) {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;
      }
    }

    .col {
      display: flex;
      justify-content: center;
    }

    &__logo {
      width: 15rem;

      &-box {
        text-align: center;
        margin-bottom: 8rem;
      }
    }

    &__navigation {
      border-top: 1px solid $color-grey-dark;
      padding-top: 2rem;
    }

    &__list {
      list-style: none;
      display: grid;
      grid-column-gap: 1.5rem;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
    }

    &__link {
      &:link,
      &:visited {
        text-decoration: none;
        text-transform: uppercase;
        color: $color-grey-light;
        background-color: $color-grey-dark-3;
        display: inline-block;
        transition: all .2s;
      }

      &:hover,
      &:active {
        color: $color-primary;
        box-shadow: 0 1rem 2rem rgba($color-black, .4);
        transform: rotate(5deg) scale(1.3);
      }
    }

    &__copyright {
      border-top: 1px solid $color-grey-dark;
      padding-top: 2rem;
      width: 90%;

      @include respond(tab-land) {
        width: 75%;
      }
    }
  }
</style>