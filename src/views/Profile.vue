<template>
  <div class="profile">
    <p>profile for id: {{idNum}}</p>
    <p>reviews</p>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'Profile',
    data: () => ({
      idNum: 0,
    }),
    created() {
      this.idNum = this.$route.params.idNum;
    },
  };
</script>
