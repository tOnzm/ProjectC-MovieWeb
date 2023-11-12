<template>
  <div>
    <v-navigation-drawer
      class="custom-drawer"
      v-model="drawer"
      app
      width="500"
      floating
      expand-on-hover
      mini-variant-width="75"
    >
      <div class="Logo">
        <img src="@/static/logo-d-plus.svg" />
      </div>
      <div class="Sidebar">
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            exact
            class="List"
          >
            <v-list-item-action class="IconMenu">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content class="TitleMenu">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MainSideBar",
  data() {
    return {
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-account-circle",
          title: "โปรไฟล์ของฉัน",
          to: "/",
        },
        {
          icon: "mdi-magnify",
          title: "ค้นหา",
          to: "/",
        },
        {
          icon: "mdi-home-variant",
          title: "หน้าแรก",
          to: "/",
        },
        {
          icon: "mdi-television-classic",
          title: "ซีรีส์",
          to: "/",
        },
        {
          icon: "mdi-movie-open",
          title: "ภาพยนตร์",
          to: "/",
        },
        {
          icon: "mdi-star-four-points",
          title: "ออริจินัล",
          to: "/",
        },
      ],
      miniVariant: true,
      title: "Vuetify.js",
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-navigation-drawer__content{
  display: grid;
}
.custom-drawer {
  background: linear-gradient(
    90deg,
    rgba(15, 16, 20, 1) 20%,
    rgba(15, 16, 20, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  will-change: initial;
}
.Sidebar {
  display: flex;
  justify-content: flex-start;
  margin: 1rem;
}
.Navbar {
  background-color: #0f101400;
  box-shadow: none;
  display: none;
}
.List {
  color: transparent;
  background: transparent;
  transition: transform 0.3s;
 
}
.List:hover {
  background-color: transparent;
  transform: scale(1.2);
}
.TitleMenu {
  color: #fff;
}
.IconMenu .v-icon {
  color: #fff;
}

.Logo {
  margin-top: 3rem;
  margin: 1rem;
}
.Logo img{
  margin-top: 2rem;
}
@media screen and(max-width: 600px) {
  .custom-drawer {
    display: none;
  }
}
</style>
