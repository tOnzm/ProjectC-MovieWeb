<template>
  <div>
    <carouselsSeriesImage />
    <seriesThumbnail :titleText="'ออริจินัล'">
      <div v-for="item in series" :key="item.id">
        <thumbnail
          :thumbnailImage="item.poster_path"
          :path="item.id"
          :backdropImage="item.backdrop_path"
          :moviesLogo="item.file_path"
          :languagesData="item.spoken_languages"
          :episord="item.number_of_episodes"
          :season="item.number_of_seasons"
          :contentRating="item.certification"
          :front="'original'"
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
import { fetchSeries, paramsSeries } from "@/api/series.js";
export default {
  name: "IndexPage",
  components: { carouselsSeriesImage, seriesThumbnail, thumbnail, studioMenu },
  head: {
    title: " หน้าแรก",
  },
  data() {
    return {
      series: [],
    };
  },
  methods: {
    async fetchSeries() {
      const axios = this.$axios;
      this.series = await fetchSeries(axios);
    },
  },
  mounted() {
    this.fetchSeries();
  },
};
</script>

<style lang="scss" scoped></style>
