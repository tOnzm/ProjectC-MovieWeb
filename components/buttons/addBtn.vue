<template>
    <v-btn large color="#ffffff50" class="add-to-list">
      <v-icon color="#fff" class="icon"> mdi-plus </v-icon>
    </v-btn>
  </template>
  
  <script>
  export default {
    name: "AddListButton",
  };
  </script>
  
  <style lang="scss" scoped>
  .add-to-list {
    font-weight: 800;
    transition: transform 0.6s;
    width: 50px;
  }
  .add-to-list:hover {
    transform: scale(1.03);
  }
  .icon {
    font-size: 1rem;
  }
  </style>
  