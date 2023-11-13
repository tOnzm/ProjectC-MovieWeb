<template>
  <div>
    <div class="slide-group-title">
      <h1>{{ titleText }}</h1>
      <viewMoreBtn />
    </div>
  </div>
</template>

<script>
import viewMoreBtn from "../buttons/viewMoreBtn/index.vue";
export default {
  name: "TitleText",
  components: { viewMoreBtn },
  props: {
    titleText: String,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
