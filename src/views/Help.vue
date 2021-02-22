<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-m-8 col-xs-8">
        <br />
        <h3 class="page-title"><i class="fas fa-question-circle"></i> Help</h3>
        <div class="card border-white">
          <div class="card-body">
            <h4 class="card-title">
              It's Simple! Let's do it step by step:
            </h4>
            <p class="card-content">
              1) Register and Log-in to access the site<br />
              2) Search for and filter out professors<br />
              3) Read and add reviews for professors<br />
              4) Delete and Update previous reviews<br />
              5) Help others out by contributing!<br />
            </p>
          </div>
        </div>
        <h5></h5>
      </div>
      <div class="col-lg-4 col-m-4 col-xs-4"></div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'Help',
    components: {
      Navbar
    }
  };
</script>

<style scoped>
  .card {
    padding: 1rem;
    border: none;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .footer {
    color: #777;
    font-size: 0.8rem;
  }
  .card {
    margin-bottom: 1rem;
  }
  .card-content {
    padding-left: 1rem;
  }
  ol {
    list-style-type: disc !important;
    padding-left: 1em !important;
    margin-left: 1em;
  }
  .page-title {
    color: #255075;
  }
</style>
