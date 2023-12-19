<template>
  <div class="button-custom">
    <v-btn :block="btnBlock" :size="btnSize" :color="color" >
      <v-icon :color="iconColor">{{ prependIcon }} </v-icon>
      <span :style="{ color: textColor }">{{ text }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "PlayNowButton",
  props: {
    text: String,
    prependIcon: String,
    color: String,
    iconColor: String,
    textColor: String,
    btnSize: String,Number,
    btnBlock: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.button-custom {
  text-align: center;
  align-items: center;
  transition: transform 0.6s;
}
.button-custom:hover {
  transform: scale(1.03);
}
.button-custom .v-btn {
  background-color: #ffffff20;
}


@media screen and (max-width: 600px) {
  .button-custom .v-btn {
    padding: 1rem;
  }
}
</style>
