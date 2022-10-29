<template>
  <chat class="mt-12 d-flex justify-center align-center"> </chat>
</template>

<script lang="ts">
//import calendarioVue from "@/components/calendario.vue";
import Vue from "vue";
import Chate from "@/components/shared/chate/Chate.vue";

export default Vue.extend({
  name: "Home",

  components: {
    chat: Chate,
  },

  data() {
    return {};
  },

  created() {
    //this.$http
    //.get("https://localhost:44300/api/LogHora")
    // .then((res) => res.json())
    // .then(
    //   (lhora) => (this.horaslogadas = lhora),
    //   (err) => console.log(err)
    // );
  },

  methods: {},
});
</script>
<style scoped></style>
