<template>
  <div>
    <MainSideBar/>
    <CarouselsImage />
    <RecommentCard title-menu="ติดเทรนในประเทศไทย"/>
    <RecommentCard title-menu="มาใหม่"/>
    <RecommentCard title-menu="ดิสนีย์พลัส ออลิจินัลส์"/>
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
