import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("@/layout/Home.vue");
const HomeMain = () => import("@/views/HomeMain.vue");
const DownloadAll = () => import("@/views/DownloadIntro.vue");
const Vilipix = () => import("@/views/Vilipix.vue");
const Emoj = () => import("@/views/MihoyoEmoj.vue");
const PixRecommend = () => import("@/views/PixRecommend.vue");
import About from "@/views/About.vue";

let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "home",
        name: "Home",
        component: HomeMain,
      },
      {
        path: "download-all",
        name: "DownloadAll",
        component: DownloadAll,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "emoj",
        name: "Emoj",
        component: Emoj,
      },
      {
        path: "vilipix",
        name: "Vilipix",
        component: Vilipix,
      },
      {
        path: "pix-recommend",
        name: "PixRecommend",
        component: PixRecommend,
      },
    ],
  },
];

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
