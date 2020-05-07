<template>
  <div id="app">
    <TermsModal
      v-if="termsIsVisible"
      @accept="acceptHandler"
    />
    <ModalSuccess
      v-if="modalIsVisible"
      @close="hideModal"
    />
    <Header />
    <div class="container container_page">
      <City />
      <Splash />
      <Form
        @showModal="setModalIsVisible"
      />
      <Advantages />
      <Terms />
      <Form
        :wide="true"
        button-theme="secondary"
        @showModal="setModalIsVisible"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
  import $cookies from 'vue-cookies';

  import TermsModal from './components/TermsModal';
  import ModalSuccess from './components/ModalSuccess';
  import Header from './components/Header';
  import City from './components/City';
  import Splash from './components/Splash';
  import Form from './components/Form';
  import Advantages from './components/Advantages';
  import Terms from './components/Terms';
  import Footer from './components/Footer';

  const TERMS_COOKIE_NAME = 'terms_is_accepted';

  export default {
    name: 'App',
    components: {
      TermsModal,
      ModalSuccess,
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
      setModalIsVisible() {
        this.modalIsVisible = true;
      },
      acceptHandler() {
        this.termsIsAccepted = true;
      },
      hideModal() {
        this.modalIsVisible = false;
      },
    },
  };
</script>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap&subset=cyrillic');

  html {
    scroll-behavior: smooth;
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
</style>
