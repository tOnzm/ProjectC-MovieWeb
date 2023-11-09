<template>
 <div class="button-custom">
  <v-btn block size="x-large">    
    <v-icon>{{ prependIcon }} </v-icon>
    {{ text }}
  </v-btn>
 </div>
</template>

<script>
export default {
  name: "WatchNowButton",
  props: {
    text: String,
    prependIcon: String,
  },
};
</script>

<style lang="scss" scoped>
.button-custom{
text-align: center;
align-items: center; 
}
.button-custom .v-btn{
  background-color: #ffffff70;
  padding: 1.5rem;
}
@media screen and (max-width: 600px) {
  .button-custom .v-btn{
    padding: 1rem;
  }
  
}

</style>
