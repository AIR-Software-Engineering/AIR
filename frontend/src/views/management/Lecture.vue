<template>
    <div>
        <div class="parent">
            <div class="child4">
                <LeftSideBar></LeftSideBar>
            </div>
            <div class="child3">
                <center>
                    <div style="width:100%; height:100vh; margin-left:5%;">
                        <div class="parent" style="width:70%; margin-top:30px;margin-bottom:60px;">
                            <div class="child1">
                                <span style="float:left;" class="word"> 강의 </span>
                            </div>
                            <div class="child1">
                            </div>
                        </div>
                        <div style="margin-bottom:50px; width:70%;" class="parent">
                            <div class="child1">
                                <div style="float:left;">
                                    <select style="height:5vh; width:20vh;" v-model="selected">
                                    <option disabled value="">추천 유형</option>
                                    <option>전공</option>
                                    <option>교양</option>
                                    <option>모두</option>
                                    </select>
                                </div>
                            </div>
                            <div class="child1">
                                <button style="float:right; margin-right:20%;">시간표 추천 열기</button>
                            </div>
                        </div>
                        <div style="width:70%;" v-for="(row,index) in rows" :key="row.id">
                            <div style="float:left; width:40%;margin-right:10%;margin-bottom:40px;">
                                <div class="lecturebox">
                                    <div class="lechild1">
                                        <div style="margin:7%;">
                                            <span>{{ row.name }}</span>
                                        </div>
                                        <div>
                                            <span>{{ row.recommand }}</span>
                                        </div>
                                    </div>
                                    <div class="lechild2">
                                        <div style="margin-top:10%;">
                                            <span>{{ row.image }}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> 
                    </div>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
import LeftSideBar from "../../components/sideBar.vue";

export default {
  data(){
      return{
            selected: "",
            rows:[
                {name : "CSE0000",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0001",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0002",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0003",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0004",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0005",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0006",
                recommand: 5,
                image: "이미지를 넣어주세요"},
                {name : "CSE0007",
                recommand: 5,
                image: "이미지를 넣어주세요"}
                
            ],
      }
      
  }, 
  components : {
    LeftSideBar,
  }
}
</script>

<style lang="css" scoped>
.parent{
    display: flex;
}
.child1{
    flex:1;
}
.child2{
    flex:5;
}
.child3 {
    flex: 11;
}
.child4 {
    flex:2;
}
.word {
    font-size: 30px;
}
.lecturebox {
    border: solid 1px;
    height: 10vh;
    width: 100%;
    display: flex;
}
.lechild1 {
    flex: 4;
}
.lechild2 {
    background-color: rgb(176, 173, 173);
    flex: 6;
}
</style>