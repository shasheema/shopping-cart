<template>
    <div class="container">
        <h2 class="my-2">Cart <span class="badge badge-secondary">{{cartSize}} products</span></h2>
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert">
            Cart is empty! Please add some products.
        </div>
        <table v-else class="table table-striped mb-5">
          <thead class="table-head">
            <tr>
              <th scope="col" id="num-heading">#</th>
              <th scope="col" class="product-column">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-body" v-for="(product, index) in cart" :key="product.id">
              <th class="number" scope="row">{{index + 1}}</th>
              <td>{{product.name}}</td>
              <td>Rs {{product.price.toFixed(2)}}</td>
              <td>
                  <button
                      @click="removeFromCart(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button
                      @click="addToCart(product.id)"
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </td>
              <td><button
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-small">
                  Delete
              </button></td>
              <td class="total">Rs {{(product.quantity* product.price).toFixed(2)}}</td>
            </tr>

            <tr class="table-footer">
                <td colspan="5" class="total">Sub Total:</td>
                <td>Rs {{cartTotalAmount.toFixed(2)}}</td>
            </tr>
            <tr class="table-footer">
                <td colspan="5" class="total">Discount:</td>
                <td>Rs
                {{cartTotalAmount>=500 ? cartDiscountAmount.toFixed(2): discount.toFixed(2)}}
                </td>
            </tr>
            <tr class="table-footer">
                <td colspan="5" class="total">VAT:</td>
                <td>Rs {{cartVatAmount.toFixed(2)}}</td>
            </tr>

            <tr class="table-footer">
                <td colspan="5" class="total">Order Total:</td>

                <td>Rs {{ cartTotalAmount>=500 ?
                    ((cartTotalAmount + cartVatAmount) - cartDiscountAmount).toFixed(2):
                    ((cartTotalAmount + cartVatAmount) - discount).toFixed(2)
                    }}</td>
            </tr>
          </tbody>
        </table>
        <router-link to="/checkout" class="btn btn-primary checkout">Checkout</router-link>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data() {
            return{
                discount: 0,
            };
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters([
                "cartSize",
                "cartTotalAmount",
                "cartDiscountAmount",
                "cartVatAmount",
            ])
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        }
    }
</script>

<style scoped>
    .table-footer{
        font-size: 1.2em;
        font-weight: bold;
        text-align: right;
    }

    .total{
        text-align: right;
    }
    .table-head{
        background-color: #343a40;
        color: white;
    }
    .checkout{
        float: right;
        color: #FFFFFF;
        text-decoration: none;
        width: 120px;
        height: 30px;
        border-radius: 18px;
        background-color: #047a9c;
        cursor: pointer;
        font-size: 16px;
        box-shadow: none;
        font-weight: 500;
        border: none;
    }
    .btn-danger{
        color: #FFFFFF;
        text-decoration: none;
        width: 70px;
        height: 30px;
        border-radius: 18px;
        cursor: pointer;
        font-size: 12px;
        box-shadow: none;
        font-weight: 500;
        border: none;
    }
</style>
