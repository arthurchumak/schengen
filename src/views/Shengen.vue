<template>
    <div>
        <h2>
            {{left}} days left at
            <el-button @click="sub">{{"<"}}</el-button>
            <el-date-picker
                v-model="date"
                type="date"
                placeholder="Pick a day">
            </el-date-picker>
            <el-button @click="add">></el-button>
            <el-button @click="today">Today</el-button>
        </h2>
        <Trip v-for="trip of $store.getters.sortedTrips" :key="trip.id" :trip="trip"/>
        <Trip/>
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
            date: new Date()
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
    methods: {
        sub() {
            this.date = this.moment(this.date).add(-1, "day");
        },
        add() {
            this.date = this.moment(this.date).add(1, "day");
        },
        today() {
            this.date = new Date();
        }
    }
}
</script>
