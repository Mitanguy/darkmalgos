<template>
    <div class="button">
        <button :class="classList" @click="btnFunction"> {{name}} </button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            name:String,
            classList:String,
            btnFunction:Function,
        },

    }
</script>

<style scoped>

</style>