<template>
    <div>
      <v-sheet class="mx-auto" max-width="100%" style="background: transparent">
        <div class="slide-group-title">
          <h1>แนะนำ</h1>
          <viewmoreBtn />
        </div>
        <v-slide-group class="pa-4 slide-group-thumnail" show-arrows>
          <v-slide-group-item v-for="item in movie" :key="item.thumbnail">
            <v-card class="mx-1 thumbnail-movie">
              <v-img class="align-center" :src="item.thumbnail"> </v-img>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </template>
  
  <script>
import viewmoreBtn from '../Buttons/viewmoreBtn.vue';  
  export default {
    name: "RecommentMovie",
    components: { viewmoreBtn},
  
    data: () => ({
      movie: [
        {
          thumbnail: require("/static/movieImg/thumbnail/ahsoka.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/haunting.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/kevenant.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/legoa.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/loki.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/mickey.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/myhomehero.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/santa.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/the1st.webp"),
        },
        {
          thumbnail: require("/static/movieImg/thumbnail/tokyo.webp"),
        },
      ],
    }),
  };
  </script>
  
  <style lang="scss" scoped>
  .thumbnail-movie {
    display: flex;
    width: 180px;
    height: 240px;
    transition: transform 0.5s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: visible;
    contain: none;
  }
  .thumbnail-movie img {
    object-fit: cover;
  }
  .thumbnail-movie:hover {
    transform: perspective(1000px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: #ffffff40 0px 5px, #ffffff30 0px 10px, #ffffff20 0px 15px,
      #ffffff10 0px 20px, #ffffff05 0px 25px;
  }
  .slide-group-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5% 0 5%;
  }
  @media screen and(max-width: 600px) {
    .thumbnail-movie {
   
    width: 120px;
    height: 160px;
  }
  }
  </style>
  