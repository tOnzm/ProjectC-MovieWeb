<template>
  <div>
    <MainSideBar />
    <div class="logo-mobile">
      <img src="../static/logo-d-plus.svg" alt="" />
    </div>
    <div>
      <v-carousel
        class="carousel-image"
        hide-delimiters
        cycle
        show-arrows-on-hover
        :show-arrows="false"
      >
        <v-carousel-item class="carousel-item">
          <v-card class="detail-box" flat>
            <!--  <div>
              <img
                class="white--text align-center movie-logo"
                :src="getImageUrl(movie.logos)"
              />
              <img />
            </div> -->
            <div class="movie-title">
              <h1>{{ movie.title }}</h1>
              <p>{{ movie.original_title }}</p>
            </div>
            <v-card-text class="text--primary px-0">
              <div class="movie-detail">
                <h3>{{ movie.release_date.substring(0, 4) }}</h3>
                <v-icon>mdi-circle-small</v-icon>
                <h3>{{ movie.runtime }} นาที</h3>
                <v-icon>mdi-circle-small</v-icon>
                <div class="language">
                  <span
                    v-for="language in movie.spoken_languages"
                    :key="language.iso_639_1"
                  >
                    {{ language.name }}
                  </span>
                </div>

                <!-- เรทอายุ -->
                   <v-icon>mdi-circle-small</v-icon>
                <div class="movie-rate" >
                  <h3>{{movie.certification}}</h3>
                </div> 
              </div>
              <div class="movie-overview">
                <h3>
                  {{ movie.overview }}
                </h3>
              </div>
              <div class="movie-type">
                <span
                  class="type-list"
                  v-for="genres in movie.genres"
                  :key="genres.id"
                  >{{ genres.name }}</span
                >
              </div>
            </v-card-text>

            <v-card-actions>
              <v-row dense>
                <v-col cols="9" md="10">
                  <watchBtn
                    :prepend-icon="'mdi-play'"
                    :text="'รับชมเดี๋ยวนี้'"
                    :color="'#ffffff'"
                    :icon-color="'#000'"
                    :text-color="'#000'"
                  />
                </v-col>
                <v-col cols="1" md="2"
                  ><watchBtn :prepend-icon="'mdi-plus'"
                /></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <div class="image-cover">
            <img :src="getImageUrl(movie.backdrop_path)" alt="" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>


    <!-- สำหรับซีรีส์ -->
    <div>
      <v-container>
        <div class="title-season">
          <v-row>
            <v-col md="2"
              ><v-btn text plain x-large><h2>ตอน</h2></v-btn></v-col
            >

            <v-col md="3"
              ><v-btn text x-large plain
                ><h2>ตัวอย่างและอื่นๆ</h2></v-btn
              ></v-col
            >

            <v-col md="3"
              ><v-btn text x-large plain><h2>แนวคล้ายกัน</h2></v-btn></v-col
            >
          </v-row>
          <v-divider class="my-5"></v-divider>

          <v-row class="season"
            ><v-col md="1"
              ><v-btn text class="px-10" plain><h3>ซีซั่น 1</h3></v-btn></v-col
            >
            <v-col md="1"
              ><v-btn text class="px-10" plain><h3>ซีซั่น 2</h3></v-btn></v-col
            ></v-row
          >
        </div>

        <div v-for="n in 10" :key="n">
          <v-card class="episode-box" flat>
            <div class="ep-thumbnail">
              <img :src="getImageUrl(movie.backdrop_path)" /> <img />
            </div>
            <v-card-text class="text--primary px-0 detail">
              <div><h1>ชื่อตอน</h1></div>
              <div class="ep-detail">
                <h3>ซีซั่น 1 ตอนที่</h3>
                <v-icon>mdi-circle-small</v-icon>
                <h3>วันที่ฉาย</h3>
                <v-icon>mdi-circle-small</v-icon>
                <h3>เวลา</h3>
              </div>
              <div class="movie-synopsis">
                <h3>
                  {{ movie.overview }}
                </h3>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import watchBtn from "../components/buttons/watchBtn.vue";
import MainSideBar from "../components/sidebar/index.vue";

export default {
  name: "moviePage",
  components: { watchBtn, MainSideBar },

  async asyncData({ params, $axios }) {
    try {
      const movieResponse = await $axios.$get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=th-TH`
      );
      const rateResponse = await $axios.$get(
        `https://api.themoviedb.org/3/movie/${params.id}/release_dates?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=us-US`
      );
      console.log(rateResponse)

      return { movie: movieResponse || {}, rate: rateResponse || {} };
    } catch (error) {
      console.error(`Error fetching movie data for ${params.id}`, error);
      return { movie: {}, rate: {} };
    }
  },

  methods: {
    getImageUrl(posterPath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/original";
      return `${baseImageUrl}${posterPath}`;
    },
    /*  getLogoUrl(logoPath) {
      const baseLogoUrl = "https://image.tmdb.org/t/p/original";
      return `${baseLogoUrl}${logoPath}`;
    }, */
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
  float: bottom;
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
.movie-overview h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  color: #ffffff90;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.movie-type {
  column-gap: 1.5rem;
}
.movie-type .type-list {
  font-weight: 800;
  font-size: 1rem;
}
.logo-mobile {
  display: none;
}
.episode-box {
  margin-left: 4rem;
  margin-top: 1rem;
  padding: 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  z-index: 2;
  gap: 1rem;
}
.ep-thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
}
.ep-thumbnail img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.ep-detail {
  display: flex;
  justify-content: flex-start;
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
}
.season {
  display: flex;
}
.title-season {
  margin-left: 4rem;
  padding: 1rem;
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
