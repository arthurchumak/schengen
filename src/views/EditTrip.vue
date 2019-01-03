<template>
    <div>
        <h1>Редактор</h1>

        <div v-if="trip">
            <input type="date" v-model="trip.dates[0]" :max="trip.dates[1]">
            <Days :start="trip.dates[0]" :end="trip.dates[1]"/>
            <input type="date" v-model="trip.dates[1]" :min="trip.dates[0]">
        </div>
        <div v-else>Not Found</div>

        <button @click="save">Сохранить</button>
        <button @click="remove">Удалить</button>
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
            trip: null,
        };
    },
    methods: {
        save() {
            this.$store.commit("removeTrip", this.trip.id);
            this.$store.commit("addTrip", {
                id: uuid(),
                dates: this.trip.dates,
            })
            this.$router.go(-1);
        },
        remove() {
            if (confirm('This will permanently delete the trip. Continue?')) {
                this.$store.commit("removeTrip", this.trip.id);
                this.$router.go(-1);
            }
        }
    }
}
</script>

<style scoped>

</style>
