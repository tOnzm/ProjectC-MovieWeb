<template>
  <v-container>
    <div class="error">
      <h1>ไม่พบข้อมูล</h1>
    </div>
    <div>
      <NuxtLink to="/"> <p>กลับไปยังหน้าแรก</p></NuxtLink>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
