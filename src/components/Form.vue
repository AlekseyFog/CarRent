<template>
  <div
    class="form"
    :class="wide && 'form_wide'"
  >
    <div class="form__text">
      {{ translator.formHeader }}
    </div>
    <form
      class="form__wrapper container"
      @submit.prevent
    >
      <div class="row">
        <div class="col-12">
          <input
            class="form-control"
            required=""
            type="text"
            :disabled="formWasSend"
            :value="formData.name"
            :placeholder="translator.name"
            @input="setFormValue($event, 'name')"
          />
        </div>
      </div>
      <div class="row pt-1">
        <div class="col-12">
          <input
            class="form-control"
            required=""
            type="tel"
            :disabled="formWasSend"
            :value="formData.phone"
            :placeholder="translator.phone"
            @input="setFormValue($event, 'phone')"
          />
        </div>
      </div>
      <div class="row pt-3">
        <div class="button__send col-12 col-sm-6">
          <Abutton
            class="button__send-item"
            :theme="buttonTheme"
            :disabled="formWasSend || !formIsReady"
            @click="formSubmit"
          >
            {{ translator.send }}
          </Abutton>
        </div>
        <div class="agree col-12 col-sm-6">
          <input
            type="checkbox"
            :value="terms"
            @input="setTermsValue"
          /> Согласен c договором оферты и даю свое согласие на обработку персональных данных
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';

  import translator from '../translator';
  import Abutton from './A-button';

  const EMAIL_USER_ID = 'user_WSqnFl43CJGsD0FsU5AyG';
  const EMAIL_SERVICE_ID = 'gmail';
  const EMAIL_TEMPLATE_ID = 'template_t38s4H2S';
  const EMAIL_NAME = 'CarRent';

  export default {
    name: 'Form',
    components: {
      Abutton,
    },
    props: {
      buttonTheme: {
        type: String,
        default: 'primary',
      },
      wide: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        translator,
        terms: false,
        formWasSend: false,
        formData: {
          name: '',
          phone: '',
        },
      };
    },
    computed: {
      templateParams() {
        return {
          emailName: EMAIL_NAME,
          userPhone: this.formData.phone,
          userName: this.formData.name,
        };
      },
      formIsReady() {
        const name = this.formData.name;
        const phone = this.formData.phone;
        const terms = this.terms;

        return name.length && phone.length && terms;
      },
    },
    methods: {
      setFormValue(event, field) {
        this.formData[field] = event.target.value;
      },
      setTermsValue(event) {
        this.terms = event.target.checked
      },
      clearFormData() {
        this.formData.name = '';
        this.formData.phone = '';
      },
      formSubmit() {
        const templateParams = this.templateParams;
        const serviceId = EMAIL_SERVICE_ID;
        const userId = EMAIL_USER_ID;
        const templateId = EMAIL_TEMPLATE_ID;

        this.formWasSend = true;
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(() => {
            this.clearFormData();
            setTimeout(() => {
              this.formWasSend = false;
            }, 5000);
          }, () => {
            this.formWasSend = false;
            console.log('Ошибка');
          });
      },
    },
  };
</script>

<style scoped>
  .form {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 500px;
    margin-top: 40px;
    border: 1px solid #ddd;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px #ddd;
    padding: 10px;
    z-index: 0;
  }

  .form__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-transform: uppercase;
    font-size: 30px;
  }

  .form_wide {
    width: 100%;
    max-width: none;
  }

  .button__send {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__send-item {
    width: 100%;
  }

  .agree {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    .form {
      display: inline-block;
      width: 50%;
      margin-left: 10%;
    }

    .button__send-item {
      width: 100%;
    }

    .agree {
      font-size: 12px;
    }
  }
</style>
