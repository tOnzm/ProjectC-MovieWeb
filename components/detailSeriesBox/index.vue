<template>
  <div class="detail-box" flat>
    <img class="movie-logo" :src="getLogoUrl(moviesLogo)" :alt="{ alt }" />

    <div>
      <div class="movie-detail">
        <h3>{{ movieYear(year) }}</h3>
        <v-icon>mdi-circle-small</v-icon>
        <h3>{{ languages(voice) }}</h3>
        <v-icon>mdi-circle-small</v-icon>
        <div class="season-episord">
          <h3>{{ season }} ซีซั่น</h3>
          <h3>{{ episord }} ตอน</h3>
        </div>
        <v-icon>mdi-circle-small</v-icon>
        <div class="movie-rating">
          <h3>{{ certificationSeries(contentRating) }}</h3>
        </div>
      </div>
      <div class="movie-overview">
        <h4>{{ overview(overviewData) }}</h4>
      </div>
      <div class="movie-genres">
        <h4>{{ genres(genresData) }}</h4>
      </div>
    </div>
    <div>
      <v-row dense>
        <v-col cols="9" md="10">
          <NuxtLink :to="`${front}/${path}`">
            <playNowBtn
              :prepend-icon="'mdi-play'"
              :text="'รับชมเดี๋ยวนี้'"
              :color="'#ffffff'"
              :icon-color="'#000'"
              :text-color="'#000'"
              :btn-size="'x-large'"
              :btn-block="true"
            />
          </NuxtLink>
        </v-col>
        <v-col cols="1" md="2"><playNowBtn :prepend-icon="'mdi-plus'" /></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import playNowBtn from "../buttons/playNowBtn/index";
import {
  getImageUrl,
  movieYear,
  movieTime,
  getLogoUrl,
  genres,
  languages,
  overview,
  certificationSeries,
} from "@/api/api";

export default {
  name: "DetailSeriesBox",
  components: { playNowBtn },
  props: {
    season : Number,
    episord: Number,
    year: String,
    voice: null,
    contentRating: Array,
    overviewData: String,
    genresData: null,
    moviesLogo: String,
    path: Number,
    time: Number,
    alt: String,
    front: String,
  },
  methods: {
    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
    getLogoUrl(logoPath) {
      return getLogoUrl(logoPath);
    },

    movieYear(year) {
      return movieYear(year);
    },
    movieTime(time) {
      return movieTime(time);
    },
    genres(genresData) {
      return genres(genresData);
    },
    languages(languagesData) {
      return languages(languagesData);
    },
    overview(overviewData) {
      return overview(overviewData);
    },
    certificationSeries(certificationData) {
      return certificationSeries(certificationData);
    },
  },
};
</script>

<style lang="scss" scoped>
.season-episord {
  display: flex;
  gap: 5px;
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
  width: 100%;
  object-fit: contain;
  align-items: center;
  aspect-ratio: 2/1;
}

.movie-detail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  font-size: 1rem;
}
.movie-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff2;
  backdrop-filter: blur(5px);
  max-width: 100px;
  min-width: 50px;
  padding: 2px 8px 2px 8px;
  border-radius: 5px;
}
.movie-overview h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #ffffff90;
  font-weight: 400;
  height: 70px;
}
.movie-genres {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  font-size: 1rem;
  height: 40px;
}

@media screen and(max-width: 600px) {
  .detail-box {
    width: 100%;
    height: 250px;
    margin: 0rem;
    padding: 0rem;
    position: absolute;
    top: 10%;
    left: 0%;
    background: transparent;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .movie-logo {
    max-width: 100%;
    width: 250px;
    height: 100px;
    object-fit: scale-down;
  }
  .movie-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: 0.8rem;
  }
  .movie-overview {
    display: none;
  }
  .movie-genres {
    display: none;
  }
}

@media screen and(max-width: 960px) {
  .detail-box {
    width: 100%;
    height: 250px;
    margin: 0rem;
    padding: 0rem;
    position: absolute;
    top: 10%;
    left: 0%;
    background: transparent;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .movie-logo {
    max-width: 80%;
    height: 150px;
    object-fit: scale-down;
  }
  .movie-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 0.8rem;
  }
  .movie-overview {
    display: none;
  }
  .movie-genres {
    display: none;
  }
}

@media screen and(max-width: 1264px) {
  .detail-box {
    width: 100%;
    height: 300px;
    margin: 0rem;
    padding: 0rem;
    position: absolute;
    top: 10%;
    left: 0%;
    background: transparent;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .movie-logo {
    max-width: 80%;
    height: 150px;
    object-fit: scale-down;
  }
  .movie-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 0.8rem;
  }
  .movie-overview {
    width: 500px;
    height: 100px;
    text-align: center;
  }
  .movie-genres {
    display: none;
  }
}
</style>
