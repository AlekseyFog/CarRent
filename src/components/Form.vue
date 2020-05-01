<template>
  <div class="form" :class= "wide && 'form_wide'" >
    <div class="form__text">{{ translator.formHeader }}</div>
    <form class="form__wrapper container">
      <div class="row">
        <div class="col-12">
          <input class="form-control" required="" type="text" :placeholder="translator.name">
        </div>
      </div>
      <div class="row pt-1">
        <div class="col-12">
          <input class="form-control" required="" type="tel"  :placeholder="translator.phone">
        </div>
      </div>
      <div class="row pt-3">
        <div class="button__send col-12 col-sm-6">
          <Abutton class="button__send-item" :theme="buttonTheme">
            {{ translator.send }}
          </Abutton>
        </div>
        <div class="agree col-12 col-sm-6">
          <input type="checkbox" checked> Согласен c договором оферты и даю свое согласие на обработку персональных данных
        </div>
      </div>
    </form>
  </div>

</template>

<script>
    import translator from "../translator";
    import Abutton from './A-button.vue';

    export default {
        name: 'Form',
        components: {
            Abutton,
        },
        data() {
            return {
                translator: translator,
            }
        },
        props: {
            buttonTheme: {
                type: String,
                default: 'primary',
            },
            wide: {
                type: Boolean,
                default: true,
            }
        }
    }
</script>

<style scoped>
  .form {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 500px;
    margin-top: 40px;
    border: 1px solid #ddd;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px #ddd;
    padding: 10px;
    z-index: 0;
  }

  .form__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-transform: uppercase;
    font-size: 30px;
  }

  .form_wide{
    width: 100%;
    max-width: none;

  }
  .button__send{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button__send-item{
    width: 100%;
  }
  .agree{
    font-size: 15px;
  }

  @media (min-width: 768px) {
    .form{
      display: inline-block;
      width: 50%;
      margin-left: 10%;
    }

    .button__send-item{
      width: 100%;
    }

    .agree{
      font-size: 12px;
    }

  }


</style>
