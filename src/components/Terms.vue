<template>
  <div class="terms">
    <div class="terms__title">
      {{ translator.termsTitle }}
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="terms__img">
            <img
              src="../assets/pass.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="terms__header">
            {{ translator.termsPassportTitle }}
          </div>
          <div class="terms__element">
            {{ translator.termsPassport }}
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="terms__img">
            <img
              src="../assets/caricon.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="terms__header">
            {{ translator.termsCarTitle }}
          </div>
          <div class="terms__element">
            {{ translator.termsCar }}
          </div>
          <div class="terms__check">
            {{ translator.termsCarCheck }}
            <span><a href="https://driver.yandex/ru-ru/auto-list-spb"><b>ЗДЕСЬ</b></a></span>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="terms__img">
            <img
              src="../assets/driver.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="terms__header">
            {{ translator.termsLicenseTitle }}
          </div>
          <div class="terms__element">
            {{ translator.termsLicense }}
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="terms__img">
            <img
              src="../assets/smartphone.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="terms__header">
            {{ translator.termsSmartphoneTitle }}
          </div>
          <div class="terms__element">
            {{ translator.termsSmartphone }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import translator from '../translator';

    export default {
        name: 'Terms',
        data() {
            return {
                translator,
            };
        },
    };
</script>

<style scoped>
  .terms__title {
    margin-top: 50px;
    font-size: 40px;
    text-align: center;
    width: 100%;
  }

  .terms__title:first-letter{
    text-transform: uppercase;
  }

  .terms__header{
    margin: auto;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }

  .terms__element{
    font-size: 15px;
    text-align: center;

  }
  .terms__element:first-letter{
    text-transform: uppercase;
  }

  .terms__img{
    font-size: 15px;
    text-align: center;
  }

  .terms__check{
    text-align: center;
    color: gray;
    font-size: 10px;
  }

  .terms__check:first-letter{
    text-transform: uppercase;
  }

  .terms__img img{
    text-align: center;
    margin-top: 50px;
    max-width: 100px;
    max-height: 100px;
  }
  span b{
    color: #ffc107;
  }


</style>
