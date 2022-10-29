<template>
  <v-sheet rounded="xl" class="d-flex mt-5" :color="cor" elevation="8">
    <slot></slot>
  </v-sheet>
</template>

<script lang="ts">
export default {
  props: ["cor"],

  data() {
    return {};
  },
};
</script>

<style scoped></style>
