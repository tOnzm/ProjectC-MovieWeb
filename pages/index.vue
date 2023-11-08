<template>
  <div>
    <MainSideBar/>
    <CarouselsImage />
    <RecommentCard />
    <br />
    <bottomNav />
  </div>
</template>

<script>
import RecommentCard from '../components/slideBox/recommentCard.vue';
import MainSideBar from '../components/sidebar/index.vue'
export default {
    name: "IndexPage",
    components: { RecommentCard,MainSideBar }
};
</script>
