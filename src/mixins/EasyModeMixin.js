import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isEasyMode']),
    sides() {
      return this.isEasyMode ? this.easyModeFaces : this.standardModeFaces;
    },
  },
};
