<template>
    <div class="trip box" @mousedown="$router.push({name: 'EditTrip', params: {id: trip.id}})">
        <span>{{dates[0]}}</span>
        <Days :start="this.dates[0]" :end="this.dates[1]"/>
        <span>{{dates[1]}}</span>
    </div>
</template>

<script>
import Days from "./Days";
export default {
    props: ["trip"],
    components: {Days},
    data() {
        return {
            dates: this.trip && this.trip.dates || [],
        }
    },
}
</script>

<style scoped>
.trip {
    display: flex;
    justify-content: space-around;
}
</style>
