<template>
    <div class="trip">
        <input type="date" v-model="dates[0]" :max="dates[1]">
        <!-- <span>{{dates[0]}}</span> -->
        <Days :start="this.dates[0]" :end="this.dates[1]"/>
        <!-- <span>{{dates[1]}}</span> -->
        <input type="date" v-model="dates[1]" :min="dates[0]">
        <a v-if="trip" size="small" @click="remove">✕</a>
        <button v-else size="small" @click="add">+</button>
    </div>
</template>

<script>
import uuid from "uuid/v1";
import Days from "./Days";
export default {
    props: ["trip"],
    components: {Days},
    data() {
        return {
            dates: this.trip && this.trip.dates || [],
        }
    },
    methods: {
        add() {
            this.$store.commit("addTrip", {
                id: uuid(),
                dates: this.dates,
            })
            this.dates = [];
        },
        remove() {
            if (confirm('This will permanently delete the trip. Continue?')) {
                this.$store.commit("removeTrip", this.trip.id);
            }
        }
    }
}
</script>

<style scoped>
.trip:nth-child(even) {
    background: lightgray;
}
</style>
