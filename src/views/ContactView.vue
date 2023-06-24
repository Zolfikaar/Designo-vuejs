<script>
import LocationsComponent from '@/components/shared-components/LocationsComponent.vue';
import patternLeaf from '@/components/icons/pattern-leaf.vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      err_icon: false
    };
  },
  components: {
    LocationsComponent,
    patternLeaf
  },
  computed: {
    // Now i don't need all this logic, but I'll keep them For proper implementation in the future
    nameError() {
      if (this.name.trim() === '') {
        return "Can't be empty";
        this.err_icon = true
      }
      return '';
    },
    emailError() {
      if (this.email.trim() === '') {
        return "Can't be empty";
      }
      if (!this.isValidEmail(this.email.trim())) {
        return 'Please enter a valid email address';
      }
      return '';
    },
    phoneError() {
      if (this.phone.trim() === '') {
        return "Can't be empty";
      }
      return '';
    }
  },
  methods: {
    submitForm() {
      // Form submission logic
      if (this.nameError === '' && this.emailError === '' && this.phoneError === '') {
        // Form fields are valid, you can submit the form here
      }
    },
    setCustomValidity(field, message) {
      const inputField = event.target;
      inputField.setCustomValidity(message);
      inputField.reportValidity();
    },
    isValidEmail(email) {
      // Email validation logic
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    }
  }
};
</script>
<template>
  <section class="contact-sec">
    <div class="form-box">
      <div class="left-side">
        <h1>Contact Us</h1>
       <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </div>
      
      <div class="right-side">
        <form @submit.prevent="submitForm">
        <div class="form-item">
          <input type="text" placeholder="Name" v-model="name" required>
          <span class="error-message" v-if="this.err_icon">{{ nameError }} 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg></span>
        </div>
        <div class="form-item">
          <input type="email" placeholder="Email Address" v-model="email" required>
          <span class="error-message" :class="{ 'show-error': formSubmitted && emailError }">{{ emailError }} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg></span>
        </div>
        <div class="form-item">
          <input type="number" placeholder="Phone" v-model="phone" required>
          <span class="error-message" :class="{ 'show-error': formSubmitted && phoneError }">{{ phoneError }} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FFF"/><path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"/></g></svg></span>
        </div>
        <div class="form-item">
          <textarea cols="30" rows="5" placeholder="Your Message" v-model="message"></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
      </div>
      
    </div>

    <LocationsComponent />
  </section>

  <patternLeaf class="pattern-leaf2" />

</template>
<style scoped>
.pattern-leaf2{
  position: absolute;
  bottom: 150px;
  z-index: -5;
  right: 0;
}
.contact-sec{
  margin: 50px 0 150px 0;
}
.form-box{
  display: flex;
  align-items: center;
  height: 480px;
  background-color: var(--clr-primary);
  background-image: url('@/assets/contact/desktop/bg-pattern-hero-desktop.svg');
  background-position-y: bottom;
  background-repeat: no-repeat;
  border-radius: var(--bor-rad);
}
.form-box .left-side{
  width: 40%;
  margin: 0 100px;
  color: white;
}
.form-box .left-side p{
  margin-right: 10px;
  margin-top: 40px;
}
.right-side{
  width: 35%;
}
.right-side form input::-webkit-outer-spin-button,
.right-side form input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.right-side form input[type=number] {
  -moz-appearance: textfield;
}
.right-side form textarea{
  resize: none;
}
.right-side form textarea,
.right-side form input{
  width: 100%;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid white;
  background-color: unset;
  outline: none;
  color: white;
  padding-left: 10px;
}
.right-side form textarea::placeholder,
.right-side form input::placeholder{
  color: white;
}
.right-side form textarea:focus,
.right-side form input:focus{
  border-bottom: 3px solid white;
}
.error-message{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
}
.error-message svg{
  margin-left: 10px;
}
.right-side button{
  float: right;
}

@media screen and (min-width: 375px) and (max-width: 768px){
  .pattern-leaf2{display: none;}
  .container{
    width: 100%;
  }
  .contact-sec{
    margin-top: unset;
  }
  .form-box{
    flex-direction: column;
    height: unset;
    padding-bottom: 20px;
    border-radius: unset;
  }
  .form-box .left-side{
    width: 100%;
    margin-top: 40px;
    text-align: center;
  }
  .form-box .left-side p{
    margin: 20px 8px;
  }
  .right-side{
    width: 100%;
    padding: 0 10px;
  }
  .right-side form textarea,
  .right-side form input{
    margin: 20px 0;
  }
  .right-side button{
    float: unset;
    display: block;
    margin: 20px auto;
  }
}
@media screen and (min-width: 769px) and (max-width: 1440px){
  .pattern-leaf2{display: none;}
  .form-box{
    flex-direction: column;
    height: unset;
    padding-bottom: 20px;
    background-position: 50% 100%;
  }
  .form-box .left-side{
    width: 100%;
    margin-top: 40px;
    text-align: left;
  }
  .form-box .left-side h1{
    margin-left: 50px;
  }
  .form-box .left-side p{
    margin: 20px 50px;
  }
  .right-side{
    width: 100%;
    padding: 0 50px;
  }
}
</style>