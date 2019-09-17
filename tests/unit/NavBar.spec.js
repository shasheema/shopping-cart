import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {

    it('without component', () => {
      expect(NavBar).toMatchSnapshot();
    });

    // const $route = {
    //   path: '/shopping-cart'
    // }
    //
    // const wrapper = shallowMount(NavBar, {
    //   mocks: {
    //     $route
    //   }
    // })
    //
    // wrapper.vm.$route.path
});





