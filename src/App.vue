<template>
  <Navbar v-if="showNav"/>
  <AdminNav v-if="showAdminNav"/>
  <router-view />
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import AdminNav from '@/components/AdminNav.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      AdminNav
    },
    data() {
      return {
        showAdminNav: false,
        showNav: false,
        noNav: ['Welcome', 'Login', 'Register'],
        adminNavPages: ['Admin', 'Reports', 'AdminProfile'],
      }
    },
    watch: {
      $route (to,from){
        this.shouldShow()
      }
    },
    methods: {
      shouldShow(){
        var routeName = this.$route.name
        //console.log(routeName)
        if(this.adminNavPages.includes(routeName) || (localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role.toLowerCase() === 'admin')){
          this.showNav = false
          this.showAdminNav = true
        }
        else if(!this.noNav.includes(routeName)){
          this.showNav = true
          this.showAdminNav = false
        }
        else{
          this.showNav = false
          this.showAdminNav = false
        }
        //console.log('Show Admin Nav: ' + this.showAdminNav + "\nShow Nav: " + this.showNav)
      }
    },
    mounted(){
      this.shouldShow()
    },
    beforeUpdate(){
      this.shouldShow()
    }
  };
</script>

<style>
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: #f2f8fd;
    color: #333;
  }
  a {
    text-decoration: none;
    color: #255075;
  }
  a:hover {
    text-decoration: none;
    color: #3b87ca;
  }
  ul {
    list-style: none;
  }
</style>
