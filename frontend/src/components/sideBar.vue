<template>
  <div class="left fade1s">
    <router-link to="/main">
      <div class="side_top">AIR</div>
    </router-link>
    <div>
      <router-link to="/lecture">
        <div class="selections">
          강의
        </div>
      </router-link>
      <router-link to="/lecture">
        <div class="selections">
          이수체계도
        </div>
      </router-link>
      <router-link to="/lecture">
        <div class="selections">
          학술자료
        </div>
      </router-link>
      <router-link to="/lecture">
        <div class="selections">
          학술정보
        </div>
      </router-link>
    </div>
    <button @click="goToUser" style="margin-top:120px;background-color:transparent; border:none">
      <div>
        <img src="../assets/user.png" style="width:30px; height:30px;">
      </div>
      <div class="font" style="font-size:20px; color:white">
        My Page
      </div>
    </button>


  </div>
</template>

<script>
export default {
  methods: {
    goToUser : function(){
      this.$router.push("/lecture");
    }
  }
}
</script>

<style lang="css" scoped>
.font {
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
}

div.left {
  position:fixed;
   top:0px;
   left:0px;
   width:250px;
   height:1000px;
   background:rgba(255,98,124,0.6);
   padding:40px 0;
   overflow: hidden
}
.fade1s {
  animation: fade-in 1.5s ease-in-out;
}
.side_top{
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
  font-size: 40px;
  color: white;
  margin-top: 30px;
  margin-bottom: 100px;
}
.selections{
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
  font-size: 25px;
  color: white;
  padding: 20px;
}
a {
  text-decoration: none;
}
</style>
