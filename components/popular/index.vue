<template>
  <div>
    <div class="slide-group-title">
      <h1>{{ titleText }}</h1>
      <viewMoreBtn />
    </div>
    <v-slide-group show-arrows center-active>
      <div v-for="item in popular" :key="item.id">
        <NuxtLink :to="`/${item.id}`" class="thumbnail-main">
          <v-card class="mx-1 thumbnail-movie">
            <img class="align-center" :src="getImageUrl(item.poster_path)" />
          </v-card>
          <v-card class="mx-1 thumbnail-hover">
            <div class="hover-detail">
              <!-- เพิ่มเงื่อนไขที่ตรวจสอบว่ามีข้อมูล logos หรือไม่ -->
              <div v-if="item.image && item.image.length > 0">
                <div
                  v-for="logo in item.image"
                  :key="logo.file_path"
                  class="logo-movies"
                >
                  <img :src="getLogoUrl(logo.file_path)" alt="" />
                </div>
              </div>
              <!-- ถ้าไม่มีข้อมูล logos ให้แสดงรูปจาก static -->
              <div v-else class="non-logo">
                <img src="@/static/movieImg/logos/404logo.png" alt="" width="10px" />
              </div>
              <div>
                <div class="detail-text">
                  <p>{{ movieYear(item.release_date) }}</p>
                  <v-icon>mdi-circle-small</v-icon>
                  <p>{{ movieTime(item.runtime) }}</p>
                </div>
              </div>
            </div>
            <img class="align-center" :src="getImageUrl(item.backdrop_path)" />
          </v-card>
        </NuxtLink>
      </div>
    </v-slide-group>
  </div>
</template>

<script>
import viewMoreBtn from "../buttons/viewMoreBtn/index.vue";
export default {
  name: "Poppular",
  components: { viewMoreBtn },
  props: {
    titleText: String,
  },
  data() {
    return {
      popular: [],
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
      const popularResponse = await this.$axios.$get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3c79a5d5b0c2bd68652652a202b1c175"
      );
      // ทำ API calls ทั้งหมดพร้อมกัน
      const movieDetailsPromises = popularResponse.results.map(
        async (movie) => {
          const movieId = movie.id;
          // รายละเอียดหนัง
          const movieDetailsResponse = await this.$axios.$get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=3c79a5d5b0c2bd68652652a202b1c175`
          );
          //รูปปก ,โลโก้
          const movieImagesResponse = await this.$axios.$get(
            `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=3c79a5d5b0c2bd68652652a202b1c175&language=en`
          );
          //ตัดเอาแค่ข้อมูลจาก array 1
          const selectedLogos = movieImagesResponse.logos.slice(0, 1);

          // รวมข้อมูล
          const mergedMovie = {
            ...movie,
            ...movieDetailsResponse,
            image: selectedLogos,
          };
          // เพิ่มหนังที่ผสมแล้วเข้าไปในอาร์เรย์ nowPlayings
          this.popular.push(mergedMovie);
          console.log(mergedMovie);
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

<style lang="scss">
//ชื่อหัวข้อ
.slide-group-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 3rem;
  z-index: 2;
}
.slide-group-title h1 {
  font-size: 1.5rem;
  margin-left: 6rem;
}

.thumbnail-movie,
.thumbnail-hover {
  display: flex;
  width: 160px;
  height: 240px;
  transition: width 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.hover-detail {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
  width: 100%;
  white-space: nowrap;
  text-overflow: clip;
}
.logo-movies img {
  width: 200px !important;
  position: absolute;
  bottom: 90%;
}
.logo-movies {
  display: flex;
  justify-content: center;
}
.non-logo{
  display: flex;
  justify-content: center;
}
.non-logo img{
  width: 200px !important;
  position: absolute;
  bottom: 90%;
}

.detail-text {
  padding-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 800;
}
.thumbnail-movie img,
.thumbnail-hover img {
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}
.thumbnail-main {
  position: relative;
}
.thumbnail-hover {
  display: none;
}
.thumbnail-main:hover .thumbnail-hover {
  display: flex;
}
.thumbnail-main:hover .thumbnail-movie {
  display: none;
}
.thumbnail-hover:hover {
  display: flex;
  width: 320px;
  border-radius: 10px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.v-slide-group__next,
.v-slide-group__prev {
  display: flex;
  width: 5px;
}
.v-slide-group__next:hover,
.v-slide-group__prev:hover {
  display: flex;
}
.v-slide-group {
  margin-left: 5vw;
}

@media screen and(max-width: 600px) {
  .slide-group-title {
    margin: 1rem 1rem;
  }
  .thumbnail-movie {
    width: 120px;
    height: 180px;
  }
  .slide-group-title h1 {
    font-size: 1rem;
    margin-left: 0;
  }

  .v-slide-group__next,
  .v-slide-group__prev {
    display: none;
  }
  .v-slide-group {
    margin-left: 0vw;
  }
}
</style>
