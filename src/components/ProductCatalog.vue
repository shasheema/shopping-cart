<template>
    <div class="container">
        <h2 class="my-2">Products</h2>
        <div class="row">
           <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2">
               <single-product :product="product"></single-product>
           </div>
       </div>
   </div>
</template>

<script>
    import SingleProduct from "./SingleProduct"
    export default{
        components: {
            SingleProduct
        },
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
        created(){
            this.$store.dispatch("fetchProducts");
        }
    }
</script>
