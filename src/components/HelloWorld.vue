<template>
  <v-container>
    <v-row>
      <v-col cols="9" class="white pl-16">
        <v-text-field
          label="Pesquise por Gifs aqui"
          v-model="queroGif"
          hint="Por exemplo, trending ou gifs de gatinho 😻"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="white pt-8 p">
        <v-btn class="secondary" @click="getByName">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" class="primary" v-for="gifAtual in Gifs.data.slice(0,5)" :key="gifAtual.id">
        <v-card>
          <v-card-title>{{gifAtual.title}}</v-card-title>

          <v-img :src="gifAtual.source" aspect-ratio="1" class="grey lighten-2"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    console.log(this.Gifs.data);
  },

  data: () => ({
    queroGif: "",

    Gifs: {
      data: []
    }
  }),
  methods: {
    pesquisarGif() {
      console.log("Pesquisou por " + this.queroGif);
    },

    async getByName() {
      let response = await this.$store.dispatch("getGifs", {
        termoPesquisado: this.queroGif
      });
      this.Gifs = response.data;
      console.log(response);
    }
  }
};
</script>

<style scoped></style>
