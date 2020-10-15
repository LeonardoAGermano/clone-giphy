<template>
  <div class="favorites">
    <v-btn depressed class="white" to="/">Voltar ao início</v-btn>
    <h1>Favoritos</h1>
    <v-container>
      <v-row>
        <v-col><p>Seus gifs favoritos estão aqui!</p></v-col>
        <v-col
          ><p>Basta desmarcar para que o gif saia dos seus favoritos.</p></v-col
        >
      </v-row>
    </v-container>
    <ShowGifs :showBtnLoadMore="true" />
  </div>
</template>

<script>
import ShowGifs from "@/components/ShowGifs.vue";

export default {
  name: "Favoritos",
  components: {
    ShowGifs
  },

  computed: {
    gifsFavoritos() {
      return this.store.getters.favoritedGifs;
    }
  },

  data: () => ({
    Gifs: {}
  })
};
</script>