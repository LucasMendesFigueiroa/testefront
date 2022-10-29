<template>
  <div class="card">
    <form @submit.prevent="grava()">
      <div>
        <div>
          <div class="formulario" :class="estilo">
            <label>Digite seu nome</label>
            <input test-id="forme-nome" v-model="nome" type="text" />
          </div>
        </div>

        <div>
          <button class="botao" type="submit">Entrar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: "Form",

  props: [],

  components: {},
  data() {
    return {
      nome: "",
      tempo: null,
      descricao: "",
      validacao: false,
      estilo: "card-padrao",
      visivel: false,
    };
  },

  methods: {
    grava() {
      const l = [this.nome];

      this.$emit("forme", l);

      this.nome = null;
    },
    estilos() {
      if (this.estilo == "padrao" || !this.estilo) return "card-padrao";
      if (this.estilo == "perigo") return "card-perigo";
    },
  },
};
</script>
<style scoped>
.card-perigo {
  display: block;
  color: rgb(255, 0, 0);
  background: rgba(250, 193, 193, 0.995);
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
.card {
  padding: 0 auto;

  display: inline-block;
  margin: 1px;

  width: 99%;
  height: 100%;
  vertical-align: top;
  text-align: center;
}
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
  background: darkcyan;
  color: white;
}
</style>
