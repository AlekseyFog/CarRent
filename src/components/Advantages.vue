<template>
  <div class="advantages">
    <div class="advantages__title">
      {{ translator.advantagesTitle }}
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/clock.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesFastTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesFast }}
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/ruble.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesMoneyTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesMoney }}
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/calend.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesSheduleTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesShedule }}
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/percent.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesComissTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesComiss }}
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/l.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesHelpTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesHelp }}
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="advantages__img">
            <img
              src="../assets/shester.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__header">
            {{ translator.advantagesDiscountTitle }}
          </div>
          <div class="advantages__element">
            {{ translator.advantagesDiscount }}
          </div>
        </div>
        <div class="col-12">
          <div class="advantages__more">
            {{ translator.more }}
          </div>
        </div>
        <div class="col-12">
          <div class="advantages__more_img">
            <img
              src="../assets/best.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__more_element">
            {{ translator.moreResult }}
          </div>
        </div>
        <div class="col-12">
          <div class="advantages__more_img">
            <img
              src="../assets/gift.png"
              width="100%"
              alt="image"
            />
          </div>
          <div class="advantages__more_element">
            {{ translator.moreInvite }}
          </div>
          <div class="advantages__more_elementTerm">
            {{ translator.moreInviteTerm }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import translator from '../translator';

    export default {
        name: 'Advantages',
        data() {
            return {
                translator,
            };
        },
    };
</script>

<style scoped>
  .advantages__title {
    margin-top: 70px;
    font-size: 40px;
    text-align: center;
    width: 100%;
  }

  .advantages__title:first-letter {
    text-transform: capitalize;
  }

  .advantages__header {
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }

  .advantages__element{
    font-size: 15px;
    text-align: center;
  }
  .advantages__element:first-letter{
    text-transform: capitalize;
  }

  .advantages__img{
    font-size: 15px;
    text-align: center;
  }
  .advantages__img img{
    text-align: center;
    margin-top: 50px;
    max-width: 100px;
  }

  .advantages__more{
    font-size: 25px;
    margin-top: 40px;
    text-align: center;
    text-transform: uppercase;
  }

  .advantages__more_img{
    display: block;
    text-align: center;
    margin-top: 20px;
  }
  .advantages__more_img img{
    max-width: 70px;
  }

  .advantages__more_element{
    display: block;
    text-align: center;
    vertical-align: bottom;
    font-size: 20px;
  }
  .advantages__more_element:first-letter{
    text-transform: capitalize;
  }

  .advantages__more_elementTerm{
    display: block;
    vertical-align: top;
    text-align: center;
    color: gray;
    font-size: 10px;
  }
  .advantages__more_elementTerm:first-letter{
    text-transform: capitalize;
  }


</style>
