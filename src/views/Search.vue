<template>
  <Navbar />
  <div class="container">
    <br />
    <h3 class="page-title"><i class="fas fa-search"></i> Search Results</h3>
    <div class="card">
      <table class="table table-borderless table-hover">
        <caption>
          List of instructors
        </caption>
        <thead>
          <tr class="label">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">College</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Deborah Rose Buhion</td>
            <td>CCS</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Thea Ellen Go</td>
            <td>CCS</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Nick Matthew Intatano</td>
            <td>CCS</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'Search',
    components: {
      Navbar
    }
  };
</script>

<style scoped>
  .card {
    padding: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #fff;
    border: none;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    border-radius: 1rem;
  }
  table {
    border: none;
    overflow: hidden;
  }
  thead {
    border: none;
  }
  caption {
    padding-bottom: 0;
    margin: 0;
  }
  .label {
    color: #255075;
  }
  .page-title {
    color: #255075;
  }
</style>
