import SpinDegreeDie from '@/components/SpinDegreeDie.vue';
import { testDieFaces } from './helpers';

describe('SpinDegreeDie.vue', () => {
  it('shows correct die faces depending on mode', () => {
    testDieFaces(SpinDegreeDie);
  });
});
