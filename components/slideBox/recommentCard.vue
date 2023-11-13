<template>
  <div>
    <div class="slide-group-title">
      <h1>{{ titleText }}</h1>
      <viewMoreBtn />
    </div>
    <v-slide-group show-arrows center-active>
      <v-slide-group-item 
      v-for="item in randomList(thumbnail)" :key="item.thumbnail">
        <NuxtLink to="/movie"
          ><v-card class="mx-1 thumbnail-movie">
            <v-img class="align-center" :src="item.thumbnail"> </v-img> </v-card
        ></NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script>
import viewMoreBtn from "../buttons/viewMoreBtn/index.vue";
export default {
  name: "RecommentMovie",
  components: { viewMoreBtn },
  props: {
    titleText: String,
  },
  data: () => ({
    thumbnail: [
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
      {
        thumbnail: require("/static/movieImg/thumbnail/capmarvel.webp"),
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/vandavision.webp"),
      },
    ],
  }),

  methods: {
    randomList: function (random) {
      return random.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
};
</script>

<style lang="scss" scoped>

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
