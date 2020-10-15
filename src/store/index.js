import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { favoritedGifs: [] },
  getters: {
    favoritedGifs(state) {
      return state.favoritedGifs;
    },
  },
  mutations: {
    addFavoriteGif(state, payload) {
      console.log('payload',payload);

      state.favoritedGifs.push(payload);
      console.log(state.favoritedGifs);
    },

    removeFavoriteGif(state, payload) {
      let index = state.favoritedGifs.indexOf(payload)
      state.favoritedGifs.splice(index, 1);
      console.log(state.favoritedGifs);
    },
  },
  actions: {
    async getTrends(context, payload) {
      console.log(context);
      console.log(payload);
      try {
        const tasksResponse = await axios.get("/gifs/trending", {
          params: {
            api_key: "9FAHqzA6o0qe4s60YgnwbFHPZYWy1f32",
          },
        });

        return tasksResponse;
      } catch (error) {
        console.log(error);
      }
    },

    async getGifs(context, payload) {
      console.log(context);
      console.log(payload);
      try {
        const tasksResponse = await axios.get("/gifs/search", {
          params: {
            q: payload.termoPesquisado,
            api_key: "9FAHqzA6o0qe4s60YgnwbFHPZYWy1f32",
            limit: 15,
          },
        });

        return tasksResponse;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
