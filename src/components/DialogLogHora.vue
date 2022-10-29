<template>
  <v-row alig="center" justify="center">
    <v-col cols="12">
      <v-hover v-slot="{ hover }" disabled>
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="500"
          max-width="700"
        >
          <v-card-text class="my-4 text-center text-h6">
            <h2>Log de Hora</h2>
          </v-card-text>
          <dialog></dialog>
          <formlog> </formlog>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import FormLogHoras from "../components/FormLogHoras.vue";
//import HoraLogadaVue from "@/components/HoraLogada.vue";
import DialogLogHoraVue from "@/components/DialogLogHora.vue";

export default Vue.extend({
  name: "Home",

  components: {
    formlog: FormLogHoras,
    //horalog: HoraLogadaVue,
    dialog: DialogLogHoraVue,
  },

  data() {
    return {};
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
  methods: {
    showevent(event: any) {
      console.log(event);
    },
  },
});
</script>
