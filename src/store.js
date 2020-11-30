import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isEasyMode: false,
  },
  mutations: {
    toggleEasyMode(state) {
      state.isEasyMode = !state.isEasyMode;
    },
  },
  plugins: [createPersistedState({
    key: 'sk8dice',
    paths: [
      'isEasyMode',
    ],
  })],
});
