<template>
  <div class="mt-4 d-flex flex-column">
    <v-avatar
      class="align-self-start align-self-center"
      size="36px"
      :color="cor"
    >
      <v-icon dark> mdi-account-circle </v-icon>
    </v-avatar>
    <span class="mt-1 mr-4 ml-4 justify-lg-start align-self-center">
      {{ nome }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: ["cor", "nome"],

  data() {
    return {};
  },
};
</script>

<style scoped></style>
