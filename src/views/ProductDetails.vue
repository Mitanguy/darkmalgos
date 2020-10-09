<template>
    <div class="product">
        <img :src="product.image" alt="">
        <p>{{product.title}}</p>
        <div>{{product.description}}</div>
        <span>{{product.price}}</span>
    </div>
</template>

<script>
import getProduct from "../mixins/api-products.js"

export default {
    name: 'ProductDetails',
    props: {
        id: String
    },
    mixins: [getProduct],
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        console.log(this.id);
        this.getProduct(this.id).then(data => this.product = data)
    }
}
</script>

<style>

</style>