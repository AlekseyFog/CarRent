<template>
  <div
    class="a-button"
    :class="[
      disabled && 'a-button_disabled',
      'a-button_' + theme
    ]"
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
        disabled: {
          type: Boolean,
          default: false,
        },
      },
      data() {
        return {
          translator,
        };
      },
      methods: {
        clickHandler() {
          if (!this.disabled) {
            this.$emit('click');
          }
        },
      },
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
  .a-button_disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .a-button_primary button {
    background: #f6c13e;
  }

  .a-button_secondary button {
    background: #649af6;
  }

</style>
