<template>
    <v-bottom-navigation :elevation="0" height="60" color="#fff" grow class="bottom-nav">
      <v-btn value="home" id="no-background-hover">
        <span>หน้าหลัก</span>
        <v-icon>mdi-home-variant</v-icon>
      </v-btn>
  
      <v-btn id="no-background-hover" value="search">
        <span>ค้นหา</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  
      <v-btn id="no-background-hover" value="profile">
        <span>โปรไฟล์ของฉัน</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </template>
  
  <script>
  export default {
    name: "BottomNavigation",
  };
  </script>
  
  <style lang="scss" scoped>
  .bottom-nav {
    position: fixed;
    background-color: #121212;
    border-top: 1px solid #ffffff20;
  }
  #no-background-hover::before {
    background-color: transparent !important;
  }
  span{
    font-weight: 200;
    padding: 2px;
  }
  @media screen and(min-width: 1280px) {
    .bottom-nav {
      display: none;
    }
  }
  
  </style>
  