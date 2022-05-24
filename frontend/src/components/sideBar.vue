<template>
  <div class="left fade1s">
    <div class="side_top">AIR</div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>


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
  font-size: 30px;
  color: white;
}
</style>
