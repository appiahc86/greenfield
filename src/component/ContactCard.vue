<template>
  <section class="text-center my">
    <!--    Google Map -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.28711330292!2d-1.678498599999974!3d6.6689940000000085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9929c3ff8ff3%3A0x402bc5cef9fefe8d!2sGreenField%20Agricultural%20Services!5e0!3m2!1sen!2sgh!4v1681221153494!5m2!1sen!2sgh" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                  action="#"
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
                            id="form_phone"
                            type="text"
                            name="phone"
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
                      <button class="btn btn-default">Send message</button>
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

</template>

<style scoped>

</style>