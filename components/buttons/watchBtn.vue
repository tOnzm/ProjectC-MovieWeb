<template>
  <div class="button-custom">
    <v-btn block size="x-large">
      <v-icon>{{ prependIcon }} </v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "WatchNowButton",
  props: {
    text: String,
    prependIcon: String,
  },
};
</script>

<style lang="scss" scoped>
.button-custom {
  text-align: center;
  align-items: center;
  transition: transform 0.6s;
}
.button-custom:hover {
  transform: scale(1.03);
}
.button-custom .v-btn {
  background-color: #ffffff20;
  padding: 1.5rem;
}

@media screen and (max-width: 600px) {
  .button-custom .v-btn {
    padding: 1rem;
  }
}
</style>
