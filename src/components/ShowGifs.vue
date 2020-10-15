<template>
  <v-container>
    <v-model v-if="Gifs == 0">
      <h1 id="empty">Poxa, não encontramos gifs com esses termos :/</h1>
    </v-model>
    <v-row>
      <v-col
        cols="3"
        class="white"
        v-for="gifAtual in Gifs.slice(0, numeroDeGifs)"
        :key="gifAtual.id"
      >
        <v-card>
          <v-card-title>{{ gifAtual.title }}</v-card-title>
          <v-btn icon color="grey" @click="addFavoriteGif">
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-img
            :src="gifAtual.source"
            aspect-ratio="1"
            class="grey lighten-2"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="showBtnLoadMore">
      <v-col><v-btn @click="moreGifs">Carregar mais</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["Gifs", "showBtnLoadMore"],

  data: () => ({
    numeroDeGifs: 5
  }),

  methods: {
    moreGifs() {
      this.numeroDeGifs = this.numeroDeGifs + 5;
    }
  }
};
</script>

<style>
#empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  font-size: 72;
  font-weight: 800;
  color: grey;
}
</style>