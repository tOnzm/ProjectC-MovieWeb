<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile">
      <img src="@/static/logo-d-plus.svg" alt="Disney+ Logo" />
    </div>
    <div>
      <div class="image-cover">
        <img :src="getImageUrl($route.params.backdrop)" alt="" />
      </div>
      <detailSeriesBox
        :moviesLogo="$route.params.logo"
        :voice="$route.params.languagesData"
        :season="$route.params.season"
        :episord="$route.params.episord"
        :path="$route.params.id"
        :genresData="$route.params.genresData"
        :year="$route.params.year"
        :contentRating="$route.params.contentRating"
        :overviewData="$route.params.overviewData"
      />
    </div>
  </div>
</template>

<script>
import detailSeriesBox from "@/components/detailSeriesBox/index.vue";
import { getImageUrl, getLogoUrl } from "@/api/api";
import airingTodayTV from "@/api/series/airingToday.js";

export default {
  name: "moviePage",
  components: { detailSeriesBox },

  data() {
    return {
      yourData: [],
    };
  },
  methods: {
    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
    getLogoUrl(imagePath) {
      return getLogoUrl(imagePath);
    },
  },
  async mounted() {
    const {
      id,
      logo,
      backdrop_path,
      number_of_seasons,
      spoken_languages,
      number_of_episodes,
      genresData,
      year,
      contentRating,
      overviewData,
    } = this.$route.params;

    try {
      const seriesData = await airingTodayTV(
        id,
        logo,
        backdrop_path,
        number_of_seasons,
        spoken_languages,
        number_of_episodes,
        genresData,
        year,
        contentRating,
        overviewData
      );

      this.yourData = seriesData;
    } catch (error) {
      console.error(error);
    }
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
