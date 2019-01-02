<template>
    <div class="separator">{{this.moment(this.end).diff(this.moment(this.start), "days") + (this.end && this.start ? 1 : 0)}} дней</div>
</template>

<script>
export default {
    props: ["start", "end"],
}
</script>

<style scoped>
.separator {
    display: inline-block;
    width: 100px;
    margin: 0em 1em;
    border-bottom: 2px solid black;
    font-size: 0.75em;
    position: relative;
    bottom: 15px;
}
</style>
