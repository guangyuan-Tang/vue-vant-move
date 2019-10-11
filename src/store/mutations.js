let mutations = {
  //loading操作
  showLoading(state) {
    state.globalLoading += 1;
  },
  hideLoading(state) {
    state.globalLoading -= 1;
  },
  resetLoading(state) {
    state.globalLoading = 0;
  },

};

export default mutations;
  