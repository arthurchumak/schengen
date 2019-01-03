import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Shengen.vue';
import NewTrip from './views/NewTrip.vue';
import EditTrip from './views/EditTrip.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new',
      name: 'NewTrip',
      component: NewTrip,
    },
    {
      path: '/edit/:id',
      name: 'EditTrip',
      component: EditTrip,
    },
  ],
});
