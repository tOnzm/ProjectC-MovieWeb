<template>
  <div>
    <v-card class="detail-box" flat>
      <v-img class="movie-logo" src="@/static/movieImg/cover/starwarthelastjedi.webp">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            possimus expedita animi quibusdam maxime voluptatum impedit,
            laboriosam nesciunt. Possimus adipisci dignissimos voluptate, labore
            quibusdam unde expedita dicta voluptatibus omnis veniam?
          </h3>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-row dense>
          <v-col cols="9" md="10">
            <watchBtn :prepend-icon="'mdi-play'" :text="'รับชมเดี๋ยวนี้'" />
          </v-col>
          <v-col cols="1" md="2"><watchBtn :prepend-icon="'mdi-plus'" /></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MiniCard",
  props: [],
};
</script>

<style lang="scss" scoped>
.detail-box {
  width: 500px;
  margin: 4rem;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  z-index: 2;
  background-color: aqua;
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
.movie-logo {
  width: 100%;
}
</style>
