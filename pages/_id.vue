<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile">
      <img src="@/static/logo-d-plus.svg" alt="Disney+ Logo" />
    </div>
    <div>
      <div class="image-cover">
        <img :src="getImageUrl(movie.backdrop_path)" :alt="movie.title" />
      </div>

      <div class="cast">
        <h1>นักแสดงนำ</h1>
        <div class="cast-loop">
          <div
            class="profile"
            v-for="(cast, index) in movie.cast"
            :key="cast.id"
            v-if="index < 10"
          >
            <img :src="getImageUrl(cast.profile_path)" alt="" />

            <h4>{{ cast.name }}</h4>
            <span>{{ cast.character }}</span>
          </div>
        </div>
      </div>

      <detailBox
        :moviesLogo="movie.file_path"
        :year="movie.release_date"
        :voice="movie.spoken_languages"
        :contentRating="movie.certification"
        :overviewData="movie.overview"
        :genresData="movie.genres"
        :front="''"
        :path="'watch'"
        :time="movie.runtime"
        :alt="movie.title"
      />
    </div>
  </div>
</template>

<script>
import cast from "../components/cast/index.vue";
import detailBox from "../components/detailBox/index.vue";
import { paramsMovies } from "../api/params";
import { getImageUrl, getLogoUrl, castMovie } from "../api/api";

export default {
  name: "moviePage",
  components: { detailBox, cast },

  data() {
    return {
      movie: [],
    };
  },
  methods: {
    async paramsMovies() {
      const axios = this.$axios;
      this.movie =
        (await paramsMovies({ axios, params: this.$route.params })) || {};
    },

    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
    getLogoUrl(imagePath) {
      return getLogoUrl(imagePath);
    },
    castMovie(castData) {
      return castMovie(castData);
    },
  },
  mounted() {
    this.paramsMovies();
  },
};
</script>

<style lang="scss" scoped>
.image-cover {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.image-cover::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(#00000000, #121212);
}
.image-cover img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.logo-mobile {
  display: none;
}

.detail-box {
  width: 500px;
  height: 500px;
  margin: 1rem;
  padding: 1rem;
  position: absolute;
  top: 15%;
  left: 10%;
  background: transparent;
  z-index: 999;
}
.movie-logo {
  width: 500px;
  height: 180px;
  object-fit: scale-down;
  align-items: flex-start;
}

.movie-detail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: auto;
}
.movie-rating {
  display: flex;
  align-items: center;
  background-color: #ffffff20;
  padding: 2px 10px 2px 10px;
  border-radius: 5px;
}
.movie-overview h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #ffffff90;
  font-weight: 400;
}
.movie-genres {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  font-size: 1rem;
  height: 50px;
}

.cast {
  margin-left: 5rem;
  margin-right: 5rem;
  position: relative;
}
.profile {
  display: flex;
  max-width: 180px;
  flex-direction: column;
  max-height: 200px;
  margin: 1rem;
  align-items: center;
}
.cast-loop {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.profile > img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #eeeeee;
}
.profile > h4 {
  padding-top: 1rem;
  text-align: center;
}
.profile > span {
  font-size: calc(0.2rem + 1vh);
  text-align: center;
  color: #858585;
}

@media screen and(max-width: 600px) {
  .image-cover {
    position: relative;
    height: 30vh;
    width: 100%;
  }
  .image-cover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1%;
    background: linear-gradient(to bottom, #1212122a 0%, #121212 100%);
    z-index: 1;
  }

  .image-cover img {
    height: 30vh;
    width: 100%;
  }
  .v-carousel {
    height: 350px !important;
  }

  .logo-mobile {
    display: block;
    position: absolute;
    z-index: 999;
    margin: 1rem;
  }
  .logo-mobile img {
    width: 45px;
  }
}
</style>
