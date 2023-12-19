<template>
  <v-container>
    <search-box @search="search" />
    <br />
    <div>
      <h1>ผลลัพธ์การค้นหา</h1>
      <div class="movie" v-if="searchResults.length > 0">
        <div
          class="movie-thumbnail"
          v-for="movie in searchResults"
          :key="movie.id"
        >
          <NuxtLink :to="`/${movie.id}`">
            <img class="poster" :src="getImageUrl(movie.poster_path)" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div v-else>
        <br>
        <p>ไม่พบผลลัพธ์</p>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getImageUrl } from "@/plugins/api.js";
import SearchBox from "@/components/searchBox/index";
import { searchMovie } from "@/plugins/search.js";

export default {
  name: "SearchPage",
  components: { SearchBox },
  data() {
    return {
      searchResults: [],
    };
  },
  methods: {
    async search(searchData) {
      this.searchResults = await searchMovie(searchData);
    },
    getImageUrl(imagePath) {
      return getImageUrl(imagePath);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}

.movie-thumbnail {
  width: 223px;
  height: 300px;
}
.poster {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.movie-list {
  margin-top: 2rem;
}
.movie {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
