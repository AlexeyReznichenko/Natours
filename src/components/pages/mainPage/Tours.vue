<template>
  <section class="tours">
      <div class="text-center margin-bottom-big">
        <h2 class="heading-secondary" id="tours">Most popular tours</h2>
      </div>
      <div class="row">
        <div class="card">
          <div class="card__side card__side--front card__side--front-1">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
            </h4>
            <div class="card__details">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta abs-center">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$297</p>
              </div>
              <a href="#popup" class="btn btn-white">Book now!</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front card__side--front-2">
            <div class="card__picture card__picture--2">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--2">The Forest Hiker</span>
            </h4>
            <div class="card__details">
              <ul>
                <li>7 day tours</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-2">
            <div class="card__cta abs-center">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$497</p>
              </div>
              <a href="#popup" class="btn btn-white">Book now!</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__side card__side--front card__side--front-3">
            <div class="card__picture card__picture--3">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--3">The Snow Adventurer</span>
            </h4>
            <div class="card__details">
              <ul>
                <li>5 day tours</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-3">
            <div class="card__cta abs-center">
              <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">$897</p>
              </div>
              <a href="#popup" class="btn btn-white">Book now!</a>
            </div>
          </div>
        </div>
      </div>

      <div class="margin-top-big text-center">
        <a href="#" class="btn btn-green">Discover all tours</a>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .tours {
    background-color: $color-grey-light;
    padding: 25rem 0 15rem;
    margin-top: -10rem;

    .row {
      display: grid;
      grid-template-columns: repeat(3, 27.5%);
      grid-column-gap: 6rem;
      justify-content: center;

        @include respond(tab-port) {
          grid-gap: 5rem 0;
          grid-template-columns: 50%;
        }

        @include respond(phone) {
          grid-gap: 4rem 0;
          grid-template-columns: 70%;
        }

        @include respond(big-desktop) {
          grid-template-columns: repeat(3, 22%);
          grid-column-gap: 9rem;
        }
    }
  }
</style>