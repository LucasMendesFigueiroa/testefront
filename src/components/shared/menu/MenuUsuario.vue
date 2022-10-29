<template>
  <div>
    <v-sheet
      rounded="xl"
      class="d-flex"
      color="blue-grey lighten-1"
      elevation="8"
      height="200"
      width="700px"
    >
      <user
        v-if="!visualiza"
        class="d-flex justify-center align-self-center"
        cor="blue"
        :nome="nome"
      >
      </user>
      <formu @forme="formulario" v-else></formu>
    </v-sheet>
  </div>
</template>

<script lang="ts">
//import calendarioVue from "@/components/calendario.vue";
import Vue from "vue";

import Usuario from "@/components/shared/usuario/Usuario.vue";
import FormeUsuario from "./FormeUsuario.vue";
export default Vue.extend({
  name: "Home",

  components: {
    user: Usuario,
    formu: FormeUsuario,
  },

  data() {
    return {
      nome: "",
      visualiza: true,
    };
  },

  methods: {
    formulario(form: []) {
      console.log(form);
      this.nome = form[0];
      this.visualiza = false;
      this.$emit("nome", this.nome);
    },
  },
});
</script>
<style scoped></style>
