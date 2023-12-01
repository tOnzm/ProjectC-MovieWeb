<template>
  <div>
<nowPlaying title-text="มาแรง">
    <v-slide-group-item v-for="item in nowPlayings" :key="item.id">
        <NuxtLink :to="getMoviePath(item)">
          <v-card class="mx-1 thumbnail-movie">
            <v-img class="align-center" :src="getImageUrl(item.poster_path)">
            </v-img>
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
</nowPlaying>
</div>
</template>

<script>
import nowPlaying from "../components/nowPlaying/index.vue";
export default {
  components: { nowPlaying },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175"
      );

      return { nowPlayings: response.results || [] };
    } catch (error) {
      console.error("Error fetching movie data", error);
      return { nowPlayings: [] };
    }
  },

  methods: {
    getImageUrl(posterPath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/w500/";
      return `${baseImageUrl}${posterPath}`;
    },
    getMoviePath(item) {
      return {
        name: "nowPlaying-id",
        params: { id: item.id },
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
