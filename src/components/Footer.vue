<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer__title">
          <div class="col-12"> {{ translator.footerTitle }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="footer__contacts">
            {{ translator.adress }} <br> {{ translator.phoneNumber }}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.2154948315067!2d30.327468215752962!3d59.878771673889126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696300e9ba2c1df%3A0xb33bf2e5b0d4cfd4!2z0YPQuy4g0KDQtdGI0LXRgtC90LjQutC-0LLQsCwgMTUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTYxMDU!5e0!3m2!1sru!2sru!4v1583253354197!5m2!1sru!2sru"
              frameborder="0" style="border:0; height: 100%; width:100%;" allowfullscreen="">

            </iframe>
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
    import translator from "../translator";

    export default {
        name: 'Header',
        data() {
            return {
                translator: translator,
            }
        },
    }
</script>

<style scoped>

  .footer {
    border-top: 1px solid #dddddd;
    width: 100%;
  }

  .footer__title {
    margin-top: 10px;
    font-size: 40px;
    text-align: center;
    width: 100%;
  }

  .footer__title:first-letter{
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

  .footer__end{
    font-size: 10px;
    font-weight: bold;
  }

</style>
