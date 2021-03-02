<template>
  <div class="admin-panel">
    <AdminNav />
    <div class="container">
      <br />
      <div class="row">
        <div class="col-3">
          <h3 class="page-title">
            <i class="fas fa-search"></i> Search Results
          </h3>
        </div>
        <div class="col-7">
          <Searchbar style="width: 80%; padding-bottom: 1rem" />
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
  </div>
  <div v-if="showAddModal" class="dark-overlay">
    <div class="editmodal">
      <ProfAdd
        :viewdata="showAddModal"
        @clickedItem="showAddModal = !showAddModal"
      />
    </div>
  </div>
</template>

<script>
  import ProfAdd from '@/components/ProfAdd.vue';
  import Searchbar from '@/components/Searchbar.vue';
  import AdminNav from '@/components/AdminNav.vue';
  export default {
    name: 'AdminPanel',
    data: () => {
      return {
        showAddModal: false
      };
    },
    components: {
      ProfAdd,
      Searchbar,
      AdminNav
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
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
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
  .editmodal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
