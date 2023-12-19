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
      <div class="detail-box" flat>
        <img class="movie-logo" :src="getLogoUrl(movie.file_path)" alt="" />

        <div class="movie-detail">
          <h4>{{ movieYear(movie.release_date) }}</h4>
          <v-icon>mdi-circle-small</v-icon>
          <h4>{{ languages(movie.spoken_languages) }}</h4>
          <v-icon>mdi-circle-small</v-icon>
          <h4>{{ movieTime(movie.runtime) }}</h4>
          <v-icon>mdi-circle-small</v-icon>
          <div class="movie-rating">
            <h4>{{ certification(movie.certification) }}</h4>
          </div>
        </div>
        <div class="movie-overview">
          <h4>{{ movie.overview }}</h4>
        </div>
        <div class="movie-genres">
          <h4>{{ genres(movie.genres) }}</h4>
        </div>
        <div>
          <v-row dense>
            <v-col cols="9" md="10">
              <NuxtLink :to="`/${movie.id}`">
                <watchBtn
                  :prepend-icon="'mdi-play'"
                  :text="'รับชมเดี๋ยวนี้'"
                  :color="'#ffffff'"
                  :icon-color="'#000'"
                  :text-color="'#000'"
                  :btn-block="true"
                />
              </NuxtLink>
            </v-col>
            <v-col cols="1" md="2"
              ><watchBtn :prepend-icon="'mdi-plus'"
            /></v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import watchBtn from "../components/buttons/watchBtn.vue";
import detailBox from "../components/detailBox/index.vue";
import { paramsMovies } from "../plugins/params";
import {
  getImageUrl,
  getGenresNames,
  movieYear,
  movieTime,
  getLogoUrl,
  languages,
  genres,
  certification,
} from "../plugins/api";

export default {
  name: "moviePage",
  components: { watchBtn, detailBox },

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
    getGenresNames(genres) {
      return getGenresNames(genres);
    },

    movieYear(year) {
      if (year) {
        return year.split("-")[0];
      } else {
        return "Year not available";
      }
    },
    movieTime(time) {
      return movieTime(time);
    },

    languages(languagesData) {
      return languages(languagesData);
    },
    genres(genresData) {
      return genres(genresData);
    },
    certification(certificationData) {
      return certification(certificationData);
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
}
.image-cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
  z-index: 2;
}
.image-cover img {
  height: 100vh;
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
