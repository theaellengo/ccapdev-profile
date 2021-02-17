<template>
  <div>
    <nav class="navbar bg-white">
      <h1 class="navheader">
        <a href="./home.html">
          <i class="fas fa-address-book"></i> (Prof)ile
        </a>
      </h1>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
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
    opacity: 0.9;
    box-shadow: 0px 1px 5px grey;
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
</style>
