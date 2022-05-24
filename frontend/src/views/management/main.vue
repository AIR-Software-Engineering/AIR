<template>
  <div>
    <LeftSideBar></LeftSideBar>
    <div style="margin-left:1000px">
      hello
    </div>
    <div class="font" style="margin-top:40px; font-size:30px; margin-right:500px">
      OO님을 위한 오늘의 추천
    </div>
    <div class="font" style="margin-top:50px; margin-left:100px">
      학술자료
      <a @click="goToacd" style="margin-left:700px">더보기</a>
    </div>
    <div>
      <div class="container">
        <div class="item"/>
        <div class="item"/>
        <div class="item"/>
      </div>
    </div>
    <div class="font" style="margin-top:200px; margin-left:100px">
      강의
      <a @click="goTolec" style="margin-left:700px">더보기</a>
    </div>
    <div>
      <div class="container">
        <div class="item"/>
        <div class="item"/>
        <div class="item"/>
      </div>
    </div>

    <div class="font" style="margin-top:200px; font-size:30px; margin-right:630px">
      지금 뜨는 자료
    </div>
    <div class="font" style="margin-top:50px; margin-left:100px">
    </div>
    <div>
      <div class="container">
        <div class="item"/>
        <div class="item"/>
        <div class="item"/>
      </div>
    </div>

  </div>
</template>

<script>
import LeftSideBar from "../../components/sideBar.vue";

export default {
  data() {
    return {
    }
  },
  components : {
    LeftSideBar,
  },
  methods : {
    goTolec : function(){
      this.$router.push('lecture');
    },
    goToacd : function(){
      this.$router.push('academicData');
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
.container{
  display: flex;
  justify-content: space-around;
  margin-left: 270px;
  margin-right: 150px;
  margin-top: 40px;
}
.item{
  border: 1px solid;
  border-color: black;
  width: 280px;
  height: 180px;
}
</style>
