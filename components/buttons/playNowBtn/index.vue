<template>
  <div>
    <div class="btnFull">
      <v-btn :block="btnBlock" :size="btnSize" :color="color" :large="btnLarge">
        <v-icon :color="iconColor">{{ prependIcon }} </v-icon>
        <span :style="{ color: textColor }">{{ text }}</span>
      </v-btn>
    </div>
    <div class="btnMini">
      <v-btn :block="btnBlock" :color="color">
        <v-icon :color="iconColor">{{ prependIcon }} </v-icon>
        <span :style="{ color: textColor }">{{ text }}</span>
      </v-btn>
    </div>
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
    btnSize: String,
    Number,
    btnBlock: Boolean,
    btnLarge: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.btnFull {
  background-color: #ffffff20;
  transition: transform 0.6s;

  .v-btn {
    background-color: #ffffff20;
  }
}
.btnFull:hover {
  transform: scale(1.03);
}

.btnMini {
  display: none;
}

@media screen and (max-width: 600px) {
  .btnFull {
    display: none;
    .v-btn {
      padding: 0.5rem;
    }
  }
  .btnMini {
    display: inline-block;
    .v-btn {
      height: 30px;
      width: 100%;
    }
  }
}
@media screen and(max-width: 960px) {
  .btnFull {
    display: none;
    .v-btn {
      padding: 0.5rem;
    }
  }
  .btnMini {
    display: inline-block;
    .v-btn {
      height: 30px;
      width: 100%;
    }
  }
}

</style>
