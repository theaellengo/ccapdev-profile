<template>
  <div class="container">
    <br />
    <div class="row">
      <div class="col-3">
        <h3 class="page-title"><i class="fas fa-search"></i> Search Results</h3>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-6 search">
            <input
              type="text"
              class="form-control"
              placeholder="Enter professor's name"
              v-model="name"
              v-on:keyup="submit"
            />
          </div>
          <div class="col-2 search">
            <select
              id="searchfilterdiv"
              class="custom-select"
              v-model="college"
            >
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
          <div class="col-2 search">
            <button class="searchbtn btn btn-primary" @click="search()">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="card">
      <span>
        List of instructors
      </span>
      <table class="table table-borderless table-hover">
        <thead>
          <tr class="label">
            <th scope="col">College</th>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in profs">
            <td>
              <a :href="item.hyperlink">{{ item.college }}</a>
            </td>
            <td>
              <a :href="item.hyperlink">{{ item.name }}</a>
            </td>
            <td>
              <a :href="item.hyperlink" v-if="item.rating > 0">{{
                item.rating
              }}</a>
              <a :href="item.hyperlink" v-else>Unrated</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import axios from 'axios';
  const url = process.env.VUE_APP_API_URL;
  export default {
    name: 'Search',
    components: {
      Navbar
    },
    props: {
      searchName: String,
      searchCollege: String
    },
    data: () => ({
      profs: [],
      name: '',
      college: 'all'
    }),
    methods: {
      async search() {
        if (this.name == undefined) this.name = '';
        console.log('Name: ' + this.name + '\nCollege: ' + this.college);
        const response = await axios.post(`${url}/profs/search`, {
          searchName: this.name,
          searchCollege: this.college
        });
        this.profs = response.data;
        const link = window.location.origin + '/#/';
        this.profs.forEach((x, i) => {
          x.hyperlink = link + 'profile/' + x.idNum;
        });
        console.log(this.profs);
      },
      submit(e) {
        if (e.keyCode === 13) {
          this.search();
        }
      }
    },
    async mounted() {
      console.log('Mounted!');
      this.name = this.searchName;
      this.college = this.searchCollege;
      this.search();
    }
  };
</script>

<style scoped>
  .searchbtn {
    margin: 0;
    padding: 0.4rem;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
  }
  .search {
    padding: 0;
    margin-right: 0.5rem;
  }
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
