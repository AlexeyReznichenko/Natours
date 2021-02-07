<template>
  <section class="section-slider">
    <div class="slider">
      <div class="slider__item">
        <img
          data-lazy="src/assets/img/nat-1.jpg"
          alt=""
          class="slider__image"
        />
      </div>
      <div class="slider__item">
        <img
          data-lazy="src/assets/img/nat-2.jpg"
          alt=""
          class="slider__image"
        />
      </div>
      <div class="slider__item">
        <img
          data-lazy="src/assets/img/nat-3.jpg"
          alt=""
          class="slider__image"
        />
      </div>
      <div class="slider__item">
        <img
          data-lazy="src/assets/img/nat-4.jpg"
          alt=""
          class="slider__image"
        />
      </div>
      <div class="slider__item">
        <img
          data-lazy="src/assets/img/nat-5.jpg"
          alt=""
          class="slider__image"
        />
      </div>
    </div>

    <svg
      style="width:0;height:0;position:absolute;"
      aria-hidden="true"
      focusable="false"
    >
      <linearGradient id="my-cool-gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="#7ed56f" />
        <stop offset="100%" stop-color="#28b485" />
      </linearGradient>
    </svg>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-slider {
  padding: 10rem 5rem 3rem;
}

.slider {
  position: relative;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;
    transition: all 0.3s ease;
  }

  &__image {
    width: 70%;
    height: 80%;
    border-radius: 30px;
  }

  &__icon {
    fill: url(#my-cool-gradient);
    transition: all 0.3s;
  }
}

/* Слайдер */
.slick-slider {
}

/* Слайдер запущен */
.slick-slider.slick-initialized {
}

/* Слайдер с точками */
.slick-slider.slick-dotted {
}

/* Ограничивающая оболочка */
.slick-list {
  overflow: hidden;
}

/* Лента слайдов */
.slick-track {
  display: flex;
}

/* Слайд */
.slick-slide {
  transform: scale(0.7) translateX(-2rem);

  &:focus,
  &:active {
    outline: none;
  }
}

/* Слайд активный (показывается) */
.slick-slide.slick-active {
}

/* Слайд основной */
.slick-slide.slick-current {
  opacity: 1;
  transform: scale(1.2) translateX(0);
  
  .slider__image {
    border-radius: 5px;
  }
}

/* Слайд по центру */
.slick-slide.slick-center {
}

/* Клонированный слайд */
.slick-slide.slick-cloned {
}

/* Стрелка */
.slick-arrow {
  display: inline-block;
  font-size: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 4rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  margin-top: -1.5rem;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .slider__icon {
    filter: brightness(80%);
    transform: scale(1.1);
  }
}

/* Стрелка влево */
.slick-arrow.slick-prev {
  left: 0;
  transform: translateY(-50%) rotate(180deg);
  margin-left: -2rem;
}

/* Стрелка вправо */
.slick-arrow.slick-next {
  right: 0;
  margin-right: -2rem;
}

/* Стрелка заблокирована */
.slick-arrow.slick-disabled {
  opacity: 0.2;
}

/* Точки */
.slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  li {
    list-style: none;
    margin: 0 1rem;
  }

  li.slick-active button {
    background-image: $gradient-secondary;
    transform: scale(1.3);
  }

  button {
    font-size: 0;
    width: 1rem;
    height: 1rem;
    background-image: $gradient-primary;
    border-radius: 50%;
    border: none;
  }
}
</style>
