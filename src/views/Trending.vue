<template>
  <div class="trending">
    <v-btn depressed class="white" to="/">Voltar ao início</v-btn>
    <h1></h1>
    <p>Veja os gifs mais populares de agora!</p>
    <ShowGifs
      v-if="Gifs.hasOwnProperty('data')"
      :Gifs="Gifs.data"
      :showBtnLoadMore="true"
    />
  </div>
</template>

<script>
import ShowGifs from "@/components/ShowGifs.vue";

export default {
  name: "Trending",
  components: {
    ShowGifs
  },

  data: () => ({
    Gifs: {}
  }),

  created() {
    this.getTrends();
  },

  methods: {
    async getTrends() {
      let response = await this.$store.dispatch("getTrends");
      this.Gifs = response.data;
      console.log(response);
    }
  }

};
</script>