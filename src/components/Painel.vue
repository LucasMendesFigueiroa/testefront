<template>
  <div class="painel">
    <h2 v-if="visibilidade" class="painel-titulo" @click="visivel = !visivel">
      {{ titulo }}
    </h2>
    <h2 test-id="painel-titulo" v-else class="painel-titulo">{{ titulo }}</h2>

    <div class="painel-conteudo" v-show="visivel">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["titulo", "visibilidade"],

  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px rgb(1, 52, 113);
  width: 100%;
  height: 100%;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 1px;
  background: rgba(193, 216, 234, 0.995);
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 1px 1px 1px;
}
</style>
