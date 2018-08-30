<template>
    <div>
        <el-date-picker v-model="dates" type="daterange" size="small" :picker-options="dateRangeOptions"></el-date-picker>
        <el-button size="small">{{this.dates.length && days}}</el-button>
        <el-button v-if="trip" size="small" @click="remove">Remove</el-button>
        <el-button v-else size="small" @click="add">Add</el-button>
    </div>
</template>

<script>
import uuid from "uuid/v1";
export default {
    props: ["trip"],
    data() {
        return {
            dates: this.trip && this.trip.dates || [],
            dateRangeOptions: {
                firstDayOfWeek: 1,
                disabledDate: (date) => {
                    return this.$store.getters.dateRanges.some((dates) => {
                        const momentDate = this.moment(date)
                        return momentDate.isBetween(...dates, null, "[]") || momentDate.isAfter(this.moment());
                    });
                }
            }
        }
    },
    computed: {
        days() {
            const [start, end] = this.dates;
            return this.moment(end).diff(this.moment(start), "days") + 1;
        }
    },
    methods: {
        add() {
            this.$store.commit("addTrip", {
                id: uuid(),
                dates: this.dates,
                days: this.days
            })
            this.dates = [];
        },
        remove() {
            this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                this.$store.commit("removeTrip", this.trip.id);
                }).catch();
        }
    }
}
</script>
