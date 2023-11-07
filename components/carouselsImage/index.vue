<template>
    <div>
      <div>
        <v-carousel
          class="carousel-image"
          hide-delimiters
          cycle
          show-arrows-on-hover
          :show-arrows="false"
        >
          <v-carousel-item
            class="carousel-item"
            v-for="item in imageCover"
            :key="item.id"
          >
            <v-card class="detail-box" flat>
              <v-img class="white--text align-center movie-logo" :src="item.logo">
              </v-img>
              <v-card-text class="text--primary px-0">
                <div class="movie-detail">
                  <h3>2023</h3>
                  <v-icon>mdi-circle-small</v-icon>
                  <h3>Season 1</h3>
                  <v-icon>mdi-circle-small</v-icon>
                  <h3>Thai</h3>
                  <v-icon>mdi-circle-small</v-icon>
                  <div class="movie-rate">
                    <h3>15+</h3>
                  </div>
                </div>
                <div class="movie-synopsis">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                    possimus expedita animi quibusdam maxime voluptatum impedit,
                    laboriosam nesciunt. Possimus adipisci dignissimos voluptate,
                    labore quibusdam unde expedita dicta voluptatibus omnis
                    veniam?
                  </h3>
                </div>
                <div class="movie-type">
                  <h3>Action</h3>
                  <h3>|</h3>
                  <h3>Sci-fi</h3>
                </div>
              </v-card-text>
  
              <v-card-actions class="detail-button">
                <watchBtn />
                <addBtn />
              </v-card-actions>
            </v-card>
            <div class="parallax-image">
              <v-parallax attach="parallax-image"
                ><img :src="item.image" alt="" />
              </v-parallax>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <cardBox />
    </div>
  </template>
  
  <script>
    import cardBox from "../cardBox/index.vue"
  import watchBtn from "../buttons/watchBtn.vue";
  import addBtn from "../buttons/addBtn.vue"
  
  export default {
    name: "CarouselsImage",
    components: { cardBox,addBtn,watchBtn },
    data() {
      return {
        imageCover: [
          {
            id: 1,
            image: require("/static/movieImg/cover/moving.webp"),
            logo: require("/static/movieImg/logos/moving.webp"),
          },
          {
            id: 2,
            image: require("/static/movieImg/cover/starwarthelastjedi.webp"),
            logo: require("/static/movieImg/logos/starwarthelastjedi.webp"),
          },
          {
            id: 3,
            image: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            logo: require("/static/movieImg/logos/thefirstresponders.webp"),
          },
          {
            id: 4,
            image: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            logo: require("/static/movieImg/logos/thefirstresponders.webp"),
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .parallax-image {
    max-width: 100%;
    max-height: 100%;
    padding: 0;
  }
  .carousel-image {
    max-width: 100%;
    max-height: 100%;
  }
  .movie-logo {
    width: 100%;
  }
  .detail-box {
    width: 500px;
    margin: 4rem;
    padding: 1rem;
    position: absolute;
    top: 2%;
    left: 5%;
    background: transparent;
    z-index: 2;
  }
  .movie-detail {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .movie-rate {
    display: flex;
    align-items: center;
    background-color: #ffffff20;
    padding: 2px 10px 2px 10px;
    border-radius: 5px;
  }
  .movie-synopsis h3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #ffffff90;
    font-weight: 400;
  }
  .movie-type {
    display: flex;
    column-gap: 0.75rem;
  }
  .detail-button {
    display: flex;
    justify-content: space-between;
  }
  @media screen and(max-width: 600px) {
    .parallax-image {
      width: 100%;
    }
  
    .carousel-image {
      max-height: 100%;
      height: 200px;
    }
    .detail-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 1rem;
      position: absolute;
      top: 20%;
      left: 0;
      background: transparent;
      z-index: 2;
      background: #121212;
      background: linear-gradient(0deg, #121212 60%, rgba(255, 255, 255, 0) 100%);
    }
    .movie-logo {
      width: 80%;
    }
    .movie-detail {
      display: flex;
      justify-content: center;
    }
    .movie-detail h3 {
      font-size: 14px;
      text-align: center;
    }
    .movie-rate {
      display: flex;
      align-items: center;
      background-color: #ffffff20;
      padding: 1px 5px 1px 5px;
      border-radius: 5px;
    }
    .movie-synopsis {
      display: none;
    }
    .movie-type {
      display: none;
    }
    .detail-button {
      display: flex;
      justify-content: center;
    }
  }
  </style>
  