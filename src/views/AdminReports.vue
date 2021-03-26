<template>
  <div class="admin-panel">
    <AdminNav />
    <div class="container">
      <br />
      <div class="row">
        <div class="col-12">
          <h3 class="page-title">
            <i class="fas fa-report"></i>
            Reported Comments
          </h3>
        </div>
        <div class="card toolbar">
          <div class="col-12">
            <div class="addbtn">
              <button class="btn btn-primary">
                Remove from List
              </button>
            </div>
            <div class="addbtn">
              <button class="btn btn-danger">
                Delete Comments
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <table class="table table-borderless table-hover">
          <caption>
            List of Reports
          </caption>
          <thead>
            <tr class="label">
              <th scope="col"></th>
              <th scope="col">Comment</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </td>
              <td>
                Anonymouse
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </td>
              <td>
                Jennieee
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </td>
              <td>
                Eloise
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfAdd from '@/components/ProfAdd.vue';
  import Searchbar from '@/components/Searchbar.vue';
  import AdminNav from '@/components/AdminNav.vue';
  export default {
    name: 'AdminReports',
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
  .form-check-input {
    margin-top: 0.5rem;
    align-items: center;
    vertical-align: middle;
    display: flex;
  }
  .toolbar {
    margin: 1rem;
    padding-right: 0rem;
    width: 97%;
  }
</style>
