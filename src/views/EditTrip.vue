<template>
  <div>
    <h1>Редактор</h1>

    <div v-if="dates">
      <input type="date" v-model="dates[0]" :max="dates[1]">
      <Days :start="dates[0]" :end="dates[1]"/>
      <input type="date" v-model="dates[1]" :min="dates[0]">
    </div>
    <div v-else>Not Found</div>

    <button @click="save">Сохранить</button>
    <button @click="remove">Удалить</button>
  </div>
</template>

<script>
import Days from "@/components/Days";
import { SchengenCalculator } from "@/Calculator/Shengen";
import { mapGetters } from "vuex";

export default {
  props: ["title"],
  components: { Days },
  created() {
    this.sdk.getTrip(this.$route.params.id).once("value", snapshot => {
      this.dates = snapshot.val();
    });
  },
  data() {
    return {
      dates: []
    };
  },
  methods: {
    save() {
      this.sdk.updateTrip(this.$route.params.id, this.dates);
      this.$router.go(-1);
    },
    remove() {
      if (confirm("This will permanently delete the  Continue?")) {
        this.sdk.removeTrip(this.$route.params.id);
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style scoped>
</style>
