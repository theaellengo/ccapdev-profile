<template>
  <div class="container">
    <div class="home">
      <div class="card">
        <h1>Welcome to Profile!</h1>
        <p>
          Here, you can search for and add reviews for professors in DLSU. We
          exercise freedom of speech, but please, do keep your comments
          professional and respectful. We hope you enjoy your stay!
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-m-4 col-xs-4">
          <img src="img/professor.png" />
        </div>
        <div class="col-lg-4 col-m-4 col-xs-4">
          <br />
          <br />
          <h4>About</h4>
          <p>
            (Prof)ile allows students to read and write reviews on campus
            professors...
          </p>
          <div><router-link to="/about">Learn More.</router-link></div>
        </div>
        <div class="col-lg-4 col-m-4 col-xs-4">
          <br />
          <br />
          <h4>Filter by College</h4>
          <p>
            Trouble finding your profs? Good News! You can filter them out by
            college!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'Home',
    components: {
      Navbar
    }
  };
</script>

<style scoped>
  .card {
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #333;
  }
  img {
    width: 100%;
  }
</style>
