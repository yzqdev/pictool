<template>
  <div>
    <el-menu
      class="nav-menu backdrop-blur-md backdrop-saturate-150"
      unique-opened
      :ellipsis="false"
      :default-active="$route.path"
      mode="horizontal"
    >
      <el-menu-item index="logo" @click="gotoRoute('Home')">
        pictool
      </el-menu-item>
      <div class="flex-grow" />
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  @click="gotoRoute(subItem)"
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item
                @click="gotoRoute(subItem)"
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item
            @click="gotoRoute(item)"
            :index="item.index"
            :key="item.index"
          >
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>

      <el-menu-item index="gihtub">
        <div @click="gotoLink" style="display: flex; align-items: center">
          源码
          <svg
            :height="24"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </div>
      </el-menu-item>
    </el-menu>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="mt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let router = useRouter();
let defaultMenu = [
  { index: "/home", name: "Home", title: "首页" },
  {
    index: "/emoj",
    name: "Emoj",
    title: "表情",
    subs: [
      {
        index: "/vilipix",
        name: "Vilipix",
        title: "Vilipix",
      },
      {
        index: "/emoj",
        name: "Emoj",
        title: "表情",
      },
      {
        index: "/pix-recommend",
        name: "PixRecommend",
        title: "推荐",
      },
    ],
  },
  { index: "/download-all", name: "DownloadAll", title: "下载" },
  { index: "/about", name: "About", title: "关于" },
];
function gotoLink() {
  location.assign("https://github.com/yzqdev/pictool");
}
let menus = $ref(defaultMenu);

function gotoRoute(item) {
  router.push({ name: item });
}
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.nav-menu {
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  z-index: 3;
}
</style>
