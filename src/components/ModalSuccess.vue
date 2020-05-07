<template>
  <div class="modal-success">
    <div class="modal-success__wrapper">
      <div class="modal-success__title">
        {{ translator.modalTitle }}
      </div>
      <div class="modal-success__text">
        {{ translator.modalTextTitle }}
        <ul>
          <li> {{ translator.modalTextPass }} </li>
          <li> {{ translator.modalTextLic }} </li>
          <li> {{ translator.modalTextDoc }} </li>
          <li> {{ translator.modalTextOsag }} </li>
        </ul>
      </div>
      <div class="modal-success__button">
        <Abutton
          @click="close"
        >
          {{ translator.okay }}
        </Abutton>
      </div>
    </div>
  </div>
</template>

<script>
  import translator from '../translator';

  import Abutton from './A-button';


  export default {
    name: 'ModalSuccess',
    components: {
      Abutton,
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
  .modal-success {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    z-index: 2;
  }
  .modal-success__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    padding: 20px 0;
  }
  .modal-success__title{
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-size: 25px;
    padding: 20px;
    color: lightgray;
  }
  .modal-success__text {
    display: block;
    width: 70%;
    font-size: 15px;
    line-height: 30px;
    padding: 7px 10px;
    color: lightgray;
  }
  .modal-success__button {
    display: block;
    width: 150px;
    text-transform: capitalize;
  }
  @media (min-width: 768px) {
    .modal-success{
      height: auto;
      top: 25%;
    }
  }
  </style>
