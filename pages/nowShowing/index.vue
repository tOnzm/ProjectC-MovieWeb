<template>
  <v-container>
    <h1>มาใหม่</h1>
    <div class="movie-list">
      <div v-for="n in 20">
        <NuxtLink :to="`/${5555}`">
          <div class="thumbnail">
            <img
              class="tn"
              src="@/static/movieImg/cover/starwarthelastjedi.webp"
              alt=""
            />
            <img
              class="logo"
              src="@/static/movieImg/logos/starwarthelastjedi.webp"
              alt=""
            />
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
.container {
  padding-left: 4rem;
  padding-top: 4rem;
}
.thumbnail {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 240px;
  border-radius: 0.5rem;
 
}
.thumbnail > .tn {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail > .logo {
  width: 300px;
  height: auto;
  border-radius: 0.5rem;
  position: absolute;
  margin-bottom: 2rem;
  
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
