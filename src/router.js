import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import Layout from "./views/Layout.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Shengen.vue";
import NewTrip from "./views/NewTrip.vue";
import EditTrip from "./views/EditTrip.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      beforeEnter(to, from, next) {
        next();
      },
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile
        },
        {
          path: "/new",
          name: "NewTrip",
          component: NewTrip
        },
        {
          path: "/edit/:id",
          name: "EditTrip",
          component: EditTrip
        }
      ]
    }
  ]
});
