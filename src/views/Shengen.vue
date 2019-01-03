<template>
    <div>
        <h1>осталось {{left}} дней</h1>
        <span>въезд <input type="date" v-model="date"></span>
        <hr>
        <h2>Поездки</h2>
        <div id="trips">
            <div v-for="trip of $store.getters.sortedTrips" :key="trip.id" @mousedown="$router.push({name: 'EditTrip', params: {id: trip.id}})">
                <Trip :trip="trip"/>
            </div>
            <div @click="$router.push({name: 'NewTrip'})">+</div>
        </div> 
    </div>
</template>

<script>
import Trip from "@/components/Trip"
import {SchengenCalculator} from "@/Calculator/Shengen"
import {mapGetters} from "vuex";

export default {
    components: {Trip},
    data() {
        return {
            date: "",
        }
    },
    computed: {
        ...mapGetters(["dateRanges"]),
        calculator() {
            const sc = new SchengenCalculator();

            for (let range of this.dateRanges) {
                sc.addByRange(...range);
            }

            return sc;
        },
        left() {
            return this.calculator.countFrom(this.date);
        }
    },
    watch: {
        date:  {
            handler: function (val, oldVal) {
                if (!val) {
                    this.date = this.dayjs().format('YYYY-MM-DD');
                }
            },
            immediate: true
        }
    }
}
</script>

<style scoped>

#trips * {
    padding: 0.5em;
}
</style>
