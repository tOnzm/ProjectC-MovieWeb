<template>
  <div>
    <carouselsImage />
    <studioMenu />
    <moviesThumbnail :titleText="'ยอดนิยม'">
      <div v-for="item in popularMoviesData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.logos.file_path"
          :languagesData="item.spoken_languages"
          :time="item.runtime"
          :contentRating="item.certification"
          :front="''"
        >
        </thumbnail>
      </div>
    </moviesThumbnail>
    <moviesThumbnail :titleText="'มาใหม่'">
      <div v-for="item in nowPlayingMoviesData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.logos.file_path"
          :languagesData="item.spoken_languages"
          :time="item.runtime"
          :contentRating="item.certification"
          :front="''"
        >
        </thumbnail>
      </div>
    </moviesThumbnail>
    <moviesThumbnail :titleText="'คะแนนรีวิวสูงสุด'">
      <div v-for="item in topRatedMoviesData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.logos.file_path"
          :languagesData="item.spoken_languages"
          :time="item.runtime"
          :contentRating="item.certification"
          :front="''"
        >
        </thumbnail>
      </div>
    </moviesThumbnail>
    <moviesThumbnail :titleText="'กำลังเข้าฉาย'">
      <div v-for="item in upcomingMoviesData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.logos.file_path"
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
import popularMovies from "../api/movie/popular";
import nowPlayingMovies from "../api/movie/nowPlaying";
import topRatedMovies from "../api/movie/topRated";
import upcomingMovies from "../api/movie/upcoming";
export default {
  name: "IndexPage",
  components: { carouselsImage, moviesThumbnail, thumbnail, studioMenu },
  head: {
    title: " หน้าแรก",
  },
  data() {
    return {
      popularMoviesData: [],
      nowPlayingMoviesData: [],
      topRatedMoviesData: [],
      upcomingMoviesData: [],
    };
  },
  methods: {
    async popularMovies() {
      const movies = await popularMovies();
      this.popularMoviesData = movies;
    },
    async nowPlayingMovies() {
      const movies = await nowPlayingMovies();
      this.nowPlayingMoviesData = movies;
    },
    async topRatedMovies() {
      const movies = await topRatedMovies();
      this.topRatedMoviesData = movies;
    },
    async upcomingMovies() {
      const movies = await upcomingMovies();
      this.upcomingMoviesData = movies;
    },
  },
  mounted() {
    this.popularMovies();
    this.nowPlayingMovies();
    this.topRatedMovies();
    this.upcomingMovies();
  },
};
</script>

<style lang="scss" scoped></style>
