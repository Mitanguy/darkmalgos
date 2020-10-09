<template>
    <div class="modal">
        <slot></slot>
        <div class="btn__wrapper">
            <button @click="cancel">No</button>
            <button @click="validate">Ok</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props:{
            validate:Function,
            cancel:Function,
        }
    }
</script>

<style scoped>
    .modal{
        border: 1px solid black;
        border-radius: 25px;

    }


</style>