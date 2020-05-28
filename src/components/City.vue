<template>
  <div class="city">
    <div class="city__text">
      {{ translator.cityText }}
    </div>
  </div>
</template>

<script>
    import translator from '../translator';

    export default {
        name: 'City',
        data() {
            return {
                translator,
            };
        },
    };
</script>

<style scoped>

  .city{
    display: block;
    width: 100%;
    text-align: center;
  }

  .city__text{
    font-size: 40px;
  }

  .city__text:first-letter{
    text-transform: capitalize;
  }
  @media (max-width: 576px){

    .city{
      display: flex;
      width: 100%;
      text-align: center;
    }

    .city__text{
      font-size: 25px;
    }
  }

</style>
