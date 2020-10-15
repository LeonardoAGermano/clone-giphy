<template>
  <v-container>
    <v-row>
      <v-col cols="9" class="white pl-16">
        <v-text-field
          label="Pesquise por Gifs aqui"
          v-model="queroGif"
          hint="Por exemplo, trending ou gifs de gatinho 🐱"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="white pt-8 p">
        <v-btn class="secondary" @click="getByName">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="resultsFor">
      <span style="grey">Resultados para {{ queroGif }}</span>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["resultsFor"],

  data: () => ({
    queroGif: ""
  }),

  methods: {
    getByName() {
      this.$emit("Pesquisou", this.queroGif);
    }
  }
};
</script>