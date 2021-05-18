<template>
  <div class="login">
    <div class="container">
      <div class="card form-container">
        <h1 class="large text-dark">
          Sign In
        </h1>
        <p class="lead">
          <i class="fas fa-user"></i>
          Sign into your account
        </p>
        <form class="form">
          <!--Alert-->
          <div class="alert alert-text">
            Invalid Credetials.
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Email:</label>
            <input type="email" placeholder="Email Address" v-model="email"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="pwd">Password:</label>
            <input type="password" placeholder="Password" min-length="6" v-model="password"/>
          </div>
          <br />
          <input value="Sign In" class="btn btn-primary" @click="login(email, password)"/>
        </form>
        <p class="my-1">
          Don't have an account?
          <router-link to="/register">
            <a>
              Register Here.
            </a>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginService from '../services/LoginService';
  import axios from 'axios';

  const url = 'http://localhost:3000'

  export default {
    name: 'Login',
    data: () => {
      return{
        email: "",
        password: ""
      }
    },
    methods: {
      async login(email, password) {
        const credentials = { email, password };
        LoginService.login(credentials)
          .then(() => {
            console.log('login done.');
            this.$router.push({'name': 'Home'});
          })
          .catch((err) => {
            console.log(`login failed with ERROR: ${err}`);
            this.hasError = true;
          });
      },
    },
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
