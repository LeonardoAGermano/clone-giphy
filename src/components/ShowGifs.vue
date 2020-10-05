<template>
  <v-container>
    <span>hahaha</span>
    <v-row>
      <v-col
        cols="3"
        class="white"
        v-for="gifAtual in Gifs.slice(0, numeroDeGifs)"
        :key="gifAtual.id"
      >
        <v-card>
          <v-card-title>{{ gifAtual.title }}</v-card-title>

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
    <span>{{ showBtnLoadMore }}</span>
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