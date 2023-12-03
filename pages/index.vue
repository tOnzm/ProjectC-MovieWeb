<template>
  <div>
    <carouselsImage />
    <nowPlaying title-text="มาแรงในขณะนี้" />

    <bottomNav />
  </div>
</template>

<script>
import nowPlaying from "../components/nowPlaying/index.vue";
import carouselsImage from "../components/carouselsImage/index.vue";

export default {
  name: "IndexPage",
  components: { nowPlaying, carouselsImage },
  head: {
    title: " หน้าแรก",
  },
};
</script>

<style lang="scss"></style>
