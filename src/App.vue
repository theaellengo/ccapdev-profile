<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
  }
  a {
    text-decoration: none;
    color: #255075;
  }
  a:hover {
    text-decoration: none;
    color: #3b87ca;
  }
  ul {
    list-style: none;
  }
</style>
