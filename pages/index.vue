<template>
  <div>
    <carouselsImage />
    <studioMenu />

    <moviesThumbnail :titleText="'มาใหม่'">
      <div v-for="item in nowPlayingMoviesData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
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
import popular from "../api/movie/popular";
import nowPlaying from "../api/movie/nowPlaying";
import topRated from "../api/movie/topRated";
import upComing from "../api/movie/upcoming";
export default {
  name: "IndexPage",
  components: { carouselsImage, moviesThumbnail, thumbnail, studioMenu },
  head: {
    title: " หน้าแรก",
  },
  data() {
    return {
      nowPlayingMoviesData: [],
    };
  },
  mounted() {
    this.nowPlayingMovies();
  },
  methods: {
    async nowPlayingMovies() {
      try {
        const movies = await nowPlaying.getAll();
        console.log(movies.results);
        this.nowPlayingMoviesData = movies.results;
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
