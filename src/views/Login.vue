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
          <div class="alert alert-text" v-if="errors.loginError">
            The email address and password you entered did not match our
            records. Please try again.
          </div>
          <div class="form-group">
            <label class="control-label" for="email"
              >Email
              <span v-if="errors.emailError" class="alert alert-text"
                >Please input your email address</span
              ></label
            >
            <input type="email" placeholder="Email Address" v-model="email" />
          </div>
          <div class="form-group">
            <label class="control-label" for="pwd"
              >Password
              <span v-if="errors.passwordError" class="alert alert-text"
                >Please input your password</span
              ></label
            >
            <input
              type="password"
              placeholder="Password"
              min-length="6"
              v-model="password"
            />
          </div>
          <input
            value="Sign In"
            class="btn btn-primary"
            @click="login(email, password)"
          />
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

  const url = 'http://localhost:3000';

  export default {
    name: 'Login',
    data: () => {
      return {
        email: '',
        password: '',
        errors: {
          loginError: false,
          emailError: false,
          passwordError: false
        }
      };
    },
    methods: {
      async login(email, password) {
        if (this.validate()) {
          const credentials = { email, password };
          LoginService.login(credentials)
            .then(() => {
              //console.log('login done.');
              if (
                JSON.parse(localStorage.getItem('user')).role.toLowerCase() ===
                'admin'
              )
                this.$router.push({ name: 'Admin' });
              else this.$router.push({ name: 'Home' });
            })
            .catch(err => {
              //console.log(`login failed with ERROR: ${err.response.data.msg}`);
              this.errors.loginError = true;
            });
        }
      },
      validate() {
        if (this.email == '') {
          this.emailError = true;
        } else {
          this.errors.emailError = false;
        }
        if (this.password == '') {
          this.errors.passwordError = true;
        } else {
          this.errors.passwordError = false;
        }
        if (this.errors.emailError || this.errors.passwordError) {
          return false;
        } else {
          return true;
        }
      }
    },
    created() {
      if (JSON.parse(localStorage.getItem('auth-token'))) {
        // if logged in
        this.$router.push({ name: 'Home' });
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
