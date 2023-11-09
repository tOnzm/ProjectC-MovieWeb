<template>
  <v-btn block size="x-large">
    <v-icon>{{ prependIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "AddListButton",
  props: {
    prependIcon: String,
  },
};
</script>

<style lang="scss" scoped></style>
