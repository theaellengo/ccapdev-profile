<template>
  <form to="/search">
    <div class="row">
      <div class="col-9">
        <input
          type="text"
          class="form-control"
          placeholder="Enter professor's name"
        />
      </div>
      <div class="col-3">
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
  </form>
</template>

<script>
  export default {
    name: 'Searchbar'
  };
</script>

<style scoped>
  form {
    width: 30%;
  }
  .form input[type='text'] {
    width: 100%;
  }
  .form-inline {
    margin: 0;
    padding: 0;
  }
  .form-group {
    margin: 0;
    padding: 0;
  }
  .col-3,
  .col-9 {
    margin: 0;
    padding: 0;
  }
  .col-9 {
    padding-right: 0.4rem;
  }
</style>
