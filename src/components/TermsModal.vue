<template>
  <div class="terms-modal">
    <div class="terms-modal__wrapper">
      <div class="terms-modal__text">
        {{ translator.termsText }}
      </div>
      <div class="terms-modal__button">
        <Abutton
          @click="clickHandler"
        >
          {{ translator.accept }}
        </Abutton>
      </div>
    </div>
  </div>
</template>

<script>
  import $cookies from 'vue-cookies';
  import translator from '../translator';

  import Abutton from './A-button';

  const TERMS_COOKIE_NAME = 'terms_is_accepted';

  export default {
    name: 'TermsModal',
    components: {
      Abutton,
    },
    data() {
      return {
        translator,
      };
    },
    methods: {
      clickHandler() {
        $cookies.set(TERMS_COOKIE_NAME, true);
        this.$emit('accept');
      },
    },
  };
</script>

<style scoped>
  .terms-modal {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.9);
    z-index: 2;
  }
  .terms-modal__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px;
  }
  .terms-modal__text {
    display: block;
    width: calc(100% - 120px);
    font-size: 13px;
    line-height: 15px;
    padding: 7px 10px;
    color: lightgray;
  }
  .terms-modal__button {
    display: block;
    width: 120px;
  }
</style>
