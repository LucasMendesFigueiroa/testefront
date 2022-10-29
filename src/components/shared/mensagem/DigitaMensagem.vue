<template>
  <v-container>
    <v-textarea
      label="Digite sua mensagem"
      auto-grow
      outlined
      shaped
      color="green"
      v-model="mensagem"
    >
    </v-textarea>
    <v-btn elevation="2" @click="envia"> Enviar</v-btn>
  </v-container>
</template>

<script lang="ts">
import MensagensService from "@/domain/chate/MensagensService.ts";

export default {
  props: [],

  data() {
    return {
      mensagem: "",
    };
  },

  methods: {
    envia() {
      this.$emit("mensagem", this.mensagem);
      this.mensagem = "";
    },
  },
};
</script>

<style scoped></style>
