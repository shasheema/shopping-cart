<template>
    <div id="product-page" class="card">
       <div class="card-body">
           <h5 class="card-title">{{ currentProduct.name }}</h5>
           <img :src="currentProduct.image" :alt="currentProduct.name" width="500px">

           <p class="card-text">Price: Rs.<b>{{ currentProduct.price.toFixed(2) }}</b></p>

           <button
                   class="btn mt-3"
                   :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
                   @click="addToCart(currentProduct.id)"
                   :disabled="!inCartQuantity">
               {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
           </button>


       </div>
   </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        props: ["product"],
        components: {
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters({
                currentProduct: "getProduct",
            }),
            inCartQuantity() {
                return this.currentProduct.quantity;
            }
        },
        created(){

            //this.$store.dispatch("fetchProduct");
            let productId = this.$route.params.id;
            this.getProduct(productId);
        },

        methods: {
            ...mapActions([
                'addProduct',
                'showOrHiddenModal',
            ]),

            addToCart(id){
                this.$store.dispatch("addToCart", id);
            },
            getProduct(productId){
                this.$store.dispatch("getProduct", productId);
            }
        },

    };
</script>
<style>
    #product-page.card{
        width: 60%;
        margin: 0 auto;
    }
    .card {
        min-height: 380px;
    }
</style>
