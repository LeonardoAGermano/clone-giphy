<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon @click="ativarMenu">mdi-menu</v-icon>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  methods: {
    ativarMenu() {
      console.log("MENU ATIVO");
    }
  }
};
</script>
