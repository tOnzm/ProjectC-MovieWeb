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
        <v-carousel-item
          class="carousel-item"
          v-for="item in movies"
          :key="item.id"
        >
          <detailBox
            :moviesLogo="item.file_path"
            :year="item.release_date"
            :voice="item.spoken_languages"
            :contentRating="item.certification"
            :overviewData="item.overview"
            :genresData="item.genres"
            :path="item.id"
            :time="item.runtime"
            :alt="item.title"
            :front="''"
          />

          <div class="image-cover">
            <img :src="getImageUrl(item.backdrop_path)" :alt="item.title" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import detailBox from "../detailBox/index";
import { fetchMovies, getImageUrl, movieYear } from "@/plugins/api";

export default {
  name: "carouselsImage",
  components: { detailBox },

  data() {
    return {
      movies: [],
    };
  },

  methods: {
    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
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
  z-index: 2;
  border-image: fill 0 linear-gradient(#12121230, #121212);
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
    height: 50vh;
    width: 100%;
  }
  .image-cover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1%;
    border-image: fill 0 linear-gradient(#12121230, #121212);
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

@media screen and(max-width: 960px) {
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
    border-image: fill 0 linear-gradient(#12121230, #121212);
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
