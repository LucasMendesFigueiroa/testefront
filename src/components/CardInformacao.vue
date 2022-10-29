<template>
  <div class="painel" test-id="card-informacao-label">
    <div class="formulario">
      <div>
        <label> {{ titulo[0] }} {{ formulario.titulo }} </label>
      </div>
      <div>
        <label> {{ titulo[1] }} {{ formulario.nome }} </label>
      </div>
      <div>
        <label> {{ titulo[2] }} {{ formulario.tempo }} </label>
      </div>
      <div>
        <label> {{ titulo[3] }} {{ formulario.descricao }} </label>
      </div>
    </div>

    <button class="botao" @click="apaga()">Apagar</button>
    <button class="botaoed" @click="edita()">Editar</button>

    <div v-if="visivel">
      <formlog @forme="editar" :formulario="formulario" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import LogHora from "@/domain/LogHora/LogHora";
import FormLogHoras from "../components/FormLogHoras.vue";

export default {
  props: ["formulario", "index"],
  components: {
    formlog: FormLogHoras,
  },

  data() {
    return {
      visivel: false,
      titulo: [
        "Titulo : ",
        "Nome : ",
        "Tempo Gasto em minutos :",
        "Descrição :",
      ],
    };
  },
  methods: {
    apaga() {
      this.$emit("apagar", [this.index, this.formulario]);

      return;
    },
    edita() {
      this.visivel = true;
      //this.$emit("editar", true);

      return;
    },
    editar(ad: []) {
      this.troca(ad[1], ad[2]);
      this.visivel = false;
      this.$emit("editar", ad);

      return;
    },
    troca(ad1: any, ad2: any) {
      ad2.titulo = ad1.titulo;
      ad2.nome = ad1.nome;
      ad2.tempo = ad1.tempo;
      ad2.descricao = ad1.descricao;
    },
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 98%;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.formulario {
  text-align: start;
  font-size: 1em;
  margin: 5px;
  display: block;
}
.formulario input,
.formulario textarea {
  border: solid 0.5px;
  width: 98%;
}
.botao,
.botaoed {
  display: inline-block;
  padding: 5px;
  border-radius: 1px;
  margin: 5px;
  font-size: 1em;
}
.botao {
  background: rgb(202, 74, 51);
  color: white;
}

.botaoed {
  background: rgb(215, 145, 39);
  color: white;
}
</style>
