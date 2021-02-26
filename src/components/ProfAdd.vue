<template>
  <div class="card">
    <h1 class="large text-dark">Add Professor</h1>
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
      <input type="submit" value="Add Professor" class="btn btn-primary" />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ProfAdd'
  };
</script>
