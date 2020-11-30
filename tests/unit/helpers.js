/* eslint-disable */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

export function testDieFaces(component) {
  const wrapper = shallowMount(component, {
    localVue,
    store,
    propsData: {
      selectedSideIndex: 0,
    },
  });

  expect(wrapper.vm.sides).toBe(wrapper.vm.standardModeFaces);

  store.state.isEasyMode = true;

  expect(wrapper.vm.sides).toBe(wrapper.vm.easyModeFaces);
}
