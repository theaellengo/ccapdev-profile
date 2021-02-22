<template>
  <section class="landing">
    <div class="landing-inner">
      <div class="card">
        <h1 class="title x-large">
          <i class="fas fa-address-book"></i> (Prof)ile
        </h1>
        <p>
          Welcome to the online De La Salle University professor database.<br />
          Look up and add reviews for professors in the University.
        </p>
        <div class="buttons">
          <a href="register.html" class="btn btn-link">Sign Up</a>
          <a href="login.html" class="btn btn-link">Login</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Welcome'
  };
</script>

<style scoped>
  body {
    background-color: #f2f8fd;
  }
  .title {
    color: #255075;
  }
  .card {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
</style>
