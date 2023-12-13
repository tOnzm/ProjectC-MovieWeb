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

          logo: require("@/static/movieImg/card/disney.webp"),
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
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border-radius: 0.5rem;
  transition: transform 0.5s;
}
.studio-menu-box:hover {
  transform: scale(1.2);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>
