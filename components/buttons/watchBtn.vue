<template>
    <v-btn large class="WatchNow" color="#ffffff50"> Watch Now</v-btn>
  </template>
  
  <script>
  export default {
    name: "WatchNowButton",
  };
  </script>
  
  <style lang="scss" scoped>
  .WatchNow {
    font-size: calc(60% + 0.5vmin);
    width: 80%;  
    color: #fff;
    font-weight: 800;
    transition: transform 0.6s;
  }
  .WatchNow:hover{
    transform: scale(1.03);
  }
  </style>
  