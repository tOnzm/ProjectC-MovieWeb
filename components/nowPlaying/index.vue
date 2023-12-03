<template>
  <div>
    <div class="slide-group-title">
      <h1>{{ titleText }}</h1>
      <viewMoreBtn />
    </div>
    <v-slide-group show-arrows center-active>
      <v-slide-group-item v-for="item in nowPlayings" :key="item.id">
        <NuxtLink :to="`/${item.id}`">
          <v-card class="mx-1 thumbnail-movie">
            <img class="align-center" :src="getImageUrl(item.poster_path)" />
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script>
import viewMoreBtn from "../buttons/viewMoreBtn/index.vue";
export default {
  name: "NowPlaying",
  components: { viewMoreBtn },
  props: {
    titleText: String,
  },
  data() {
    return {
      nowPlayings: [],
    };
  },
  methods: {
    getImageUrl(imagePath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/original";
      return `${baseImageUrl}${imagePath}`;
    },
   
    async fetchSomething() {
      try {
        const nowPlayingResponse = await this.$axios.$get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175"
        );
       
        this.nowPlayings = nowPlayingResponse.results;
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
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

.thumbnail-movie {
  display: flex;
  width: 160px;
  height: 240px;
  transition: transform 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.thumbnail-movie img {
  object-fit: cover;
  width: 100%;
}
.thumbnail-movie:hover {
  transform: scale(0.9);
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

::v-deep .v-slide-group__next,
::v-deep .v-slide-group__prev {
  display: flex;
  min-width: 20px;
}
::v-deep .v-slide-group__next:hover,
::v-deep .v-slide-group__prev:hover {
  display: flex;
  background-color: #ffffff10;
}
.v-slide-group {
  margin-left: 5vw;
}

@media screen and(max-width: 600px) {
  .thumbnail-movie {
    width: 120px;
    height: 160px;
  }
  .slide-group-title h1 {
    font-size: 1rem;
    margin-left: 0;
  }

  ::v-deep .v-slide-group__next,
  ::v-deep .v-slide-group__prev {
    display: none;
  }
}
</style>
