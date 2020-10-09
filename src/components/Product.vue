<template>
    <div class="product">
        <img :src="product.image" alt="">
        <p>{{product.title}}</p>
        <div>{{product.description}}</div>
        <span>{{product.price}}</span>
    </div>
</template>

<script>

    export default {
        name: "Product",
        props:{
            product: Object
        }

    }
</script>

<style scoped>
 img{
     width: 50px;
 }
</style>