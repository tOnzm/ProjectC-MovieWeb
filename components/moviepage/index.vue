<template>
  <div>
    <div class="logo-mobile"><img src="@/static/logo-d-plus.svg" alt="" /></div>
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
            <img
              class="white--text align-center movie-logo"
              src="@/static/movieImg/logos/moving.webp"
            />
            <img />
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

            <v-card-actions>
              <v-row dense>
                <v-col cols="9" md="10">
                  <watchBtn
                    :prepend-icon="'mdi-play'"
                    :text="'รับชมเดี๋ยวนี้'"
                    :color="'#ffffff'"
                    :icon-color="'#000'"
                    :text-color="'#000'"
                  />
                </v-col>
                <v-col cols="1" md="2"
                  ><watchBtn :prepend-icon="'mdi-plus'"
                /></v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          <div class="image-cover">
            <img :src="item.image" alt="" />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>

    <v-container>
      <div class="title-season">
        <v-row>
          <v-col md="1"
            ><v-btn text class="px-10" plain x-large><h2>ตอน</h2></v-btn></v-col
          >

          <v-col md="2"
            ><v-btn text class="px-10" x-large plain><h2>ตัวอย่างและอื่นๆ</h2></v-btn></v-col
          >
          
          <v-col md="2"
            ><v-btn text class="px-10" x-large plain><h2>แนวคล้ายกัน</h2></v-btn></v-col
          >
        </v-row>
        <v-divider class="my-5"></v-divider>

        <v-row class="season"
          ><v-col md="1"
            ><v-btn text class="px-10" plain><h3>ซีซั่น 1</h3></v-btn></v-col
          >
          <v-col md="1"
            ><v-btn text class="px-10" plain><h3>ซีซั่น 2</h3></v-btn></v-col
          ></v-row
        >
      </div>

      <div v-for="n in 10" :key="n">
        <v-card class="episode-box" flat>
          <div class="ep-thumbnail">
            <img src="@/static/movieImg/ep_thumbnail/moving.jpg" /> <img />
          </div>
          <v-card-text class="text--primary px-0 detail">
            <div><h1>ชื่อตอน</h1></div>
            <div class="ep-detail">
              <h3>ซีซั่น 1 ตอนที่</h3>
              <v-icon>mdi-circle-small</v-icon>
              <h3>วันที่ฉาย</h3>
              <v-icon>mdi-circle-small</v-icon>
              <h3>เวลา</h3>
            </div>
            <div class="movie-synopsis">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                possimus expedita animi quibusdam maxime voluptatum impedit,
                laboriosam nesciunt. Possimus adipisci dignissimos voluptate,
                labore quibusdam unde expedita dicta voluptatibus omnis veniam?
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import watchBtn from "../buttons/watchBtn.vue";

export default {
  name: "CarouselsImage",
  components: { watchBtn },
  data() {
    return {
      imageCover: [
        {
          id: 1,
          image: require("/static/movieImg/cover/moving.webp"),

          logo: require("/static/movieImg/logos/starwarthelastjedi.webp"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image-cover {
  position: relative;
  float: bottom;
  height: 100%;
  width: 100%;
}
.image-cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
  z-index: 1;
}
.image-cover img {
  height: 100%;
  width: 100%;
  object-fit: cover;
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
.logo-mobile {
  display: none;
}
.episode-box {
  margin-left: 4rem;
  margin-top: 1rem;
  padding: 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  z-index: 2;
  gap: 1rem;
}
.ep-thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
}
.ep-thumbnail img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.ep-detail {
  display: flex;
  justify-content: flex-start;
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
}
.season {
  display: flex;
}
.title-season {
  margin-left: 4rem;
  padding: 1rem;
}
@media screen and(max-width: 600px) {
  .image-cover {
    position: relative;
    float: bottom;
    height: 60%;
    width: 100%;
  }
  .image-cover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
    z-index: 1;
  }
  .image-cover img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .v-carousel {
    height: 350px !important;
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
  .logo-mobile {
    display: block;
    position: absolute;
    z-index: 999;
    margin: 1rem;
  }
  .logo-mobile img {
    width: 45px;
  }
}
</style>
