<template>
  <div>
    <v-container>
      <div>
        <form class="search" @submit.prevent="search">
          <v-icon class="icon" size="40">mdi-magnify</v-icon>
          <input
            type="search"
            class="box"
            v-model="searchTerm"
            placeholder="ค้นหาหนัง..."
          />
        </form>

        <div class="movie-list">
          <h2>ผลลัพธ์การค้นหา</h2>
          <div class="movie" v-if="searchResults.length > 0">
            <div
              class="movie-thumbnail"
              v-for="movie in searchResults"
              :key="movie.id"
            >
              <img :src="movie.poster_path" alt="" />
            </div>
          </div>
          <div v-else>
            <p>ไม่พบผลลัพธ์</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchPage",
  data() {
    return {
      searchTerm: "",
      searchResults: [],
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchTerm);
      this.performSearch(this.searchTerm);
    },

    async performSearch(searchTerm) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=3c79a5d5b0c2bd68652652a202b1c175`
        );
        this.searchResults = response.data.results;
        console.log(this.searchResults);
        // ทำอย่างอื่น ๆ ที่คุณต้องการกับข้อมูลที่ได้รับจาก API
        // เช่น การเก็บผลลัพธ์ไว้ในตัวแปรและแสดงผลในส่วนของ movie-list
      } catch (error) {
        console.error("Error performing search:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem;
}
.search {
  width: 100%;
  background-color: #2c2c2c;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
}
.box {
  width: 100%;
  height: 100%;
}
.icon {
  padding-right: 1rem;
}
.movie-thumbnail {
  background-color: #2c2c2c;
  width: 223px;
  height: 300px;
  border-radius: 10px;
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
