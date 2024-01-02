<template>
  <div>
    <carouselsImage />
    <studioMenu />
    <moviesThumbnail :titleText="'มาใหม่'">
      <div v-for="item in movies" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.file_path"
          :languagesData="item.spoken_languages"
          :time="item.runtime"
          :contentRating="item.certification"
          :front="''"
        >
        </thumbnail>
      </div>
    </moviesThumbnail>
    <bottomNav />
  </div>
</template>

<script>
import carouselsImage from "../components/carouselsImage/index.vue";
import studioMenu from "../components/studioMenu/index.vue";
import moviesThumbnail from "../components/moviesThumbnail/index";
import thumbnail from "../components/moviesThumbnail/thumbnail/index.vue";
import { Movies } from "../api/api.js";
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
    async Movies() {
      const axios = this.$axios;
      this.movies = await Movies(axios);
    },
  },
  mounted() {
    this.Movies();
  },
};
</script>

<style lang="scss" scoped></style>
