<template>
    <div>
        <h1>{{title}}</h1>

        <input type="date" v-model="dates[0]" :max="dates[1]">
        <span class="separator">{{this.dates.length && days}} дней</span>
        <input type="date" v-model="dates[1]" :min="dates[0]">
        <p>
            <button v-if="trip" size="small" @click="remove">Удалить</button>
        </p>
        TRIP {{ $route.params.id }}
    </div>
</template>

<script>
import Trip from "@/components/Trip"
import {SchengenCalculator} from "@/Calculator/Shengen"
import {mapGetters} from "vuex";

export default {
    props: ['title'],
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

    }
}
</script>

<style scoped>

</style>
