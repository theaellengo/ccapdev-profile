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
        <form action="index.html" class="form">
          <!--Alert-->
          <div class="alert alert-text">
            <span v-if="errorMessage!=''">{{errorMessage}}</span>
          </div>
          <div class="form-group">
            <label class="control-label" for="name">Name:</label>
            <input type="text" id="name" placeholder="First Name MI Last Name" v-model="newUser.name"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="idno">ID no:</label>
            <input type="number" id="idno" placeholder="ID number" v-model="newUser.idno"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Email:</label>
            <input type="email" id="email" placeholder="Email Address" v-model="newUser.email"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="password">Password:</label>
            <input type="password" id="password" placeholder="Password" min-length="6" v-model="newUser.password"/>
          </div>
          <div class="form-group">
            <label class="control-label" for="password"
              >Confirm Password:</label
            >
            <input
              type="password"
              placeholder="Confirm Password"
              min-length="6"
              v-model="confirmPass"
            />
          </div>
          <br />
          <input type="submit" value="Register" class="btn btn-primary" @click="submit()"/>
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
        errorMessage: '',
        newUser: {
          name: "",
          idNo: "",
          email: "",
          password: "",
          role: 'user',
        },
        confirmPass: "",
      }
    },
    methods: {
      validate(){
        if(this.newUser.password != this.confirmPass){
          this.errorMessage = 'Passwords do not match'
          return false
        }

        return true
      },
      async submit(){
        if(this.validate()){
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
