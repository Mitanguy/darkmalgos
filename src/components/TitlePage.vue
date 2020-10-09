<template>
    <div class="title__page">
        <h1>{{title}}</h1>
        <p v-if="subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
    export default {
        name: "TitlePage",
        props: {
            title:String,
            subtitle:String,
            // title2:{
            //     type: String,
            //     require: true,
            //     default:"Mon Titre"
            // },
            // myArray:Array,
            // myObject:Object,
            // myFunction:Function,
            // myNumber:Number,
            // myBoolean:Boolean
            // propriété possible
        }
    }
</script>

<style scoped>

</style>