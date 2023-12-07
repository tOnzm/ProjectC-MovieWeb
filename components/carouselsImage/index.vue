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
            <div v-if="item.image && item.image.length > 0">
              <div
                v-for="logo in item.image"
                :key="logo.file_path"
                class="movie-logo"
              >
                <img :src="getImageUrl(logo.file_path)" alt="" />
              </div>
            </div>
            <!-- ถ้าไม่มีข้อมูล logos ให้แสดงรูปจาก static -->
            <div v-else>
              <div v-for="staticLogo in item.staticLogos" :key="staticLogo">
                <img :src="getStaticLogoUrl(staticLogo)" alt="" width="10px" />
              </div>
            </div>

            <v-card-text class="text--primary px-0">
              <div class="movie-detail">
                <h3>{{ movieYear(item.release_date) }}</h3>

                <v-icon>mdi-circle-small</v-icon>
                <div class="language">
                  <span
                    v-for="language in item.spoken_languages"
                    :key="language"
                  >
                    {{ language.name }}
                  </span>
                </div>
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
                <span v-for="genres in item.genres" :key="genres.id">{{
                  genres.name
                }}</span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-row dense>
                <v-col cols="9" md="10">
                  <NuxtLink :to="`/${item.id}`">
                    <watchBtn
                      :prepend-icon="'mdi-play'"
                      :text="'รับชมเดี๋ยวนี้'"
                    />
                  </NuxtLink>
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
    };
  },

  methods: {
    getImageUrl(imagePath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/original";
      return `${baseImageUrl}${imagePath}`;
    },
    getLogoUrl(imagePath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/w500";
      return `${baseImageUrl}${imagePath}`;
    },
    movieYear(year) {
      return year.split("-")[0];
    },
    movieTime(time) {
      const hours = Math.floor(time / 60);
      const min = time % 60;
      return `${hours} ชั่วโมง ${min} นาที`;
    },

    async fetchSomething() {
      const nowPlayingResponse = await this.$axios.$get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3c79a5d5b0c2bd68652652a202b1c175"
      );
      // ทำ API calls ทั้งหมดพร้อมกัน
      const movieDetailsPromises = nowPlayingResponse.results.map(
        async (movie) => {
          const movieId = movie.id;
          // รายละเอียดหนัง
          const movieDetailsResponse = await this.$axios.$get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=th&en`
          );
          //รูปปก ,โลโก้
          const movieImagesResponse = await this.$axios.$get(
            `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
          );

          const rateResponse = await this.$axios.$get(
            `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en-US`
          );
          //ตัดเอาแค่ข้อมูลจาก array 1
          const selectedLogos = movieImagesResponse.logos.slice(0, 1);
          // รวมข้อมูล
          const mergedMovie = {
            ...movie,
            ...movieDetailsResponse,
            image: selectedLogos,
            ...rateResponse.results,
          };
          // เพิ่มหนังที่ผtopRatedMoviesสมแล้วเข้าไปในอาร์เรย์ nowPlayings
          this.topRatedMovies.push(mergedMovie);
          console.log(rateResponse.results);
        }
      );
      // รอให้ทุก API calls เสร็จสมบูรณ์
      await Promise.all(movieDetailsPromises);
    },
  },
  mounted() {
    this.fetchSomething();
  },
};
</script>

<style lang="scss" scoped>
.language span {
  font-size: 1rem;
  font-weight: 800;
  padding: 0.5rem;
}
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
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-logo img {
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
  z-index: 999;
}
.movie-detail {
  padding-top: 2rem;
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
  padding-top: 1rem;
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
  font-weight: 800;
  padding-top: 1rem;
  font-size: 1rem;
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
