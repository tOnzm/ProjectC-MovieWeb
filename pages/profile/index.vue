<template>
  <div>
    <v-container>
      <div>
        <h2>Profile</h2>
        <div class="profile-main">
          <div v-for="item in 3">
            <div class="profile"></div>
            <h3 class="profile-name">Profile {{ item }}</h3>
          </div>
          <div>
            <div class="profile"><v-icon size="50">mdi-plus</v-icon></div>
            <h3 class="profile-name">Add</h3>
          </div>
        </div>
      </div>

      <div class="watchlist">
        <h3>รายการที่ชอบ</h3>
        <div class="movie-list">
            <div class="movie" v-for="item in 3" >

                
            </div>

        </div>
      </div>

      <div class="watchlist">
        <h3>ดูต่อ</h3>
        <div class="movie-list">
            <div class="movie" v-for="item in 5" >

                
            </div>

        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style lang="scss" scoped>
.profile-main {
  display: flex;
  justify-content: flex-start;
}
.profile {
  background-color: #2c2c2c;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-name {
  text-align: center;
}
.watchlist{
    margin-top: 4rem;
}
.movie-list{
    display: flex;
    gap: 1rem;
}
.movie{
    margin-top: 1rem;
    background-color: #2c2c2c;
    width: 250px;
    height: 300px;
    border-radius: 10px;

}
.container{
    padding: 5rem;
}
</style>
