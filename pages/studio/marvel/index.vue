<template>
  <div>
    <div>
      <Sidebar />
      <movieList />
      <v-container>
        <div class="box-item">
          <RecommentCard title-menu="MCU Infinity Saga" />
          <RecommentCard title-menu="Marvel Origin Stories" />
          <RecommentCard title-menu="Marvel Unscripted" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/index.vue";
import RecommentCard from "@/components/slideBox/recommentCard.vue";

export default {
  name: "MarvelPage",
  components: { RecommentCard, Sidebar },
};
</script>

<style lang="scss" scoped>
.box-item {
  position: relative;
  z-index: 1;
}
</style>
