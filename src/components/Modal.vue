<template>
  <div class="offert-modal">
    <div class="offert-modal__wrapper">
      <button
        class="close-button"
        @click="close"
      >
        <img
          src="../assets/close.png"
          width="100%"
        />
      </button>
      <div v-if="modalType === 'offer'">
        <h1 class="offert-modal__header">
          {{ translator.offertHeader }}
        </h1>
        <p
          class="offert-modal__text"
          v-html="translator.offertText"
        />
      </div>
      <div v-if="modalType === 'policy'">
        <h1 class="offert-modal__header">
          {{ translator.politicHeader }}
        </h1>
        <p
          class="offert-modal__text"
          v-html="translator.politicText"
        />
      </div>
      <div v-if="modalType === 'success'">
        <h1 class="offert-modal__header">
          {{ translator.modalTitle }}
        </h1>
        <p class="offert-modal__text">
          {{ translator.modalTextTitle }}
          <ul>
            <li> {{ translator.modalTextPass }} </li>
            <li> {{ translator.modalTextLic }} </li>
            <li> {{ translator.modalTextDoc }} </li>
            <li> {{ translator.modalTextOsag }} </li>
          </ul>
          <Abutton @click="close">
            {{ modalType === 'offer' ? translator.close : translator.okay }}
          </Abutton>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside';

  import translator from '../translator';

  import Abutton from './A-button';

  export default {
    name: 'Modal',
    directives: {
      ClickOutside,
    },
    components: {
      Abutton,
    },
    props: {
      modalType: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        translator,
      };
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
  .offert-modal{
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,1);
    z-index: 99;
  }
  .close-button{
    position: fixed;
    top: 10px;
    right: 15px;
    z-index: 100;
    font-size: 20px;
    width:50px;
    height: 50px;
    background: none;
    border: none;
  }
  .offert-modal__header{
    color: #ffd900;
    font-size: 40px;
  }
  .offert-modal__text{
    color: white;
    font-size: 15px;
  }

  </style>
