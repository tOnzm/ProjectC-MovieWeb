<template>
  <div>
    <div class="slide-group-title">
      <h1>{{ titleText }}</h1>
      <viewMoreBtn :path="'nowshowing'" />
    </div>
    <v-slide-group show-arrows center-active>
      <slot> </slot>
    </v-slide-group>
  </div>
</template>

<script>
import viewMoreBtn from "../buttons/viewMoreBtn/index.vue";

export default {
  name: "NowPlaying",
  components: { viewMoreBtn },
  props: {
    titleText: String,
  },
};
</script>

<style lang="scss">
//ชื่อหัวข้อ
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

.v-slide-group__next,
.v-slide-group__prev {
  display: flex;
  width: 5px;
}
.v-slide-group__next:hover,
.v-slide-group__prev:hover {
  display: flex;
}
.v-slide-group {
  margin-left: 5vw;
}

@media screen and(max-width: 600px) {
  .slide-group-title {
    margin: 0.75rem 0rem 0rem 0.75rem;
  }
  .slide-group-title h1 {
    font-size: 1rem;
    margin-left: 0;
  }

  .v-slide-group__next,
  .v-slide-group__prev {
    display: none;
  }
  .v-slide-group {
    margin-left: 0vw;
  }
}
</style>
