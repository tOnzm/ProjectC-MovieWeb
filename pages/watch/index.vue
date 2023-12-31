<template>
  <div class="screen">
    <video width="100%" height="100%" controls loop error buffered autoplay controller preload>
      <source src="@/assets/video/dp.webm" type="video/webm" />
      <source src="@/assets/video/dp.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.screen {
  width: 80vw;
  height: 80vh;
  background-color: #292929;
  position: relative;
  left: 10%;
  top: 10%;
}
</style>
