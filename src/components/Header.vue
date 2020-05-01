<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo.png"/>
      <div class="header__logo_name">{{ translator.headerName }}</div>
    </div>
    <div class="header__info">
      <div class="header__adress">{{ translator.adress }}</div>
      <a href='tel:+79112767606'>
      <Abutton class="header__button">{{ translator.phoneNumber }}</Abutton>
      </a>
    </div>
  </div>

</template>

<script>
    import translator from "../translator";
    import Abutton from "./A-button.vue"

    export default {
        name: 'Header',
        data() {
            return {
                translator: translator,
            }
        },
        components: {
            Abutton,
        },
    }
</script>

<style scoped>

  a{
    color: black;
  }
  a:visited{
    color: black;
  }
  a:active{
    color: black;
  }

  .header {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    width: 100%;
    background: white;
    box-shadow: 0 0 5px #dddddd;
  }


  .header__logo {
    display: inline-flex;
    width: 30%;

  }

  .header__logo img {
    display: inline-flex;
    width: 90px;
    padding: 5px;

  }

  .header__logo_name {
    display: inline-flex;
    text-transform: uppercase;
    font-size: 25px;
    line-height: 90%;
    align-items: center;

  }
  .header__info{
    display: none;
  }
  .header__button{
    padding: 20px;
  }

@media (min-width: 768px) {
  .header__info {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    width: 70%;
  }
}

</style>
