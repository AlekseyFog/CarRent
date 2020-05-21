<template>
  <div id="app">
    <TermsModal
      v-if="termsIsVisible"
      @accept="acceptHandler"
      @show-modal="setModal"
    />
    <Modal
      v-if="modalIsVisible"
      :modal-type="modalType"
      @close="hideModal"
    />
    <Header />
    <div
      class="default-layout"
      :class="[
        modalIsVisible && 'default-layout_locked'
      ]"
    >
      <div class="container container_page">
        <City />
        <Splash />
        <Form
          @show-modal="setModal"
        />
        <Advantages />
        <Terms />
        <Form
          :wide="true"
          button-theme="secondary"
          @show-modal="setModal"
        />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  import $cookies from 'vue-cookies';

  import TermsModal from './components/TermsModal';
  import Header from './components/Header';
  import City from './components/City';
  import Splash from './components/Splash';
  import Form from './components/Form';
  import Advantages from './components/Advantages';
  import Terms from './components/Terms';
  import Footer from './components/Footer';
  import Modal from './components/Modal';

  const TERMS_COOKIE_NAME = 'terms_is_accepted';

  export default {
    name: 'App',
    components: {
      Modal,
      TermsModal,
      Header,
      City,
      Splash,
      Form,
      Advantages,
      Terms,
      Footer,
    },
    data() {
      return {
        termsIsAccepted: false,
        termsWasAccepted: false,
        modalIsVisible: false,
        modalType: '',
      };
    },
    computed: {
      termsIsVisible() {
        return !(this.termsIsAccepted || this.termsWasAccepted);
      },
    },
    created() {
      this.setTermsIsVisible();
    },
    methods: {
      setTermsIsVisible() {
        const stringValue = $cookies.get(TERMS_COOKIE_NAME) || 'false';
        this.termsWasAccepted = JSON.parse(stringValue);
      },
      acceptHandler() {
        this.termsIsAccepted = true;
      },
      setModal(type) {
        this.modalIsVisible = true;
        this.modalType = type;
      },
      hideModal() {
        this.modalIsVisible = false;
        this.modalType = '';
      },
    },
  };
</script>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap&subset=cyrillic');

  html {
    scroll-behavior: smooth;
    user-select: none;
    cursor: default;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu';
  }

  .container_page {
    padding-top: 120px;
  }
  .default-layout_locked{
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
