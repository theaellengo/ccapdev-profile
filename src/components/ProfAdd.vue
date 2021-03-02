<template>
  <modal v-if="viewdata">
    <div class="card">
      <div class="header">
        <span><h1 class="large text-dark">Add Professor</h1></span>
        <span>
          <button class="btn exit" @click="$emit('clickedItem', viewdata)">
            <i class="fas fa-times"></i>
          </button>
        </span>
      </div>
      <form action="index.html" class="form">
        <div class="form-group">
          <label class="control-label" for="username">Name:</label>
          <input type="text" placeholder="Name" />
        </div>
        <div class="form-group">
          <label class="control-label" for="idno">College:</label>
          <input type="text" placeholder="College" />
        </div>
        <div class="form-group">
          <label class="control-label" for="email">Department:</label>
          <input type="text" placeholder="Department" />
        </div>
        <div class="form-group">
          <label class="control-label" for="email">Courses:</label>
          <input type="text" placeholder="Courses" />
        </div>
        <br />
        <input type="submit" value="Delete Professor" class="btn" />
        <input type="submit" value="Done Editing" class="btn btn-primary" />
      </form>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'ProfAdd',
    props: ['viewdata']
  };
</script>

<style scoped>
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
</style>
