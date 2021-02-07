<template>
  <div class="container">
    <div class="sliderbig">
      <span class="sliderbig__item" style="--i:1"><img src="../../assets/img/nat-1.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:2"><img src="../../assets/img/nat-2.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:3"><img src="../../assets/img/nat-3.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:4"><img src="../../assets/img/nat-4.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:5"><img src="../../assets/img/nat-5.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:6"><img src="../../assets/img/nat-6.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:7"><img src="../../assets/img/nat-7.jpg" alt="" class="sliderbig__image"></span>
      <span class="sliderbig__item" style="--i:8"><img src="../../assets/img/nat-8.jpg" alt="" class="sliderbig__image"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .container {
        //padding: 20rem 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #000;
    }

    .sliderbig {
        position: relative;
        width: 20rem;
        height: 20rem;
        animation: animate 20s linear infinite;
        transform-style: preserve-3d;

        &__item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform: rotateY(calc(var(--i) * 45deg)) translateZ(40rem);
            -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);
        }

        &__image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
        }
    }

    @keyframes animate {
        0% {
            transform: perspective(100rem) rotateY(0deg);
        }

        100% {
            transform: perspective(100rem) rotateY(360deg);
        }
    }
</style>