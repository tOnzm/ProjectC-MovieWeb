<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile">
      <img src="@/static/logo-d-plus.svg" alt="Disney+ Logo" />
    </div>
    <div>
      <v-carousel
        class="carousel-image"
        height="100vh"
        cycle
        show-arrows-on-hover
        :show-arrows="false"
        hide-delimiter-background
      >
        <v-carousel-item
          class="carousel-item"
          v-for="(item, index) in movies"
          :key="item.id"
          v-if="index <= 4"
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
import { Movies, getImageUrl, movieYear } from "@/api/api";

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
    async Movies() {
      const data = this.$axios;
      this.movies = await Movies(data);
    },
  },
  mounted() {
    this.Movies();
  },
};
</script>

<style lang="scss" scoped>
.image-cover {
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.v-carousel {
  height: 80vh !important;
}
.image-cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 20%;
  z-index: 2;
  border-image: fill 0 linear-gradient(#12121218, #121212);
}
.logo-mobile {
  display: none;
}
::v-deep .v-carousel__controls {
  display: flex;
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

  .v-carousel {
    height: 40vh !important;
  }
  .image-cover img {
    height: 30vh;
    width: 100%;
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
::v-deep .v-carousel__controls {
  display: none;
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
    height: 40vh !important;
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
