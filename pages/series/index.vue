<template>
    <div>
      <carouselsImage />
      <moviesThumbnail :titleText="'ซีรีส์มาใหม่'">
        <div v-for="item in movies" :key="item.id">
          <thumbnail
            :thumbnailImage="item.poster_path"
            :path="item.id"
            :backdropImage="item.backdrop_path"
            :moviesLogo="item.file_path"
            :languagesData="item.spoken_languages"
            :time="item.runtime"
            :contentRating="item.certification"
            :front="'series'"
          >
          </thumbnail>
        </div>
      </moviesThumbnail>
      <bottomNav />
    </div>
  </template>
  
  <script>
  import carouselsImage from "@/components/carouselsImage/index.vue";
  import studioMenu from "@/components/studioMenu/index.vue";
  import moviesThumbnail from "@/components/moviesThumbnail/index";
  import thumbnail from "@/components/moviesThumbnail/thumbnail/index.vue";
  import { fetchMovies } from "@/plugins/api.js";
  export default {
    name: "IndexPage",
    components: { carouselsImage, moviesThumbnail, thumbnail, studioMenu },
    head: {
      title: " หน้าแรก",
    },
    data() {
      return {
        movies: [],
      };
    },
    methods: {
      async fetchMovies() {
        const axios = this.$axios;
        this.movies = await fetchMovies(axios);
      },
    },
    mounted() {
      this.fetchMovies();
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  