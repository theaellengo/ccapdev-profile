<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <h1 class="navheader">
      <router-link to="/home">
        <i class="fas fa-address-book"></i> (Prof)ile
      </router-link>
    </h1>
    <ul>
      <li><router-link to="/admin">AdminPanel</router-link></li>
      <li><router-link to="/admin/reports">Reports</router-link></li>
      <li><span class="logout" @click="logout()">Logout</span></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'AdminNav',
    methods: {
      logout(){
        localStorage.clear()
        this.$router.push({name: 'Welcome'})
      }
    }
  };
</script>

<style>
  .bg-white {
    background-color: #fff;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    opacity: 0.95;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  .navbar ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  .navbar a {
    color: #255075;
    padding: 0.45rem;
    margin: 0 0.25rem;
  }
  .navbar a:hover {
    color: #3b87ca;
  }
  .navheader {
    font-weight: 600;
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
  }
  .logout {
    color: #255075;
    padding: 0.45rem;
    margin: 0 0.25rem;
  }
  .logout:hover {
    color: #3b87ca;
  }
</style>
