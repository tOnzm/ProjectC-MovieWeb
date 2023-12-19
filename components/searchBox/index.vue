<template>
  <div>
    <form class="search" @submit.prevent="search">
      <v-icon class="icon" size="40">mdi-magnify</v-icon>
      <input
        type="search"
        class="box"
        v-model="searchData"
        @input="search"
        placeholder="ค้นหาหนัง, ซีรีส์ "
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchData);
    },
  },
};
</script>

<style lang="scss" scoped>
.box::placeholder {
  color: #858585;
  font-size: 1.2rem;
  font-weight: 600;
  justify-content: center;
}
.search {
  width: 100%;
  background-color: #2c2c2c;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
}
.box {
  color: #eeeeee;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 500;
  width: 100%;
  height: 100%;
}

.icon {
  padding-right: 1rem;
}
</style>
