<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile">
      <img src="@/static/logo-d-plus.svg" alt="Disney+ Logo" />
    </div>
    <div>
      <v-carousel
        class="carousel-image"
        height="70vh"
        hide-delimiters
        cycle
        show-arrows-on-hover
        :show-arrows="false"
      >
        <v-carousel-item class="carousel-item">
      
          <div class="image-cover">
            <img :src="getImageUrl(movie.backdrop_path)" :alt="movie.title" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import watchBtn from "../components/buttons/watchBtn.vue";
import MainSideBar from "../components/sidebar/index.vue";
import { paramsMovies } from "../plugins/params";
import {
  getImageUrl,
  getGenresNames,
  movieYear,
  movieTime,
  getLogoUrl,
} from "../plugins/api";

export default {
  name: "moviePage",
  components: { watchBtn, MainSideBar },

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
  height: auto;
  width: 100%;
  object-fit: cover;
}

.logo-mobile {
  display: none;
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
