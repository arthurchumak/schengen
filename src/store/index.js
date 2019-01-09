import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const auth = {
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    auth
  },
  strict: false
});

export default store;
