import { shallowMount } from "@vue/test-utils";
import Cart from "@/components/Cart.vue";

describe("Cart.vue" , () => {
    it('sets the correct default data', () => {
        expect(typeof Cart.data).toBe('function')
        const defaultData = Cart.data()
        expect(defaultData.discount).toBe(0)
    })
});


