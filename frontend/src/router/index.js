import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/management/main.vue"
import Lecture from "../views/management/lecture.vue";
import SystemChart from "../views/management/systemChart.vue";
import AcademicData from "../views/management/academicData.vue";

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [{
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: Main,
    },
    {
      path: "/lecture",
      component: Lecture
    },
    {
      path: "/systemChart",
      component: SystemChart,
    },
    {
      path: "/academicData",
      component: AcademicData,
    }

  ]
})
