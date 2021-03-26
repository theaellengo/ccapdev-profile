<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <h1 class="navheader">
      <router-link to="/">
        <i class="fas fa-address-book"></i> (Prof)ile
      </router-link>
    </h1>
    <Searchbar class="searchbar" />
    <ul>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>

  <div class="login">
    <div class="container">
      <div class="card form-container">
        <!--Alert-->
        <div class="alert alert-text">
          Invalid Credetials.
        </div>
        <h1 class="large text-dark">
          Sign In
        </h1>
        <p class="lead">
          <i class="fas fa-user"></i>
          Sign into your account
        </p>
        <form action="home.html" class="form">
          <div class="form-group">
            <label class="control-label" for="email">Email:</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div class="form-group">
            <label class="control-label" for="pwd">Password:</label>
            <input type="password" placeholder="Password" min-length="6" />
          </div>
          <br />
          <input type="submit" value="Sign In" class="btn btn-primary" />
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
  export default {
    name: 'Login'
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
