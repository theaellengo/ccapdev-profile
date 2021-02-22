<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <h1 class="navheader">
      <router-link to="/">
        <i class="fas fa-address-book"></i> (Prof)ile
      </router-link>
    </h1>
    <Searchbar class="searchbar" />
    <ul>
      <li><router-link to="/help">Help</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>

  <div class="register">
    <div class="container">
      <div class="card form-container">
        <!--Alert-->
        <div class="alert alert-text">
          Invalid Credetials.
        </div>
        <h1 class="large text-dark">
          Sign Up
        </h1>
        <p class="lead">
          <i class="fas fa-user"></i>
          Create your account
        </p>
        <form action="index.html" class="form">
          <div class="form-group">
            <label class="control-label" for="username">Username:</label>
            <input type="text" placeholder="Username" />
          </div>
          <div class="form-group">
            <label class="control-label" for="idno">ID no:</label>
            <input type="number" placeholder="ID number" />
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Email:</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div class="form-group">
            <label class="control-label" for="password">Password:</label>
            <input type="password" placeholder="Password" min-length="6" />
          </div>
          <div class="form-group">
            <label class="control-label" for="password"
              >Confirm Password:</label
            >
            <input
              type="password"
              placeholder="Confirm Password"
              min-length="6"
            />
          </div>
          <br />
          <input type="submit" value="Register" class="btn btn-primary" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Login here.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register'
  };
</script>

<style scoped>
  .card {
    padding: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: #333;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: none;
  }
  .alert-text {
    padding-top: 0;
  }
</style>
