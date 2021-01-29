<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span> About Natours</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span> Your benefits</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span> Popular tours</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span> Stories</a></li>
        <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span> Book now</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .navigation {
    &__checkbox {
      display: none;
    }

    &__button {
      background-color: $color-white;
      height: 7rem;
      width: 7rem;
      position: fixed;
      top: 6rem;
      right: 6rem;
      border-radius: 100%;
      z-index: 2000;
      box-shadow: 0 1rem 3rem rgba($color-black, .1);
      text-align: center;
      cursor: pointer;
    }

    &__background {
      height: 6rem;
      width: 6rem;
      border-radius: 100%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient($color-primary-light, $color-primary-dark);
      z-index: 1000;
      transition: transform .8s cubic-bezier(.86, 0, .07, 1);
    }

    &__nav {
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1500;

      opacity: 0;
      width: 0;
      transition: all .8s cubic-bezier(.68, -.55, .265, 1.55);
    }

    &__list {
      @include abs-center;
      text-align: center;
      list-style: none;
      width: 100%;
    }

    &__item {
      margin: 1rem;
    }

    &__icon {
      position: relative;
      margin-top: 3.5rem;

      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        display: inline-block;
        background-color: $color-grey-dark-3;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        transition: all .2s;
      }

      &::before {top: -.8rem;}
      &::after {top: .8rem;}
    }

    &__button:hover &__icon::before {top: -1rem}
    &__button:hover &__icon::after {top: 1rem}

    &__checkbox:checked + &__button &__icon {
      background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
      top: 0;
      transform: rotate(135deg);
    }

    &__checkbox:checked + &__button &__icon::after {
      top: 0;
      transform: rotate(-135deg);
    }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: $color-white;
        text-transform: uppercase;
        text-decoration: none;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
        background-size: 250%;
        transition: all .5s;

        span {
          display: inline-block;
          margin-right: 1rem;
        }
      }

      &:hover,
      &:active {
        background-position: 100%;
        color: $color-primary;
        transform: translateX(1rem);
      }

    }

    &__checkbox:checked ~ &__background {
      transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
      opacity: 1;
      width: 100%;
    }
  }
</style>