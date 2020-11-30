import StanceDie from '@/components/StanceDie.vue';
import { testDieFaces } from './helpers';

describe('SpinDegreeDie.vue', () => {
  it('shows correct die faces depending on mode', () => {
    testDieFaces(StanceDie);
  });
});
