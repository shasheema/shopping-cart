import { shallowMount, createLocalVue } from "@vue/test-utils";
import Cart from "@/components/Cart.vue";
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Cart.vue" , () => {
    it('sets the correct default data', () => {
        expect(typeof Cart.data).toBe('function')
        const defaultData = Cart.data()
        expect(defaultData.discount).toBe(0)
    })
});


