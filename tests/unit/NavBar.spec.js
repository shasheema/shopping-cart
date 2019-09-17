import {createLocalVue, mount} from "@vue/test-utils";
import Cart from "@/components/Cart.vue";
import Shop from "@/components/Shop.vue";
import VueRouter from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import route from "../../src/router/index.js";
import Product from "../../src/components/Product";

const localVue = createLocalVue();

localVue.use(VueRouter);

const routes = [{path: '/', component: Shop}, {path: '/checkout', component: Cart}, {path: '/product/:id', component: Product}];
const router = new VueRouter({
    routes
});

const wrapper = mount(route, {
    localVue,
    router
});


expect(wrapper.vm.$route).toBeInstanceOf(Object);

describe("NavBar.vue", () => {

    it('renders without errors', () => {
      expect(NavBar).toMatchSnapshot();
    });
});





