<template>
  <v-container>
    <div class="cast">
      <h1>นักแสดง</h1>
      <div class="profile">
        <img src="@/static/movieImg/card/marvel.webp" alt="" />
        <h3>{{ name }}</h3>
        <h3>{{ character }}</h3>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Cast",
  props: {
    name: String,
    character: String,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-inline: 3rem;
}
.cast {
  z-index: 998;
  position: absolute;
  top: 70%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.profile > img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.profile > h3 {
  padding-top: 1rem;
}
</style>
