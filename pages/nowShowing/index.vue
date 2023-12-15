<template>
  <v-container>
    <h1>มาใหม่</h1>
    <div class="movie-list">
      <div v-for="n in 20">
        <NuxtLink :to="`/${5555}`">
            <div class="thumbnail">
          <img src="@/static/movieImg/thumbnail/ahsoka.webp" alt="" />
        </div>
        </NuxtLink>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.thumbnail {
  display: flex;
  width: 180px;
  height: 240px;
  border-radius: 0.5rem;

  background-color: rgb(65, 65, 65);
}
.thumbnail > img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;

  background-color: rgb(63, 63, 63);
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
