import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Shengen.vue';
import Trip from './views/Trip.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/trip/:id',
      name: 'trip',
      component: Trip,
    },
  ],
});
