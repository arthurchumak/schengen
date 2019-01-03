import Vue from 'vue';
import dayjs from 'dayjs';
import uuid from 'uuid/v1';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.dayjs = dayjs;

Vue.prototype.sdk = {
  newTrip(dates) {
    store.commit('addTrip', {
      id: uuid(),
      dates,
    });
  },
  getTrip(id) {
    return store.state.trips.all.find(trip => id === trip.id);
  },
  updateTrip(id, dates) {
    this.removeTrip(id);
    this.newTrip(dates);
  },
  removeTrip(id) {
    store.commit('removeTrip', id);
  },
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
