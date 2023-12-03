<template>
  <div>
    <!-- โลโก้มุมซ้ายบน ขนาด Mobile-->
    <div class="logo-mobile"><img src="@/static/logo-d-plus.svg" alt="" /></div>
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
          v-for="item in topRatedMovies"
          :key="item.id"
        >
          <v-card class="detail-box" flat>
            <v-img
              class="white--text align-center movie-logo"
              :src="getImageUrl(item.backdrop_path)"
            >
            </v-img>
            <v-card-text class="text--primary px-0">
              <div class="movie-detail">
                <h3>2023</h3>
                <v-icon>mdi-circle-small</v-icon>
                <h3>Season 1</h3>
                <v-icon>mdi-circle-small</v-icon>
                <h3>Thai</h3>
                <v-icon>mdi-circle-small</v-icon>
                <div class="movie-rate">
                  <h3>15+</h3>
                </div>
              </div>
              <div class="movie-synopsis">
                <h3>
                  {{ item.overview }}
                </h3>
              </div>
              <div class="movie-type">
                <span v-for="item2 in movies.genres" :key="item2.id">{{
                  item2.name
                }}</span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-row dense>
                <v-col cols="9" md="10">
                  <watchBtn
                    :prepend-icon="'mdi-play'"
                    :text="'รับชมเดี๋ยวนี้'"
                  />
                </v-col>
                <v-col cols="1" md="2"
                  ><watchBtn :prepend-icon="'mdi-plus'"
                /></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <div class="image-cover">
            <img :src="getImageUrl(item.backdrop_path)" alt=" " />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <cardBox />
  </div>
</template>

<script>
import cardBox from "../cardBox/index.vue";
import watchBtn from "../buttons/watchBtn.vue";

export default {
  name: "carouselsImage",
  components: { cardBox, watchBtn },
  data() {
    return {
      topRatedMovies: [],
      logoMovies: [],
      movies: [],
    };
  },
  methods: {
    getImageUrl(imagePath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/original";
      return `${baseImageUrl}${imagePath}`;
    },

    async fetchSomething() {
      const topRatedResponse = await this.$axios.$get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3c79a5d5b0c2bd68652652a202b1c175"
      );

      this.topRatedMovies = topRatedResponse.results;

      console.log(topRatedResponse.results);
    },
  },
  mounted() {
    this.fetchSomething();
  },
};
</script>

<style lang="scss" scoped>
.image-cover {
  position: relative;
  height: 100%;
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
  z-index: 1;
}
.image-cover img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.movie-logo {
  width: 100%;
}
.detail-box {
  width: 500px;
  margin: 4rem;
  padding: 1rem;
  position: absolute;
  top: 2%;
  left: 5%;
  background: transparent;
  z-index: 2;
}
.movie-detail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.movie-rate {
  display: flex;
  align-items: center;
  background-color: #ffffff20;
  padding: 2px 10px 2px 10px;
  border-radius: 5px;
}
.movie-synopsis h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #ffffff90;
  font-weight: 400;
}
.movie-type {
  display: flex;
  column-gap: 0.75rem;
}
.logo-mobile {
  display: none;
}
@media screen and(max-width: 600px) {
  .image-cover {
    position: relative;
    float: bottom;
    height: 60%;
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
    z-index: 1;
  }
  .image-cover img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .v-carousel {
    height: 350px !important;
  }
  .detail-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 1rem;
    position: absolute;
    top: 20%;
    left: 0;
    background: transparent;
    z-index: 2;
  }
  .movie-logo {
    width: 80%;
  }
  .movie-detail {
    display: flex;
    justify-content: center;
  }
  .movie-detail h3 {
    font-size: 14px;
    text-align: center;
  }
  .movie-rate {
    display: flex;
    align-items: center;
    background-color: #ffffff20;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
  }
  .movie-synopsis {
    display: none;
  }
  .movie-type {
    display: none;
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
