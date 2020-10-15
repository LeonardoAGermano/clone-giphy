<template>
  <v-container>
    
    <v-model v-if="Gifs.length == 0" >
      <h1 class="empty">Poxa, por enquanto não temos gifs assim por aqui 🤔</h1>
      <p class="empty">Tente pesquisar com outras palavras ou adicione gifs aos seus favoritos ;)</p>

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
          <v-btn v-if="favoritedGifs.includes(gifAtual)"
           icon color="red" @click="removeFavoriteGifFromStore(gifAtual)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn v-else icon color="grey" @click="addFavoriteGifToStore(gifAtual)">   
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
    <v-row v-if="showBtnLoadMore && Gifs.length>5">
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

  watch:{
    Gifs(newVal){

      console.log('gifs in show gifs!', newVal)
    }
  },

  mounted(){
    console.log(this.Gifs);
  },

  computed:{
    favoritedGifs(){
      return this.$store.getters.favoritedGifs;
    }
  
  },

  methods: {
    moreGifs() {
      this.numeroDeGifs = this.numeroDeGifs + 5;
    },

    addFavoriteGifToStore(gif){
      this.$store.commit("addFavoriteGif", gif);
    },

    removeFavoriteGifFromStore(gif){
      this.$store.commit("removeFavoriteGif", gif);
    }
  }
};
</script>

<style>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  font-size: 72;
  font-weight: 800;
  color: grey;
}
</style>