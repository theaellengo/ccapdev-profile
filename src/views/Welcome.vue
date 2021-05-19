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
          <router-link class="btn btn-link" to="/register">
            Sign Up
          </router-link>
          <router-link class="btn btn-link" to="/login">
            Log In
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Welcome',
    created() {
      if (JSON.parse(localStorage.getItem('auth-token'))) { // if logged in
        this.$router.push({name: 'Home'});
      }
    }
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
