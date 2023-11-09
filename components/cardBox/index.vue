<template>
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row dense>
          <v-col v-for="item in cardLogo" :key="item.logo" cols="4" md="2" sm="4">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center card-logo', selectedClass]"
                @click="toggle"
              >
                <v-img class="white--text align-end" :src="item.logo"> </v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </template>
  
  <script>
  export default {
    name: "CardLogoGroup",
  
    data: () => ({
      cardLogo: [
        {
          logo: require("/static/movieImg/card/disney.webp"),
        },
        {
          logo: require("/static/movieImg/card/marvel.webp"),
        },
        {
          logo: require("/static/movieImg/card/national.webp"),
        },
        {
          logo: require("/static/movieImg/card/pixar.webp"),
        },
        {
          logo: require("/static/movieImg/card/star.webp"),
        },
        {
          logo: require("/static/movieImg/card/starwars.webp"),
        },
      ],
    }),
  };
  </script>
  
  <style lang="scss" scoped>
  .card-logo {
    transition: transform 0.6s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    height: 100%;
  }
  .card-logo:hover {
    transform: scale(1.2);
    z-index: 1;
  }
  
  .card-logo img {
    object-fit: cover;
  }
  @media screen and(max-width: 600px) {
    .card-logo {
    transition: transform 0.6s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    height: 100%;
  }
    
  }
  </style>
  