<template>
  <div>
    <MainSideBar />
    <CarouselsImage />


    <RecommentCard title-text="ติดเทรนในประเทศไทย" />
    <RecommentCard title-text="มาใหม่" />
    <RecommentCard title-text="แนะนำสำหรับคุณ" />
    <br />
    <bottomNav />
  </div>
</template>

<script >
import RecommentCard from "../components/slideBox/recommentCard.vue";
import MainSideBar from "../components/sidebar/index.vue";
export default {
  name: "IndexPage",
  components: { RecommentCard, MainSideBar },
  head: {
    title: ' หน้าแรก'
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
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
