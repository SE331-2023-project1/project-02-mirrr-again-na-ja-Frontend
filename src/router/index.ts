import { createRouter, createWebHistory } from "vue-router";
import StudentView from "@/views/StudentView.vue";
import StudentDetail from "@/views/event/StudentDetail.vue";
import AdviserDetail from "@/views/event/AdviserDetail.vue";
import LayoutView from "@/views/event/LayoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetworkErrorView from "@/views/NetworkErrorView.vue";
import StudentService from "@/services/StudentService";
import AdviserProfile from "@/views/AdviserProfile.vue";
import AddAdviserView from "@/views/AddAdviserView.vue";
import { useStudentStore } from "@/stores/student";
import NProgress from "nprogress";
import AdviserView from "@/views/AdviserView.vue";
import { useAdviserStore } from "@/stores/newAdviser";
import AdviserService from "@/services/AdviserService";
import UpdateStudent from "@/views/event/updateStudent.vue";
import UpdateAdviserView from "@/views/updateAdvisor.vue";
import loginViewVue from "@/views/loginView.vue";
import RegisterViewVue from "@/views/RegisterView.vue";
import HomeView from "@/views/AdvisorHomeView.vue";
import OwnStudentView from "@/views/OwnStudentDeatail.vue";
import ConnectRelation from "@/views/ConnectRelation.vue";
import PostAnnounce from "@/views/UploadAnnonce.vue";
import AnnouncementView from "@/views/event/announcement.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/students",
      name: "students",
      component: StudentView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),
    },
    {
      path: "/advisors",
      name: "professer",
      component: AdviserView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),
    },
    {
      path: "/student/:id",
      name: "connect-student",
      component: ConnectRelation,
      props: true,
    },
    {
      path: "/advisors/:id",
      name: "update-advisor",
      component: UpdateAdviserView,
    },
    {
      path: "/advisors/:id",
      name: "post-announce",
      component: PostAnnounce,
    },
    {
      path: "/studentOwn/:id",
      name: "studentOwn",
      component: OwnStudentView,
      props: true,
    },
    {
      path: "/adviserProfile",
      name: "AdviserHome",
      component: HomeView,
      props: true,
    },
    {
      path: "/registerAdvisor",
      name: "AddView",
      component: AddAdviserView,
    },
    {
      path: "/",
      name: "Login",
      component: loginViewVue,
    },
    {
      path: "/registerStudent",
      name: "registerStudent",
      component: RegisterViewVue,
    },
    {
      path: "/student/:id",
      name: "event-layout",
      component: LayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string);
        const studentStore = useStudentStore();
        return StudentService.getStudentById(id)
          .then((response) => {
            // need to set up the data
            studentStore.setStudent(response.data);
            StudentService.getAdviserById(Number(response.data.id)).then(
              (response2) => {
                studentStore.setAdviser(response2.data);
              }
            );
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: "404-resource",
                params: { resource: "student" },
              };
            } else {
              return { name: "network-error" };
            }
          });
      },
      children: [
        {
          path: "/students/:id",
          name: "student-detail",
          component: StudentDetail,
          props: true,
        },
        {
          path: "/students/:id",
          name: "announcementView",
          component: AnnouncementView,
          props: true,
        },
        {
          path: "/student/adviser/:id",
          name: "adviser-detail",
          component: AdviserDetail,
          props: true,
        },
        {
          path: "/student/:id",
          name: "update-student",
          component: UpdateStudent,
          props: true,
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
    {
      path: "/404/:resource",
      name: "404-resource",
      component: NotFoundView,
      props: true,
    },
    {
      path: "/network-error",
      name: "network-error",
      component: NetworkErrorView,
    },
    {
      path: "/professer/profile/:id",
      name: "professer-profile",
      component: AdviserProfile,
      props: true,
    },
  ],
});

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
