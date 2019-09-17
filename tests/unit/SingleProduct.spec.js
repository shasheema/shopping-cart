import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import SingleProduct from '@/components/SingleProduct';
import Actions from '../../src/store/store';

const localVue = createLocalVue();

localVue.use(Vuex);

describe("SingleProduct.vue" , () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            addToCart: jest.fn(),
            actionInput: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('calls store action "actionClick" when button is clicked', () => {
        const wrapper = shallowMount(Actions, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.addToCart).toHaveBeenCalled()
    })
});


