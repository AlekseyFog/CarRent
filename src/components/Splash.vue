<template>
  <div class="splash">
    <div class="splash__info">
      <div class="splash__info_button-wrapper">
        <a href="tel:+79112767606">
          <AButton class="header__button">{{ translator.phoneNumber }}</AButton>
        </a>
      </div>
      <div class="splash__info_adress">
        {{ translator.adress }}
      </div>
    </div>
    <div class="splash__image-wrapper">
      <img
        src="../assets/car.png"
        alt="car"
      />
    </div>
  </div>
</template>

<script>
    import translator from '../translator';
    import AButton from './A-button';

    export default {
        name: 'Splash',
        components: {
            AButton,
        },
        data() {
            return {
                translator,
            };
        },
    };
</script>

<style scoped>
  .splash {
    display: block;
    width: 100%;
  }

  .splash__info{
    margin-top: 20px;
    display: block;
    text-align: center;
  }

  .splash__info_adress{
    margin-top: 20px;
  }

  .splash__info_button-wrapper{
    width: 60%;
    margin: auto;
  }

  .splash__image-wrapper {
    display: flex;
    margin: 40px auto;
    flex-wrap: wrap;
    width: 100%;
    max-width: 300px;
  }

  .splash__image-wrapper img {
    display: block;
    width: 100%;
  }

  a{
    color: black;
  }
  a:visited{
    color: black;
  }
  a:active{
    color: black;
  }


  @media all and (min-width: 768px) {

    .splash{
      display: inline-block;
      width: 40%;
    }


    .splash__info_adress {
      display: none;
    }


    .splash__info_button-wrapper {
      display: none;
    }

    .splash__image-wrapper {
      display: inline-block;
      max-width: 400px;

    }

  }
</style>
