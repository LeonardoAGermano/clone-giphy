import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
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
