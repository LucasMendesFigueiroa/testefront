<template>
  <div class="card">
    <form @submit.prevent="grava()">
      <div>
        <div>
          <div class="formulario" :class="estilo">
            <label>Digite o titulo da sua Task</label>
            <input
              test-id="forme-titulo"
              v-model="titulo"
              type="text"
              :placeholder="formulario.titulo"
            />
          </div>
          <div class="formulario" :class="estilo">
            <label>Digite seu nome</label>
            <input
              test-id="forme-nome"
              v-model="nome"
              type="text"
              :placeholder="formulario.nome"
            />
          </div>
          <div class="formulario" :class="estilo">
            <label>Digite o tempo gasto em min</label>
            <input
              test-id="forme-tempo"
              v-model="tempo"
              type="number"
              :placeholder="formulario.tempo"
            />
          </div>
          <div class="formulario" :class="estilo">
            <label>Descrição</label>
            <textarea
              test-id="forme-descricao"
              v-model="descricao"
              type="text"
              :placeholder="formulario.descricao"
            >
            </textarea>
          </div>
        </div>

        <label
          test-id="forme-alerta-campos-nao-preenchidos"
          class="card-perigo"
          v-if="visivel"
          >Atenção : Alguns campos não estão preenchidos ou Existe campos com
          dados incorretos
        </label>

        <div>
          <button class="botao" type="submit">Salvar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import LogHora from "../domain/LogHora/LogHora";
export default {
  name: "FormLogHoras",

  props: ["formulario", "index"],

  components: {},
  data() {
    return {
      titulo: "",
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
      this.titulo =
        Boolean(this.titulo) === true ? this.titulo : this.formulario.titulo;
      this.nome =
        Boolean(this.nome) === true ? this.nome : this.formulario.nome;
      this.tempo =
        Boolean(this.tempo) === true ? this.tempo : this.formulario.tempo;
      this.descricao =
        Boolean(this.descricao) === true
          ? this.descricao
          : this.formulario.descricao;

      const lh = new LogHora(
        this.titulo,
        this.nome,
        this.tempo,
        this.descricao
      );

      const l = [this.index, lh, this.formulario];
      if (this.valida()) {
        this.$emit("forme", l);
      }
      this.titulo = "";
      this.nome = null;
      this.tempo = Number;
      this.descricao = "";
    },
    estilos() {
      if (this.estilo == "padrao" || !this.estilo) return "card-padrao";
      if (this.estilo == "perigo") return "card-perigo";
    },

    valida(): boolean {
      if (
        Boolean(this.titulo) &&
        Boolean(this.nome) &&
        Boolean(this.tempo) &&
        Boolean(this.descricao) &&
        this.tempo >= 1
      ) {
        this.visivel = false;
        return true;
      }

      this.visivel = true;
      return false;
    },
  },
};
</script>
<style scoped>
.card-padrao {
  background: rgba(249, 253, 255, 0.995);
}
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
  border: solid 2px;
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
