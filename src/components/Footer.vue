<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer__title">
          <div class="col-12">
            {{ translator.footerTitle }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="footer__contacts">
            {{ translator.adress }} <br /> {{ translator.phoneNumber }}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="footer__map">
            <yandex-map
              :settings="yaMapconfig"
              :coords="coords"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="footer__end">
              {{ translator.copyright }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { yandexMap } from 'vue-yandex-maps';
  import translator from '../translator';

  export default {
    name: 'Header',
    components: {
      yandexMap,
    },
    data() {
      return {
        translator,
        yaMapconfig: {
          apiKey: '',
          lang: 'ru_RU',
          coordorder: '59.878798, 30.329774',
          version: '2.1',
        },
        coords: ['59.878798', '30.329774'],
      };
    },
  };
</script>

<style scoped>
  .footer {
    width: 100%;
    margin-top: 30px;
  }
  .footer__title {
    margin-top: 10px;
    font-size: 40px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }
  .footer__title:first-letter {
    text-transform: uppercase;
  }
  .footer__contacts {
    margin-right: auto;
    text-align: center;
  }
  .footer__map {
    text-align: center;
    margin: 5px;
    width: 100%;
    height: 400px;
  }
  .footer__map ::v-deep .ymap-container {
    height: 400px;
  }
  .footer__end {
    font-size: 10px;
    font-weight: bold;
  }
</style>
