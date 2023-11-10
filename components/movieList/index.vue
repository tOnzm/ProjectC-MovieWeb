<template>
  <div>
    <img
      class="image-cover"
      src="@/static/movieImg/parallax/marvel.webp"
      alt=""
    
    />
    <v-container>
      <div class="image-logo">
        <img src="@/static/movieImg/parallax/marvel2.webp" alt="" />
      </div>
     
    </v-container>
  </div>
</template>

<script>
import RecommentCard from "@/components/slideBox/recommentCard.vue";

export default {
  name: "MovieCategory",
  components: { RecommentCard },
};
</script>

<style lang="scss" scoped>
.image-cover {
  position: absolute;
  z-index: 0;
  width: 100%;
}

.image-logo {
  position: relative;
  z-index: 1;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
