<template>
    <div>
        <h2 class="title is-2">Новая поездка</h2>

        <p>
            <input type="date" v-model="dates[0]" :max="dates[1]">
            <Days :start="this.dates[0]" :end="this.dates[1]"/>
            <input type="date" v-model="dates[1]" :min="dates[0]">
        </p><br>

        <div class="field is-grouped">
            <p class="control">    
                <button class="button is-success" :disabled="!(dates[0] && dates[1])" @click="save">Добавить</button>
            </p>
        </div>    
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
