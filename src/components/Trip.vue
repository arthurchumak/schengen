<template>
    <div class="trip">
        <span>{{dates[0]}}</span>
        <Days :start="this.dates[0]" :end="this.dates[1]"/>
        <span>{{dates[1]}}</span>
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
    }
}
</script>

<style scoped>
.trip:nth-child(even) {
    background: lightgray;
}
</style>
