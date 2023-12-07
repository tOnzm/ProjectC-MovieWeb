<template>
  <div>
    <carouselsImage />
    <moviesThumbnail :titleText="'มาใหม่'">
      <div v-for="item in movies" :key="item.id">
        <thumbnail
          :thumnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :movieLogo="item.image[0].file_path"
          :year="item.release_date"
          :time="item.runtime"
        />
      </div>
    </moviesThumbnail>
    <bottomNav />
  </div>
</template>

<script>
import carouselsImage from "../components/carouselsImage/index.vue";
import moviesThumbnail from "../components/moviesThumbnail/index";
import thumbnail from "../components/moviesThumbnail/thumbnail/index.vue";
import { fetchMovies2 } from "../plugins/api.js";
export default {
  name: "IndexPage",
  components: { carouselsImage, moviesThumbnail, thumbnail },
  head: {
    title: " หน้าแรก",
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async fetchMovies2() {
      const axios = this.$axios;
      this.movies = await fetchMovies2(axios);
    },
  },
  mounted() {
    this.fetchMovies2();
  },
};
</script>

<style lang="scss" scoped></style>
