<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-9">
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
            <option value="COS">COS</option>
            <option value="CLA">CLA</option>
            <option value="GCOE">GCOE</option>
            <option value="RVRCOB">RVRCOB</option>
            <option value="SOE">SOE</option>
        </select>
      </div>
    </div>
    <h3 class="page-title"><i class="fas fa-search"></i> Search Results</h3>
    <div class="card">
      <table class="table table-borderless table-hover">
        <span>
          List of instructors
        </span>
        <thead>
          <tr class="label">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">College</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in profs">
            <th scope="row"><a :href=item.hyperlink>{{item.idNum}}</a></th>
            <td><a :href=item.hyperlink>{{item.name}}</a></td>
            <td><a :href=item.hyperlink>{{item.college}}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import axios from 'axios';

  export default {
    name: 'Search',
    components: {
      Navbar
    },
    props: {
      searchName: String,
      searchCollege: String,
    },
    data: () => ({
      profs: [],
      name: "",
      college: "all",
    }),
    methods: {
      async search(){
        const url = 'http://localhost:3000'
        console.log("Name: " + this.name + "\nCollege: " + this.college)
        const response = await axios.post(`${url}/profs/search`, {searchName: this.name, searchCollege: this.college})
        this.profs = response.data;
        const link = window.location.origin + '/#/'
        this.profs.forEach((x, i) => {
          x.hyperlink = link + 'profile/' + x.idNum
        })
        console.log(this.profs)
      },
      submit(e){
        if(e.keyCode === 13){
            this.search()
        }
      }
    },
    async mounted(){
      console.log('Mounted!')
      this.name = this.searchName;
      this.college = this.searchCollege
      this.search()
    },
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
