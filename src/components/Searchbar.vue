<template>
  <form>
    <div class="row">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter professor's name"
          v-model="name"
          v-on:keyup="submit"
        />
      </div>
      <div class="col-3">
        <select id="searchfilterdiv" class="custom-select" v-model="college">
          <option value="all" selected>All</option>
          <option value="BAGCED">BAGCED</option>
          <option value="CCS">CCS</option>
          <option value="COL">COL</option>
          <option value="CLA">COS</option>
          <option value="COS">CLA</option>
          <option value="GCOE">GCOE</option>
          <option value="RVRCOB">RVRCOB</option>
          <option value="SOE">SOE</option>
        </select>
      </div>
      <div class="col-3">
        <button
          class="btn btn-primary"
          @click="search()"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Searchbar',
    data: () => ({
      name: "",
      college: "all",
    }),
    methods: {
      submit(e){
        if(e.keyCode === 13){
            this.$router.push({name: 'Search', params: {searchName: this.name, searchCollege: this.college}})
        }
      },
      search(){
        this.$router.push({name: 'Search', params: {searchName: this.name, searchCollege: this.college}})
      }
    },
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
