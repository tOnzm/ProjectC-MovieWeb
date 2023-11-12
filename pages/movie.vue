<template>
  <div>
    <MainSideBar />

    <moviepage />
  </div>
</template>

<script>
import MainSideBar from '../components/sidebar/index.vue'


export default {
  name: " MoviePage",
  components: { MainSideBar }

};
</script>

<style lang="scss" scoped></style>
