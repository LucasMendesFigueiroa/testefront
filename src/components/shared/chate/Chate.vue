<template>
  <v-container>
    <v-row class="d-flex">
      <v-card class="mx-auto" max-width="720px">
        <v-card-title class="">
          <menuu @nome="usuario"></menuu>
        </v-card-title>

        <v-card-text>
          <v-list class="d-flex" v-for="(m, i) in mensagens" :key="i">
            <user cor="pink" :nome="m.getNome()"></user>

            <cardmensagem cor="pink">
              <span
                class="ml-4 mr-4 mt-4 my-4 d-flex justify-xl-start align-center"
              >
                {{ m.getMensagem() }}
              </span>
            </cardmensagem>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <dmensagem @mensagem="enviar"></dmensagem>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MenuUsuario from "@/components/shared/menu/MenuUsuario.vue";
import DigitaMensagem from "../mensagem/DigitaMensagem.vue";
import CardMensagensVue from "../mensagem/CardMensagens.vue";
import UsuarioVue from "../usuario/Usuario.vue";
import Chat from "@/domain/chate/Chat.ts";

export default Vue.extend({
  name: "Home",
  props: [],
  components: {
    menuu: MenuUsuario,
    dmensagem: DigitaMensagem,
    cardmensagem: CardMensagensVue,
    user: UsuarioVue,
  },

  data() {
    return {
      nome: "",
      mensagens: [],
    };
  },
  methods: {
    usuario(nome: string) {
      this.nome = nome;
    },

    async obterChats() {
      const resp = await (
        await fetch(`https://localhost:5001/api/Chat`)
      ).json();

      //this.mensagens = resp.map((item: any) => {
      // const chat = new Chat(item.nome);
      // chat.setMensagem(item.mensagem);
      // return chat;
      // });
    },

    async enviar(mensagem: string) {
      let chat = new Chat(this.nome);
      chat.setMensagem(mensagem);
      await fetch("https://localhost:5001/api/Chat", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chat),
      });
    },
  },
  mounted() {
    this.obterChats();
    // Listen to score changes coming from SignalR events
    this.$chatsHub.startSignalR();
    this.$chatsHub.onUpdateChats((item: any) => {
      const chat = new Chat(item.nome);
      chat.setMensagem(item.mensagem);
      this.mensagens.push(chat);
    });
  },
});
</script>

<style scoped></style>
