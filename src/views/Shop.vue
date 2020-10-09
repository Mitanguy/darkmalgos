<template>
    <div class="shop">
        <h1>This is an Shop page</h1>
        <Product class="shop" v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script>
    import Product from "../components/Product"
    import getProduct from "../mixins/api-products.js"

   export default {
       name: 'Shop',
        components: {
            Product
        },
       mixins:[getProduct],
       data() {
           return {
               products: []
           }
       },
       mounted() {
           this.getProducts()
               .then(data => {
                   this.products = data
               })
       }
    }

</script>

