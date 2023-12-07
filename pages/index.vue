<template>
  <div>
    <carouselsImage />
    <nowPlaying title-text="มาใหม่" />
    <popular title-text="ได้รับความนิยม" />

    <bottomNav />
  </div>
</template>

<script>
import nowPlaying from "../components/nowPlaying/index.vue";
import carouselsImage from "../components/carouselsImage/index.vue";
import popular from "../components/popular/index.vue"

export default {
  name: "IndexPage",
  components: { nowPlaying, carouselsImage,popular },
  head: {
    title: " หน้าแรก",
  },
};
</script>

<style lang="scss"></style>
