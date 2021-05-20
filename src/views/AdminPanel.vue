<template>
  <div class="admin-panel">
    <div class="container">
      <br />
      <div class="row pad1">
        <div class="col-3">
          <h3 class="page-title">
            List of Professors
          </h3>
        </div>
        <div class="col-2">
          <div class="addbtn">
            <button
              class="btn btn-primary"
              id="show-modal"
              @click="showAddModal = !showAddModal"
            >
              Add Professor
            </button>
          </div>
        </div>
      </div>
      <div class="card">
        <table class="table table-borderless table-hover">
          <thead>
            <tr class="label">
              <th scope="col">College</th>
              <th scope="col">Name</th>
              <th scope="col">Rating</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in profs">
                <th scope="row"><a :href=item.hyperlink>{{item.college}}</a></th>
                <td><a :href=item.hyperlink>{{item.name}}</a></td>
                <td><a :href=item.hyperlink>{{item.rating}}</a></td>
                <td><input type="submit" value="Delete" v-on:click="delProf(item._id)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <ProfAdd
    :profOptionProp="addOption"
    v-if="showAddModal"
    @close="closeModal()"
  />
</template>

<script>
  import ProfAdd from '@/components/ProfAdd.vue';
  import Searchbar from '@/components/Searchbar.vue';
  import AdminNav from '@/components/AdminNav.vue';
  import axios from 'axios';

  export default {
    name: 'AdminPanel',
    data: () => {
      return {
        showAddModal: false,
        addOption: "Add",
        profs: [],
      };
    },
    components: {
      ProfAdd,
      Searchbar,
      AdminNav
    },
    methods:{
      async delProf(id){
        const url = 'http://localhost:3000'
        const response = await axios.delete(`${url}/profs/${id}`)
        console.log(response)
        this.$router.go();
      },
      closeModal(){
        this.$router.go();
      }
    },
    async mounted(){
      const url = 'http://localhost:3000'
      const response = await axios.get(url + '/profs/all')
      this.profs = response.data;
      const link = window.location.origin + '/#/'
      this.profs.forEach((x, i) => {
        x.hyperlink = link + 'admin/profile/' + x.idNum
      })
    }
  };
</script>

<style scoped>
  .addbtn {
    float: right;
  }
  .addmodal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .exit {
    background: transparent;
    border: none;
  }
  .exit:hover {
    color: #255075;
    background-color: #f7f7f7;
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
  Searchbar {
    padding: 0;
    margin: 0;
  }
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .pad1{
    padding-left: 10px;
  }
</style>
