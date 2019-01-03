import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import trips from './modules/trips';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    trips,
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
