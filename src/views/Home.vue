<template>
  <Navbar />
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
          <h4>Categories</h4>
          <p>
            Trouble finding your profs? Good News! You can filter them out by
            college!
          </p>
          <select id="searchfilterdiv" class="custom-select">
            <option value="all" selected>All</option>
            <option value="bagced">BAGCED</option>
            <option value="ccs">CCS</option>
            <option value="col">COL</option>
            <option value="cla">COS</option>
            <option value="cos">CLA</option>
            <option value="gce">GCOE</option>
            <option value="rvrcob">RVRCOB</option>
            <option value="soe">SOE</option>
          </select>
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
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: none;
  }
  img {
    width: 100%;
  }
</style>
