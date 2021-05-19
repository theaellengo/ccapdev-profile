import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  /*{
    path: '*',
    name: 'catchAll',
    redirect: '/'
  },*/
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/profile/:idNum',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/search',
    name: 'Search',
    props: true,
    component: () => import('../views/Search.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminPanel.vue'),
    meta: {requiresAuth: true, adminOnly: true}
  },
  {
    path: '/admin/reports',
    name: 'Reports',
    component: () => import('../views/AdminReports.vue'),
    meta: {requiresAuth: true, adminOnly: true}
  },
  {
    path: '/admin/profile/:idNum',
    name: 'AdminProfile',
    component: () => import('../views/AdminProfile.vue'),
    meta: {requiresAuth: true, adminOnly: true}
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import('../views/Verify.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  base: '/'
});

router.beforeEach((to, from, next) => {
  //console.log(to)
  //console.log(from)
  if (to.meta.requiresAuth) { // check the meta field
    if (JSON.parse(localStorage.getItem('auth-token'))) { // check if the user is authenticated
      next(); // the next method allow the user to continue to the router
    } else {
      next('/'); // Redirect the user to the main page
    }
  }

  if (to.meta.adminOnly) { // check the meta field
    if (JSON.parse(localStorage.getItem('user')).role.toLowerCase() === 'admin') { // check if the user's role is admin
      next(); // the next method allow the user to continue to the router
    } else {
      next('/'); // Redirect the user to the main page
    }
  }
  // default move
  next();
});

export default router;
