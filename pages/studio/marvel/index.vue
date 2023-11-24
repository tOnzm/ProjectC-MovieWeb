<template>
  <div>
    <div>
      <Sidebar />
      <movieList />
      <div class="box-item">
        <RecommentCard title-text="MCU Infinity Saga" />
        <RecommentCard title-text="Marvel Origin Stories" />
        <RecommentCard title-text="Marvel Unscripted" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/index.vue";
import RecommentCard from "@/components/slideBox/recommentCard.vue";

export default {
  name: "MarvelPage",
  components: { RecommentCard, Sidebar },
  data: () => ({
    thumbnail: [
      {
        thumbnail: require("/static/movieImg/thumbnail/ahsoka.webp"),
        name: "ahsoka",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/haunting.webp"),
        name: "haunting",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/kevenant.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/legoa.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/loki.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/mickey.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/myhomehero.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/santa.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/the1st.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/tokyo.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/capmarvel.webp"),
        name: "kevenant",
      },
      {
        thumbnail: require("/static/movieImg/thumbnail/vandavision.webp"),
        name: "kevenant",
      },
    ],
  }),

  methods: {
    randomList: function (random) {
      return random.sort(function () {
        return Math.random() * 2 - 1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-item {
  position: relative;
  z-index: 1;
}
</style>
