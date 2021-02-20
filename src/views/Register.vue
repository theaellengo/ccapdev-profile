<template>
  <Navbar />
  <div class="register">
    <div class="container">
      <div class="form-container">
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
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'Register',
    components: {
      Navbar
    }
  };
</script>
