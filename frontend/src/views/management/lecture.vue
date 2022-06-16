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
                                    <select class="font" style="height:5vh; width:20vh;" v-model="selected">
                                    <option disabled value="">추천 유형</option>
                                    <option>전공</option>
                                    <option>교양</option>
                                    <option>모두</option>
                                    </select>
                                </div>
                            </div>
                            <div class="child1">
                                <button class="font" style="float:right; margin-right:20%;" @click="togglechange">시간표 추천 열기</button>
                            </div>
                        </div>
                        <div v-show="this.toggle != false">
                            <div style="width:70%;" v-for="(row,index) in obj" :key="row.id">
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
                        <div v-show="this.toggle != true">
                            <div class="parent" style="width:80%;">
                                <div class="child1">
                                    <div v-for="(row,key,index) in obj" :key="index">
                                        <div class="parent" style="float:left; width:80%;margin-right:10%;margin-bottom:20px;">
                                            <div class="child3">
                                                <div class="lecturebox">
                                                    <div class="lechild1">
                                                        <div style="margin:6%;">
                                                            <span class="font" style="margin-right:10%; color: white;">{{ row["courseName"] }}</span>
                                                            <span class="font" style="color: white;">{{ row["ratings"] }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="child1" style="margin-top:9%;margin-left:5%;">
                                                <input type="checkbox" :id="key" v-model="checked[key]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="child1">
                                    <div class="parent" style="width:70%; margin-bottom:10%;">
                                        <div class="child1">
                                            <button class="font">previous</button>
                                        </div>
                                        <div class="child5">
                                            <span class="font">추천 시간표</span>
                                        </div>
                                        <div class="child1">
                                            <button class="font">next</button>
                                        </div>
                                    </div>
                                    <div style="width:70%;" class="test">
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
            checked:[

            ],
            obj:[],
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
            toggle:false,
      }

  },
  components : {
    LeftSideBar,
  },
  mounted() {
    this.$axios.get('/api/RCLecture_semester?count=5&student_id=2017000001')
    .then((response) => {
      console.log(response.data); // 비동기 통신이 성공했을 경우, .then()은 콜백을 인자로 받아 결과값을 처리함

      for(var i = 0; i < response.data["data"].length; i++){
        console.log(response.data["data"][i]["courseName"]);
        var sub = {};
        sub["courseName"] = response.data["data"][i]["courseName"];
        sub["ratings"] = response.data["data"][i]["ratings"];
        console.log(sub);
        this.obj.push(sub);
        sub = {};
      }
      console.log(this.obj[0]);
      })
      .catch((error) => {
        console.log(error); // catch()를 통해 오류를 처리함
      });
  },
  methods: {
      togglechange: function(){
          this.toggle = !this.toggle;
      },
  },
}
</script>

<style lang="css" scoped>
.font {
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-family: 'Jua', sans-serif;
}
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
.child5 {
    flex:3;
}
.word {
    font-size: 30px;
    font-family: 'Cute Font', cursive;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-family: 'Jua', sans-serif;
}
.lecturebox {
    border: solid 1px;
    height: 10vh;
    width: 100%;
    display: flex;
    background:rgba(255,98,124,1);
    border: 0;
}
.lechild1 {
    flex: 4;
}
.lechild2 {
    background-color: rgb(176, 173, 173);
    flex: 6;
}
.test {
    border:solid 1px;
    height: 47vh;
    width: 100%;
    background-color: rgba(255, 154, 5, 5);
    border: 0;
}

</style>
