<template>
  <v-container class="home">
    <h1>Giphy</h1>
    <SearchGifs @Pesquisou="searchGifs" :resultsFor="resultsFor" />
    <v-row v-if="showTrendingHeader">
      <v-col cols="9">
        <h1>Trending</h1>
      </v-col>
      <v-col cols="3">
        <v-btn depressed class="white ml-6 mt-3" to="/trending">Ver tudo</v-btn>
      </v-col>
    </v-row>
    <ShowGifs
      v-if="Gifs.hasOwnProperty('data')"
      :Gifs="Gifs.data"
      :showBtnLoadMore="showBtnLoadMore"
    />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchGifs from "@/components/SearchGifs.vue";
import ShowGifs from "@/components/ShowGifs.vue";

export default {
  name: "Home",
  components: {
    SearchGifs,
    ShowGifs
  },

  data: () => ({
    Gifs: {},
    showTrendingHeader: true,
    showBtnLoadMore: false,
    resultsFor: false
  }),

  created() {
    this.getTrends();
  },

  methods: {
    async searchGifs(searchTerm) {
      let response = await this.$store.dispatch("getGifs", {
        termoPesquisado: searchTerm
      });
      this.Gifs = response.data;
      console.log(response);
      this.showTrendingHeader = false;
      this.showBtnLoadMore = true;
      this.resultsFor = true;
    },

    async getTrends() {
      let response = await this.$store.dispatch("getTrends");
      this.Gifs = response.data;
      console.log(response);
    }
  }
};
</script>


