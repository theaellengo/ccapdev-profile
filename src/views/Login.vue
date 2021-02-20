<template>
  <Navbar />
  <div class="login">
    <div class="container">
      <div class="form-container">
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
          <input type="submit" value="Sign In" class="btn btn-primary" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Register here.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'Login',
    components: {
      Navbar
    }
  };
</script>
