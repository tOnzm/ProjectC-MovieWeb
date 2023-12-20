<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile">
      <img src="@/static/logo-d-plus.svg" alt="Disney+ Logo" />
    </div>
    <div>
      <div class="image-cover">
        <img :src="getImageUrl(series.backdrop_path)" :alt="series.title" />
      </div>
      <detailSeriesBox
        :moviesLogo="series.file_path"
        :year="series.first_air_date"
        :voice="series.spoken_languages"
        :contentRating="series.certification"
        :overviewData="series.overview"
        :genresData="series.genres"
        :path="series.id"
        :episord="series.number_of_episodes"
        :season="series.number_of_seasons"
        :alt="series.title"
      />
    </div>
  </div>
</template>

<script>
import detailSeriesBox from "@/components/detailSeriesBox/index.vue";
import { paramsSeries } from "@/plugins/series";
import { getImageUrl, getLogoUrl } from "@/plugins/api";

export default {
  name: "moviePage",
  components: { detailSeriesBox },

  data() {
    return {
      series: [],
    };
  },
  methods: {
    async paramsSeries() {
      const axios = this.$axios;
      this.series =
        (await paramsSeries({ axios, params: this.$route.params })) || {};
    },

    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
    getLogoUrl(imagePath) {
      return getLogoUrl(imagePath);
    },
  },
  mounted() {
    this.paramsSeries();
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
