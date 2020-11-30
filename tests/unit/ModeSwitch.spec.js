import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ModeSwitch from '@/components/ModeSwitch.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ModeSwitch.vue', () => {
  it('can toggle warm-up mode', () => {
    const wrapper = shallowMount(ModeSwitch, {
      localVue,
      store,
    });
    const modeSwitch = wrapper.find('.mode__switch');

    expect(store.state.isEasyMode).toBe(false);

    modeSwitch.trigger('click');

    expect(store.state.isEasyMode).toBe(true);
  });
});
