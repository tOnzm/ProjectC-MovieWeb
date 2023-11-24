<template>
  <div>
    <h1>Product</h1>
    <div v-for= "item in movies" :key="item.Title">
      <NuxtLink :to="`/marvel/${item.Title}`"> {{ item.Title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: movies } = await useFetch(
  "https://dummyjson.com/products/"
);
</script>

<style lang="scss" scoped>
.box-item {
  position: relative;
  z-index: 1;
}
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
  width: 180px;
  height: 240px;
  transition: transform 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.thumbnail-movie img {
  object-fit: cover;
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
