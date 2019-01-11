<template>
  <div v-if="$store.state.auth.user">
    <div id="navbar">
      <div class="item">
        <a @mousedown="$router.push('/')">Шенген калькулятор</a>
      </div>

      <div>
        <a @mousedown="$router.push({name: 'profile'})">
          <span class="icon is-large">☰</span>
        </a>
      </div>
    </div>
    <div id="router">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}
#navbar a {
  color: black;
}
#router {
  display: flex;
  justify-content: center;
}
#router * {
  width: 100%;
  max-width: 600px;
}
.item {
  padding: 0px 0.5em;
}
</style>