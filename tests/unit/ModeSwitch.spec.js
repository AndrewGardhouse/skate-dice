import { shallowMount } from '@vue/test-utils';
import ModeSwitch from '@/components/ModeSwitch.vue';

describe('ModeSwitch.vue', () => {
  it('can toggle warm-up mode', () => {
    const wrapper = shallowMount(ModeSwitch);
    const modeSwitch = wrapper.find('.mode__switch');

    expect(wrapper.vm.isEasyMode).toBe(false);

    modeSwitch.trigger('click');

    expect(wrapper.vm.isEasyMode).toBe(true);
  });
});
