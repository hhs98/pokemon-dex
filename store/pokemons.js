export const state = () => ({
  search: ""
});

export const mutations = {
  updateSearch(state, text) {
    state.search = text;
  }
};
