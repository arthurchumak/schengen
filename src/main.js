import Vue from "vue";
import dayjs from "dayjs";
import uuid from "uuid/v1";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.dayjs = dayjs;

firebase.initializeApp(require("./fireconfig.json"));

firebase.auth().onAuthStateChanged(user => {
  store.commit("SET_USER", user);
});

Vue.prototype.auth = {
  client: firebase.auth(),
  login(email, password) {
    return this.client.signInWithEmailAndPassword(email, password);
  },
  logout() {
    return this.client.signOut();
  },
  signin(email, password) {
    return this.client.createUserWithEmailAndPassword(email, password);
  },
  resetPass(email) {
    return this.client.sendPasswordResetEmail(email);
  }
};

Vue.prototype.sdk = {
  userId() {
    return firebase.auth().currentUser.uid;
  },
  db: firebase.database(),
  getLimit() {
    return this.db.ref(`/users/${this.userId()}/limit`);
  },
  setLimit(limit) {
    return this.getLimit().set(limit);
  },
  getTrips() {
    return this.db.ref(`/users/${this.userId()}/trips`);
  },
  newTrip(dates) {
    return this.db.ref(`/users/${this.userId()}/trips`).push(dates);
  },
  getTrip(id) {
    return this.db.ref(`/users/${this.userId()}/trips/${id}`);
  },
  updateTrip(id, dates) {
    this.newTrip(dates);
    return this.removeTrip(id);
  },
  removeTrip(id) {
    return this.db.ref(`/users/${this.userId()}/trips/${id}`).remove();
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
