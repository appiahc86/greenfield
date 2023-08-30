<script setup>
import { ref } from "vue";
import emailjs from '@emailjs/browser';
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import Button from "primevue/button";
const sendingMail = ref(false);
const toast = useToast();
const myForm = ref();
const email = ref('');
const name = ref('');

const sendMail = async () => {
  try {
    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
      return toast.add({severity:'warn',  detail:'Please Enter a valid email address', life: 4000});
    }

    if (name.value.trim().length < 2) {
      return toast.add({severity: 'warn', detail: 'Please Enter you name', life: 4000});
    }

    sendingMail.value = true;

    const result = await emailjs.sendForm(
        'service_20sbslu',

        'template_7cpvba9',
                   myForm.value,
        'DFqWf3TGLO7r_bqsj');

    myForm.value.reset();
    email.value = "";
    name.value = "";
    toast.add({severity:'success', detail:'Your Message has been sent', life: 4000});
  }catch (e){
    toast.add({severity:'error', detail:'Sorry, error occurred. Please try again later', life: 4000});
  }finally { sendingMail.value = false; }

}
</script>

<template>
  <section class="text-center my">
    <!--    Google Map -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-4">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.28711330292!2d-1.678498599999974!3d6.6689940000000085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9929c3ff8ff3%3A0x402bc5cef9fefe8d!2sGreenField%20Agricultural%20Services!5e0!3m2!1sen!2sgh!4v1681221153494!5m2!1sen!2sgh"
                  width="100%" height="450" style="border:0;" allowfullscreen loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>

  <div class="container-fluid mb-4">
    <div class="row">
      <div class="col">
        <div class="contact-form-layer">
          <div class="section-title">
            <h2>CONTACT</h2>
            <h3>KEEP IN TOUCH</h3>
            <p>
              We will be the leading company in the national market with each of our
              products.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <form
                  id="contact-form"
                  ref="myForm"
                  @submit.prevent="sendMail"
              >
                <div class="messages"></div>
                <div class="controls">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                            id="form_name"
                            type="text"
                            name="name"
                            v-model="name"
                            class="form-control custom-form"
                            placeholder="*Name"
                            required="required"
                            data-error="Firstname is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                            id="form_email"
                            type="email"
                            name="email"
                            v-model="email"
                            class="form-control custom-form"
                            placeholder="*Email address"
                            required="required"
                            data-error="Valid email is required."
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <input
                            type="text"
                            name="subject"
                            class="form-control custom-form"
                            placeholder="*Please enter subject"
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                  <textarea
                      id="form_message"
                      name="message"
                      class="form-control message-form custom-form"
                      placeholder="*Your message"
                      rows="6"
                      required="required"
                      data-error="Please,leave us a message."
                  ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-12 btn-send">
                      <button class="btn btn-default" :disabled="sendingMail">
                        Send message
                        <span class="spinner-border spinner-border-sm" v-if="sendingMail"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Toast position="center" style="padding: 0;"/>
</template>

<style scoped>

</style>