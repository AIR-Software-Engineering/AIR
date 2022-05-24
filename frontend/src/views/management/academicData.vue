<template>
  <div>
    <LeftSideBar/>
    <div style="margin-left:1000px">
      hello
    </div>
    <div class="right font" style="margin-top:50px; font-size:30px">
      학술자료
      <div class="container" style="margin-top:50px;">
        <div style="float:left; display:flex; width:40%">
          <div style="float:left;">
            <select style="width:150px; height:40px;">
              <option>가</option>
              <option>나</option>
              <option>다</option>
            </select>
          </div>
          <div style="float:center; margin-left: 30px;">
            <select style="width:150px; height:40px;">
              <option>가</option>
              <option>나</option>
              <option>다</option>
            </select>
          </div>
        </div>
        <div style="float:right; width:60%; display:flex; margin-left: 200px;">
          <input style="width:300px; float:center; height:40px" type="text" name="" value="" placeholder="검색어를 입력하세요">
          <button style="width:80px; height:45px">검색</button>
        </div>
      </div>

    </div>



  </div>

</template>

<script>
import LeftSideBar from "../../components/sideBar.vue";

export default {
  components : {
    LeftSideBar,
  }
}
</script>

<style>
.font {
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
}
.right{
  margin-left: 300px;
  text-align: left;
}
.container {
  display: flex;
  width: 1000px;
  height: 50px;
}
</style>
