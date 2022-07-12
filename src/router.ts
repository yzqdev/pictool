import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "@/layout/Home.vue";
import HomeMain from "@/views/HomeMain.vue";
import DownloadAll from "@/views/DownloadIntro.vue";
import Vilipix from "@/views/Vilipix.vue";
import Emoj from "@/views/MihoyoEmoj.vue";
import PixRecommend from "@/views/PixRecommend.vue";
import Cos from "@/views/Cos.vue";
import Tongren from "@/views/Tongren.vue";
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
      {
        path: "cos",
        name: "Cos",
        component: Cos,
      },
      {
        path: "tongren",
        name: "Tongren",
        component: Tongren,
      },
    ],
  },
];

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
