<template>
  <div>
    
    <NuxtLink :to="`/${path}`" class="thumbnail-main">
      <div class="thumbnail-movie">
        <img class="align-center" :src="getImageUrl(thumnailImage)" />
      </div>
      <div class="mx-1 thumbnail-hover">
        <div class="hover-detail">
          <!-- เพิ่มเงื่อนไขที่ตรวจสอบว่ามีข้อมูล logos หรือไม่ -->
          <img class="logo-movies" :src="getLogoUrl(movieLogo)" alt="" />
          <div>
            <div class="detail-text">
              <p>{{ movieYear(year) }}</p>
              <v-icon>mdi-circle-small</v-icon>
              <p>{{ movieTime(time) }}</p>
            </div>
          </div>
        </div>
        <img class="align-center" :src="getImageUrl(backdropImage)" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import {
  getImageUrl,
  getLogoUrl,
  movieYear,
  movieTime,
} from "@/plugins/api.js";
export default {
  name: "thumbnail",
  props: {
    path: Number,
    thumnailImage: String,
    backdropImage: String,
    time: Number,
    year: String,
    movieLogo: String,
  },
  methods: {
    getImageUrl(path) {
      return getImageUrl(path);
    },

    getLogoUrl(movieLogo) {
      return getLogoUrl(movieLogo);
    },
    movieYear(year) {
      return movieYear(year);
    },
    movieTime(time) {
      return movieTime(time);
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-detail {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
  width: 100%;
  white-space: nowrap;
  text-overflow: clip;
}

.logo-movies {
  width: 150px !important;
}
.detail-text {
  padding-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: 800;
  color: #fff;
}
.thumbnail-movie,
.thumbnail-hover {
  display: flex;
  margin: 0.5rem;
  width: 180px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  object-fit: fill;
  transition: width 0.5s;
  transition-timing-function: ease-in-out;
  border-radius: 10px;

}

.thumbnail-hover img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.thumbnail-movie img {
  width: 100%;
  border-radius: 10px;
  object-fit: fill;
}
.thumbnail-main {
  position: relative;
}
.thumbnail-hover {
  display: none;
}
.thumbnail-main:hover .thumbnail-hover {
  display: flex;
  transition: width 0.5s;
  transition-timing-function: ease-in-out;
}

.thumbnail-main:hover .thumbnail-movie {
  display: none;
}
.thumbnail-hover:hover {
  object-fit: cover;
  display: flex;
  width: 300px;
  border-radius: 10px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media screen and(max-width: 600px) {
  .slide-group-title {
    margin: 1rem 1rem;
  }
  .thumbnail-movie {
    width: 120px;
    height: 180px;
    margin: 0.2rem;
  }
  .thumbnail-hover:hover {
    display: none;
  }
  .thumbnail-main:hover .thumbnail-hover {
    display: none;
  }
  .slide-group-title h1 {
    font-size: 1rem;
    margin-left: 0;
  }
  .thumbnail-main:hover .thumbnail-movie {
    display: flex;
  }

  v-deep::v-slide-group__next,
  v-deep::v-slide-group__prev {
    display: none;
  }
  .v-slide-group__next,
  .v-slide-group__prev {
    display: none;
  }
  .v-slide-group {
    margin-left: 0vw;
  }
}
</style>
