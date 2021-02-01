<template>
  <header class="header">
    <div class="logo-box">
      <img src="../../../assets/img/logo-white.png" alt="" class="logo">
    </div>
    
    <div class="text-box-center">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>

      <a href="#tours" class="btn btn-white btn-animated">Discover our tours</a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    height: 95vh;
    position: relative;
    background-image: 
    linear-gradient(to right bottom, rgba($color-primary-light, .8), rgba($color-primary-dark, .8)),
     url(../../../assets/img/hero-small.jpg);
    background-size: cover;
    background-position: top;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    @media (min-resolution: 192dpi) and (min-width: 37.5em),
           (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            (min-width: 125em) {
      background-image: 
      linear-gradient(to right bottom, rgba($color-primary-light, .8), rgba($color-primary-dark, .8)),
      url(../../../assets/img/hero.jpg);
    }

    .logo {
      height: 3.5rem;

      &-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
      }
    }
  }
</style>