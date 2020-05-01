<template>
  <div
    class="a-button"
    :class="'a-button_' + theme"
    @click="clickHandler"
  >
    <button>
      <slot />
    </button>
  </div>
</template>

<script>
    import translator from '../translator';

    export default {
      name: 'AButton',
      props: {
        theme: {
          type: String,
          default: 'primary',
        },
      },
      data() {
        return {
          translator,
        };
      },
      methods: {
        clickHandler() {
          this.$emit('click');
        },
      }
    };
</script>

<style scoped>
  .a-button button {
    white-space: nowrap;
    border-radius: 20px;
    font-size: 15px;
    padding: 10px 25px;
    width: 100%;
  }

  .a-button_primary button {
    background: #f6c13e;
  }

  .a-button_secondary button {
    background: #649af6;
  }

</style>
