<template>
  <div>
    <v-navigation-drawer
      class="custom-drawer"
      v-model="drawer"
      app
      width="500"
      floating
      expand-on-hover
      mini-variant-width="150"
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account-circle",
          title: "Home Page",
          to: "/",
        },
        {
          icon: "mdi-magnify",
          title: "Loop Page",
          to: "/",
        },
        {
          icon: "mdi-home-variant",

          title: "Movie",
          to: "/",
        },
        {
          icon: "mdi-television-classic",
          title: "Series",
          to: "/",
        },
        {
          icon: "mdi-movie-open",
          title: "Movie",
          to: "/",
        },
        {
          icon: "mdi-star-four-points",
          title: "Originals",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style scoped lang="scss">
.custom-drawer-mini {
  display: none;
}
.custom-drawer {
  background: linear-gradient(
    90deg,
    rgba(15, 16, 20, 1) 10%,
    rgba(15, 16, 20, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
}
.Sidebar {
  display: flex;
  justify-items: flex-start;
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
  margin-top: 2rem;
  margin: 1rem;
}
@media screen and(max-width: 960px) {
  .custom-drawer {
    display: none;
  }
}
</style>
