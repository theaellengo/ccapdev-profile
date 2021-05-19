<template>
  <div class="register">
    <div class="container">
      <div class="card form-container">
        <h1 class="large text-dark">
          Sign Up
        </h1>
        <p class="lead">
          <i class="fas fa-user"></i>
          Create your account
        </p>
        <form class="form">
          <div class="form-group">
            <label class="control-label" for="name">Name: <span class="alert alert-text" v-if="errors.nameError">{{errors.nameErrorMsg}}</span></label>
            <input type="text" id="name" placeholder="First Name MI Last Name" v-model="newUser.name"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="idno">ID no: <span class="alert alert-text" v-if="errors.idNoError">{{errors.idNoErrorMsg}}</span></label>
            <input type="number" id="idno" placeholder="ID number" v-model="newUser.idno"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Email: <span class="alert alert-text" v-if="errors.emailError">{{errors.emailErrorMsg}}</span></label>
            <input type="email" id="email" placeholder="Email Address" v-model="newUser.email"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="password">Password: <span class="alert alert-text" v-if="errors.passwordError">{{errors.passwordErrorMsg}}</span></label>
            <input type="password" id="password" placeholder="Password" min-length="6" v-model="newUser.password"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="password"
              >Confirm Password: <span class="alert alert-text" v-if="errors.confirmPassError">{{errors.confirmPassErrorMsg}}</span></label
            >
            <input
              type="password"
              placeholder="Confirm Password"
              min-length="6"
              v-model="confirmPass"
            />
          </div>
          <br />
          <input value="Register" class="btn btn-primary" @click="submit()"/>
        </form>
        <p class="my-1">
          Already have an account?
          <router-link to="/login">
            <a>
              Login Here.
            </a>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  const url = 'http://localhost:3000'

  export default {
    name: 'Register',
    data: () => {
      return{
        newUser: {
          name: "",
          idno: "",
          email: "",
          password: "",
          role: 'user',
        },
        confirmPass: "",
        errors: {
          nameError: false,
          nameErrorMsg: '',
          idNoError: false,
          idNoErrorMsg: '',
          emailError: false,
          emailErrorMsg: '',
          passwordError: false,
          passwordErrorMsg: '',
          confirmPassError: false,
          confirmPassErrorMsg: '',
        }
      }
    },
    methods: {
      async validate(){
        if(this.newUser.name == ""){
          this.errors.nameError = true
          this.errors.nameErrorMsg = 'Please enter your name'
        }
        else{
          this.errors.nameError = false
        }
        if(this.newUser.idno == ""){
          this.errors.idNoError = true
          this.errors.idNoErrorMsg = 'Please enter your ID number'
        }
        else{
          const res = await axios.post(`${url}/users/checkIDno`, {idno: this.newUser.idno})
          if(res.data.message == "taken"){
            this.errors.idNoError = true
            this.errors.idNoErrorMsg = 'ID number already taken!'
          }
          else{
            this.errors.idNoError = false
          }
        }
        if(this.newUser.email == ""){
          this.errors.emailError = true
          this.errors.emailErrorMsg = 'Please enter your email address'
        }
        else if(!this.validateEmail(this.newUser.email)){
          this.errors.emailError = true
          this.errors.emailErrorMsg = 'Please enter a valid email address'
        }
        else if(!this.newUser.email.endsWith('@dlsu.edu.ph')){
          this.errors.emailError = true
          this.errors.emailErrorMsg = 'Please use your DLSU email address'
        }
        else{
          const res = await axios.post(`${url}/users/checkemail`, {email: this.newUser.email})
          if(res.data.message == "taken"){
            this.errors.emailError = true
            this.errors.emailErrorMsg = 'Email already taken!'
          }
          else{
            this.errors.emailError = false
          }
        }
        if(this.newUser.password == ""){
          this.errors.passwordError = true
          this.errors.passwordErrorMsg = 'Please enter a password'
        }
        else if(this.newUser.password.length < 6){
          this.errors.passwordError = true
          this.errors.passwordErrorMsg = 'Password must be at least 6 characters long'
        }
        else{
          this.errors.passwordError = false
        }
        if(this.confirmPass == ""){
          this.errors.confirmPassError = true
          this.errors.confirmPassErrorMsg = 'Please confirm your password'
        }
        else if(this.newUser.password != this.confirmPass){
          this.errors.confirmPassError = true
          this.errors.confirmPassErrorMsg = 'Passwords do not match'
        }
        else{
          this.errors.confirmPassError = false
        }

        if(this.errors.nameError || this.errors.emailError || this.errors.idNoError || this.errors.passwordError || this.errors.confirmPassError){
          return false
        }
        else{
          return true
        }
      },
      validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      async submit(){
        if(await this.validate()){
          const response = axios.post(`${url}/users/register`,this.newUser)
          this.$router.push({'name': 'Login'})
        }
      }
    },
    created() {
      if (JSON.parse(localStorage.getItem('auth-token'))) { // if logged in
        this.$router.push({name: 'Home'});
      }
    }
  };
</script>

<style scoped>
  .alert-text {
    padding-top: 0;
  }
  router-link {
    style: none;
  }
</style>
