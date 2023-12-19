<template>
  <div>
    <NuxtLink :to="`/${path}`" class="thumbnail-main">
      <div class="thumbnail-movie">
        <img class="align-center" :src="getImageUrl(thumbnailImage)" />
      </div>
      <div class="mx-1 thumbnail-hover">
        <div class="hover-detail">
          <img class="logo-movies" :src="getLogoUrl(moviesLogo)" alt="" />
          <NuxtLink :to="`/${path}`">
            <watchBtn
              :prepend-icon="'mdi-play'"
              :text="'รับชมเดี๋ยวนี้'"
              :color="'#ffffff90'"
              :icon-color="'#000'"
              :text-color="'#000'"
              :btn-size="'small'"
            />
          </NuxtLink>
          <div>
            <div class="detail-text">
              <h3>{{ languages(languagesData) }}</h3>
              <v-icon>mdi-circle-small</v-icon>
              <h3>{{ movieTime(time) }}</h3>
              <v-icon>mdi-circle-small</v-icon>
              <div class="movie-rating">
                <h3>{{ certification(contentRating) }}</h3>
              </div>
            </div>
          </div>
        </div>

        <img
          class="align-center backdrop-Image"
          :src="getImageUrl(backdropImage)"
        />
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
  languages,
  certification,
} from "@/plugins/api.js";
import watchBtn from "@/components/buttons/watchBtn";

export default {
  name: "thumbnail",
  components: { watchBtn },
  props: {
    path: Number,
    thumbnailImage: String,
    backdropImage: String,
    time: Number,
    languagesData: Array,
    moviesLogo: String,
    contentRating: null,
  },
  methods: {
    getImageUrl(path) {
      return getImageUrl(path);
    },

    getLogoUrl(path) {
      return getLogoUrl(path);
    },
    movieYear(year) {
      return movieYear(year);
    },
    movieTime(time) {
      return movieTime(time);
    },
    languages(languagesData) {
      return languages(languagesData);
    },
    certification(certificationData) {
      return certification(certificationData);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff20;
  padding: 2px 10px 2px 10px;
  border-radius: 5px;
}
.hover-detail {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, #12121200 0%, #121212 100%);
  width: 100%;
  white-space: nowrap;
  text-overflow: clip;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-movies {
  width: 150px !important;
  margin-bottom: 1rem;
}
.backdrop-Image {
  border-radius: 10px;
}
.detail-text {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
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
