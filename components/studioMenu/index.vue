<template>
  <div>
    <v-row class="studio-menu">
      <v-col v-for="item in studio" :key="item.id">
        <div class="studio-menu-box">
          <img :src="item.logo" alt="" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StudioMenu",
  data() {
    return {
      studio: [
        {
          id: 1,
          logo: require("@/static/movieImg/card/disney.webp"),
        },
        {
          id: 2,

          logo: require("@/static/movieImg/card/marvel.webp"),
        },
        {
          id: 3,

          logo: require("@/static/movieImg/card/national.webp"),
        },
        {
          id: 4,

          logo: require("@/static/movieImg/card/pixar.webp"),
        },
        {
          id: 5,

          logo: require("@/static/movieImg/card/star.webp"),
        },
        {
          id: 6,

          logo: require("@/static/movieImg/card/starwars.webp"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.studio-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  margin-left: 3rem;
  margin-right: 1rem;
}
.studio-menu-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.75rem;
  transition: transform 0.5s;
}
.studio-menu-box:hover {
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.studio-menu-box img {
  border-radius: 0.75rem;
  width: 100%;
}
</style>
