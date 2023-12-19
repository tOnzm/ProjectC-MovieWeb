<template>
  <div>
    <v-row class="studio-menu">
      <v-col
        cols="4"
        md="2"
        sm="2"
        v-for="item in studio"
        :key="item.id"
        style="padding: 0.2rem !important"
      >
        <div class="studio-menu-box">
          <img :src="item.studio_logo" alt="" />
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
          studio_logo: require("@/static/movieImg/card/disney.webp"),
        },
        {
          id: 2,

          studio_logo: require("@/static/movieImg/card/marvel.webp"),
        },
        {
          id: 3,

          studio_logo: require("@/static/movieImg/card/national.webp"),
        },
        {
          id: 4,

          studio_logo: require("@/static/movieImg/card/pixar.webp"),
        },
        {
          id: 5,

          studio_logo: require("@/static/movieImg/card/star.webp"),
        },
        {
          id: 6,

          studio_logo: require("@/static/movieImg/card/starwars.webp"),
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

//Responsive
@media screen and(max-width: 600px) {
  .studio-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    margin: 1rem;
  }
}
@media screen and(max-width: 960px) {
  .studio-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .studio-menu-box,
  .studio-menu-box img {
    border-radius: 0.5rem;
  }
}
@media screen and(max-width: 1264px) {
  .studio-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    height: 150px;
  }
  .studio-menu-box,
  .studio-menu-box img {
    border-radius: 0.5rem;
  }
}
</style>
