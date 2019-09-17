<template>
    <div id="app">
        <div class="row" id="shop">
            <div class="col-md-7"> <PrductCatalog></PrductCatalog></div>
            <div class="col-md-5"><Cart></Cart></div>
        </div>
    </div>
</template>

<script>
    import PrductCatalog from './ProductCatalog'
    import Cart from './Cart'

    export default {
        name: 'app',
        components: {
            PrductCatalog,
            Cart,
        },

        methods: {
            hideToast() {
                this.$store.commit("hideToast");
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        margin-top: 60px;
    }
    .row{
        margin-right: 0;
        margin-left: 0;
    }
    #shop .table-footer{
        font-size: 0.7em;
        font-weight: bold;
    }
    #shop .table-body{
        font-size: 0.7em;
    }
    #shop .product-column{
        width: 125px;
    }
    #shop .btn{
        font-size: 12px;
    }
</style>
