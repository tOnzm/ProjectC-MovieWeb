<template>
  <div>
    <v-container>
      <div>
        <form class="search">
          <v-icon class="icon" size="40">mdi-magnify</v-icon>
          <input type="search" id="gsearch" name="gsearch" class="box" />
        </form>

        <div class="movie-list">
          <h2>การค้นหายอดนิยม</h2>

          <div class="movie">
            <div class="movie-thumbnail" v-for="item in 20"></div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
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
