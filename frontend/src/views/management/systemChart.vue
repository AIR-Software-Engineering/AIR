<template>
  <div class="fade2s">
    <LeftSideBar/>
    <div style="margin-left:1000px">
      hello
    </div>
    <div class="right font" style="margin-top:50px; font-size:30px">
      이수체계도
      <div class="" style="width:1000px; height:400px; margin-top:50px;">
        <div class="left_view">
          <div v-show="this.back" class="emptyBox"></div>
          <img v-show="this.rec1" src="../../assets/recommand1.png" style="width:100%; height:100%" class="fade1s">
          <img v-show="this.rec2" src="../../assets/recommand2.png" style="width:100%; height:100%" class="fade1s">
        </div>
        <div v-show="rec1" class="right_data fade2s">
          이수체계도 세부사항
          <div style="margin-top:50px; margin-left:20px; text-align:left; font-size:20px">
            <p>추천 키워드</p>
            <ul>
              <li>보안</li>
              <li>네트워크</li>
              <li>시스템</li>
            </ul>
          </div>
          <div style="margin-top:50px; margin-left:20px; text-align:left; font-size:20px">
            <p>관련 진로</p>
            <ul>
              <li>정보보안컨설턴트</li>
              <li>네트워크관리전문가</li>
              <li>보안어플리케이션개발</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
        <div v-show="rec2" class="right_data fade2s">
          이수체계도 세부사항
          <div style="margin-top:50px; margin-left:20px; text-align:left; font-size:20px">
            <p>추천 키워드</p>
            <ul>
              <li>인공지능</li>
              <li>머신러닝</li>
              <li>딥러닝</li>
            </ul>
          </div>
          <div style="margin-top:50px; margin-left:20px; text-align:left; font-size:20px">
            <p>관련 진로</p>
            <ul>
              <li>빅데이터전문가</li>
              <li>머신러닝 엔지니어</li>
              <li>비전 과학자</li>
            </ul>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div class="" style="margin-top: 30px;">
        추천 목록
      </div>
      <div class="container">
        <button @click="getRecommendLectureList1" class="item font" style="font-size:20px; border:none">
          <div>
            이수체계도 1
              <div class="starContainer">
                추천도 :
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
              </div>

          </div>
          <div class="grade">
            <img src="../../assets/first.png" style="width:60px; height:60px;">
          </div>
        </button>
        <button @click="getRecommendLectureList2" class="item font" style="font-size:20px; border:none">
          <div>
            이수체계도 2
              <div class="starContainer">
                추천도 :
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starFill.png" style="width:20px; height:20px">
                <img src="../../assets/starEmpty.png" style="width:20px; height:20px">
              </div>

          </div>
          <div class="grade">
            <img src="../../assets/second.png" style="width:60px; height:60px;">
          </div>
        </button>


      </div>
    </div>

  </div>

</template>

<script>
import LeftSideBar from "../../components/sideBar.vue";
export default {
  data() {
    return {
      obj: [],
      rec1 : false,
      rec2 : false,
      back : true,
    }
  },
  components: {
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
    func :function(){
      alert("hi");
    },
    getRecommendLectureList1: function() {
      alert("이수체계도가 추천되었습니다");
      this.rec1 = true;
      this.rec2 = false;
      this.back = false;
    },
    getRecommendLectureList2: function() {
      alert("이수체계도가 추천되었습니다");
      this.rec1 = false;
      this.rec2 = true;
      this.back = false;
    },



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
.left_view {
  width:70%;
  height:100%;
  float: left;
}
.right_data {
  width:25%;
  height:400px;
  float: right;
  text-align: center;
  font-size:25px;
  margin-top: 20px;
}
.container {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  width: 1000px;
  height: 200px;
}
.item {
  width: 400px;
  height: 100px;
  border: 1px solid;
  background-color: #F6F6F6;
  box-shadow: 1px 1px 3px;
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
}
.starContainer{
  margin-top: 10px;
  width: 280px;
  height: 40px;
  padding-top: 10px;

}
.grade{
  margin-left: 20px;
  padding-left: 10px;
  padding-top: 5px;
  width: 60px;
  height: 60px;
}
.emptyBox{
  width: 100%;
  height: 100%;
  background-color: lightgray;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.fade2s{
  animation: fadein 2.5s;
  -webkit-animation: fadein 2.5s;
}
.fade1s{
  animation: fadein 1s;
  -webkit-animation: fadein 1s;
}
</style>
