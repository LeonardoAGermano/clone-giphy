<template>
  <div class="trending">
    <v-btn depressed class="white" to="/">Voltar ao início</v-btn>
    <h1></h1>
    <p>Veja os gifs mais populares de agora!</p>
    <ShowGifs :showBtnLoadMore="true" />
    <SearchGifs />
  </div>
</template>

<script>
import SearchGifs from "@/components/SearchGifs.vue";
import ShowGifs from "@/components/ShowGifs.vue";

export default {
  name: "Trending",
  components: {
    ShowGifs,
    SearchGifs
  },

  data: () => ({
    Gifs: {}
  })
};
</script>