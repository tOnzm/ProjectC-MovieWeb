<template>
  <div>
    <div class="full-view">
    <button>ดูทั้งหมด<v-icon>mdi-menu-right</v-icon></button>
  </div>
  <div class="mini-view">
    <button><v-icon>mdi-menu-right</v-icon></button>
  </div>
  </div>
</template>

<script>
export default {
  name: "ViewMoreButton",
};
</script>

<style lang="scss" scoped>
.mini-view {
  display: none;
}
@media screen and (max-width: 600px) {
    .full-view{
        display: none;
    }
    .mini-view{
        display: block;
    }    
}
</style>
