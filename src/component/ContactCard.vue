<template>
  <section class="text-center my">
    <h1>Google map goes here</h1>
  </section>
  <div class="my contact-form-layer">
    <div class="section-title">
      <h2>CONTACT</h2>
      <h3>KEEP IN TOCH</h3>
      <p>
        We will be the leading company in the national market with each of our
        products.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <form
          id="contact-form"
          method="post"
          action="contact.php"
          novalidate="true"
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
                    type="tel"
                    name="phone"
                    class="form-control custom-form"
                    placeholder="*Please enter your phone"
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
</template>
<script setup></script>