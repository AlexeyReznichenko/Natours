<template>
  <div class="main-page">
    <section-navigation></section-navigation>
    <section-header></section-header>
    <section-about></section-about>
    <section-features></section-features>
    <section-tours></section-tours>
    <section-stories></section-stories>
    <section-booking></section-booking>
    <section-footer></section-footer>
    <section-popup></section-popup>
  </div>
</template>

<script>
    import Header from './pages/mainPage/Header';
    import Navigation from './pages/mainPage/Navigation';
    import About from './pages/mainPage/About';
    import Features from './pages/mainPage/Features';
    import Tours from './pages/mainPage/Tours';
    import Popup from './pages/mainPage/Popup';
    import Stories from './pages/mainPage/Stories';
    import Booking from './pages/mainPage/Booking';
    import Footer from './pages/mainPage/Footer';

    export default {
      components: {
        'section-header': Header,
        'section-navigation': Navigation,
        'section-about': About,
        'section-features': Features,
        'section-tours': Tours,
        'section-popup': Popup,
        'section-stories': Stories,
        'section-booking': Booking,
        'section-footer': Footer,
      }
    }
</script>

<style lang="scss">

</style>