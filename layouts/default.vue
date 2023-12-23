<template>
  <v-app dark>
    <MainSideBar />
    <Nuxt />
  </v-app>
</template>

<script>
import MainSideBar from "../components/sidebar/index.vue";
export default {
  name: "DefaultLayout",
  components: { MainSideBar },
};
</script>
<style lang="scss">
* {
  text-decoration: none;
}
body{
  background-color: #121212;
}
.v-overlay{
  display: none;
}
a:link {
  color: inherit;
}
</style>
