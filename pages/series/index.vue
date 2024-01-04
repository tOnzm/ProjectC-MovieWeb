<template>
  <div>
    <carouselsSeriesImage />
    <seriesThumbnail :titleText="'ออริจินัล'">
      <div v-for="item in airingTodayTVData" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.file_path"
          :languagesData="item.spoken_languages"
          :episord="item.number_of_episodes"
          :season="item.number_of_seasons"
          :contentRating="item.certification"
          :front="'series'"
        >
        </thumbnail>
      </div>
    </seriesThumbnail>
    <bottomNav />
  </div>
</template>

<script>
import carouselsSeriesImage from "@/components/carouselsSeriesImage/index.vue";
import studioMenu from "@/components/studioMenu/index.vue";
import seriesThumbnail from "@/components/seriesThumbnail/index";
import thumbnail from "@/components/seriesThumbnail/thumbnail/index.vue";
import airingTodayTV from "/api/series/airingToday.js";
export default {
  name: "IndexPage",
  components: { carouselsSeriesImage, seriesThumbnail, thumbnail, studioMenu },
  head: {
    title: " Series & TV",
  },
  data() {
    return {
      airingTodayTVData: [],
    };
  },
  methods: {
    async airingTodayTV() {
      const series_01 = await airingTodayTV();
      this.airingTodayTVData = series_01;
    },
  },
  mounted() {
    this.airingTodayTV();
  },
};
</script>

<style lang="scss" scoped></style>
