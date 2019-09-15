<template>
    <div class="card">
       <div class="card-body">
           <h5 class="card-title">{{product.name}}</h5>
           <p class="card-text">Price: <b>Rs{{product.price}}</b></p>
           <img :src="product.image" :alt="product.name" width="150px">

           <router-link class="btn btn-primary mt-3" :to="{ name: 'product', params: {id: product.id } }">View Product
           </router-link>

           <button
               class="btn mt-3"
               :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
               @click="addToCart(product.id)"
               :disabled="!inCartQuantity">
               {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
           </button>


       </div>
   </div>
</template>

<script>
    export default{
        props: ["product"],
        computed: {
            inCartQuantity() {
                return this.product.quantity;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch("addToCart", id);
            },
            getProduct(id){
                this.$store.dispatch("getProduct", id);
            }
        }
    }
</script>
<style scoped>
    .btn.btn-primary a{
        color: #FFFFFF;
        text-decoration: none;
    }
    .btn-primary{
        margin-right: 10px;
    }
    .card img{
        margin: 0 20%;
    }
</style>
