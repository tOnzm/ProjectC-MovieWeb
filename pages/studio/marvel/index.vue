<template>
  <div>
    <div><h1>Movie</h1></div>
    <div class="photos">
      <div class="box" v-for="item in movies" :key="item.id">
        <img
          :src="getImageUrl(item.poster_path)"
          class="photo-item"
          :alt="item.title"
        />

        <NuxtLink :to="getMoviePath(item)"
          ><p>{{ item.original_title }}</p></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Movie",
    };
  },
  data() {
    return {
      movies: [],
    };
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3c79a5d5b0c2bd68652652a202b1c175"
      );
      return { movies: response.results || [] };
    } catch (error) {
      console.error("Error fetching movie data", error);
      return { movies: [] };
    }
  },
  methods: {
    getImageUrl(posterPath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/w500/";
      return `${baseImageUrl}${posterPath}`;
    },
    getMoviePath(item) {
      return {
        name: "studio-marvel-id",
        params: { id: item.id },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.photos {
  display: flex;
  flex-wrap: wrap;
}
.photo-item {
  width: 180px;
  height: 280px;
  object-fit: cover;
}
.photo-item img {
  object-fit: cover;
}
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 180px;
  align-items: center;
  gap: 1rem;
}
.box p {
  text-align: center;
}
</style>
