<template>
  <div>
    <h1>ชื่อเรื่อง {{ post.title }}</h1>
    <h5>{{ post.description }}</h5>
  </div>
</template>

<script >
export default{
  async asyncData({params , $http}) {
    const post = await $http.$get(`https://dummyjson.com/products/${params.id}`)
    return {post}
  }
}

</script>

<style lang="scss" scoped></style>
