<template>
  <section class="booking">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form action="#" class="form">
            <div class="margin-bottom-medium">
              <h2 class="heading-secondary">Start booking now</h2>
            </div>

            <div class="form__group">
              <input id="name" type="text" class="form__input" placeholder="Full Name" required>
              <label for="name" class="form__label">Full name</label>
            </div>

            <div class="form__group">
              <input id="email" type="text" class="form__input" placeholder="Email Address" required>
              <label for="email" class="form__label">Email address</label>
            </div>

            <div class="form__group margin-bottom-medium">
              <div class="form__radio-group">
                <input type="radio" class="form__radio-input" id="small" name="size">
                <label for="small" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Small tour group
                </label>
              </div>

              <div class="form__radio-group">
                <input type="radio" class="form__radio-input" id="large" name="size">
                <label for="large" class="form__radio-label">
                  <span class="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>

            <div class="form__group">
                <button class="btn btn-green">Next step &rarr;</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .booking {
    padding: 15rem 0;
    background-image: $gradient-primary;

    @include respond(tab-port) {
      padding: 10rem 0;
    }

    .book {
      background-image: linear-gradient(105deg, 
      rgba($color-white, .9) 0%, rgba($color-white, .9) 41%, transparent 41%),
      url(../../../assets/img/nat-10.jpg);
      background-size: 127%;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
      margin: 0 auto;
      width: 80%;

      @include respond(tab-land) {
        background-image: linear-gradient(105deg, 
        rgba($color-white, .9) 0%, rgba($color-white, .9) 40%, transparent 40%),
        url(../../../assets/img/nat-10.jpg);
        background-size: 140%;
        width: 90%;
      }

      @include respond(tab-port) {
        background-image: linear-gradient(105deg, 
        rgba($color-white, .9) 0%, rgba($color-white, .9) 35%, transparent 35%),
        url(../../../assets/img/nat-10.jpg);
        background-size: 145%;
      }

      &__form {
        width: 50%;
        padding: 5rem;

        @include respond(tab-land) {
          padding: 3rem;
        }

        @include respond(tab-port) {
          width: 60%;
          padding: 2rem;
        }
      }
    }
  }
</style>