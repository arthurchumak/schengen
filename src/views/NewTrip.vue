<template>
    <div>
        <h1>Новая поездка</h1>

        <div>

        <input type="date" v-model="dates[0]" :max="dates[1]">
        <!-- <span>{{dates[0]}}</span> -->
        <Days :start="this.dates[0]" :end="this.dates[1]"/>
        <!-- <span>{{dates[1]}}</span> -->
        <input type="date" v-model="dates[1]" :min="dates[0]">
        </div>

        <button :disabled="!dayjs(dates[0]).isBefore(dates[1])" @click="save">Добавить</button>
    </div>
</template>

<script>
import uuid from "uuid/v1";
import Days from "@/components/Days";
import {SchengenCalculator} from "@/Calculator/Shengen"
import {mapGetters} from "vuex";

export default {
    props: ['title'],
    components: {Days},
    created() {
        this.trip = this.$store.state.trips.all.find(({id}) => id === this.$route.params.id)
    },
    data() {
        return {
            id: '',
            dates: [],
        }
    },
    methods: {
        save() {
            this.sdk.newTrip(this.dates);
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>
