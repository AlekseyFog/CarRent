<template>
  <div id="app">
    <Header />
    <div class="container container_page">
      <City />
      <Splash />
      <Form />
      <Advantages />
      <Terms />
      <Form
        :wide="true"
        button-theme="secondary"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import City from './components/City';
  import Splash from './components/Splash';
  import Form from './components/Form';
  import Advantages from './components/Advantages';
  import Terms from './components/Terms';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      City,
      Splash,
      Form,
      Advantages,
      Terms,
      Footer,
    },
};
</script>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap&subset=cyrillic');

  html{
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
