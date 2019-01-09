<template>
  <div id="app">
    <div v-if="st">
      <router-view/>
    </div>

    <div v-else>Loading</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      st: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  watch: {
    user(user) {
      this.st = true;
      if (!this.user) {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

[type="date"] {
  box-shadow: none;
  font-size: 22px;
  font-family: "Roboto Condensed", sans-serif;
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

/* custom styles */
label {
  display: block;
}
input {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: none;
  width: 160px;
}
</style>
