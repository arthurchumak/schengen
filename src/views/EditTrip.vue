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
import Days from "@/components/Days";
import {SchengenCalculator} from "@/Calculator/Shengen"
import {mapGetters} from "vuex";

export default {
    props: ['title'],
    components: {Days},
    created() {
        this.trip = this.sdk.getTrip(this.$route.params.id)
    },
    data() {
        return {
            trip: null,
        };
    },
    methods: {
        save() {
            this.sdk.updateTrip(this.trip.id, this.trip.dates);
            this.$router.go(-1);
        },
        remove() {
            if (confirm('This will permanently delete the trip. Continue?')) {
                this.sdk.removeTrip(this.trip.id);
                this.$router.go(-1);
            }
        }
    }
}
</script>

<style scoped>

</style>
