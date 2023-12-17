<template>
  <div class="detail-box" flat>
    <img class="movie-logo" :src="getLogoUrl(moviesLogo)" :alt="{ alt }" />

    <div>
      <div class="movie-detail">
        <h3>{{ movieYear(year) }}</h3>
        <v-icon>mdi-circle-small</v-icon>
        <h3>{{ voice }}</h3>
        <v-icon>mdi-circle-small</v-icon>
        <h3>{{ movieTime(time) }}</h3>
        <v-icon>mdi-circle-small</v-icon>
        <div class="movie-rating">
          <h3>{{ contentRating }}</h3>
        </div>
      </div>
      <div class="movie-overview">
        <h4>{{ overview }}</h4>
      </div>
      <div class="movie-genres">
        <h4>{{ getGenresNames(genres) }}</h4>
      </div>
    </div>
    <div>
      <v-row dense>
        <v-col cols="9" md="10">
          <NuxtLink :to="`/${path}`">
            <watchBtn
              :prepend-icon="'mdi-play'"
              :text="'รับชมเดี๋ยวนี้'"
              :color="'#ffffff'"
              :icon-color="'#000'"
              :text-color="'#000'"
            />
          </NuxtLink>
        </v-col>
        <v-col cols="1" md="2"><watchBtn :prepend-icon="'mdi-plus'" /></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import watchBtn from "../buttons/watchBtn.vue";
import {
  getImageUrl,
  getGenresNames,
  movieYear,
  movieTime,
  getLogoUrl,
} from "@/plugins/api";

export default {
  name: "DetailBox",
  components: { watchBtn },
  props: {
    year: String,
    voice: String,
    contentRating: String,
    overview: String,
    genres: { String, Number },
    moviesLogo: String,
    path: Number,
    time: Number,
    alt: String,
  },
  methods: {
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
      return movieYear(year);
    },
    movieTime(time) {
      return movieTime(time);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
