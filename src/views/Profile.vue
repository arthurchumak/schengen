<template>
  <div>
    <form>
      <div class="field">
        <label class="label">Почта</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" disabled :value="$store.state.auth.user.email">
        </div>
      </div>
      <div class="field">
        <label class="label">Дней пребывания</label>
        <div class="control">
          <input class="input" type="number" max=180 min=1 placeholder="Text input" v-model="limit">
        </div>
      </div>
      
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-success" @mousedown="save">Сохранить</button>
        </p>
        <p class="control">
          <button class="button is-danger" @mousedown="$router.push('/')">Отмена</button>
        </p>
        <p class="control">
          <button class="button is-info" @mousedown="logout">Выйти</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    this.sdk.getLimit().on("value", snapshot => {
      this.limit = snapshot.val();
    });
  },
  data() {
    return {
      limit: 0
    };
  },
  methods: {
    save() {
      this.sdk.setLimit(this.limit);
      this. $router.push('/');
    },
    logout() {
      this.auth.logout();
    }
  }
};
</script>