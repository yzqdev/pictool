<script setup lang="ts">
import { Img, imgList } from "@/components/imgList";
import { basename } from "@/utils/util";
import { ElMessage } from "element-plus";
import { useStorage } from "@vueuse/core";

import "element-plus/theme-chalk/el-message.css";
import { api as viewerApi } from "v-viewer";
import axios from "axios";
import { onBeforeMount } from "vue";
import { quanAvatars } from "@/constants/ps";
import download from "downloadjs";

let imgs = $ref<Img[]>([]);
let srcs = imgs.map((item) => {
  return item.src;
});
let loading = $ref(true);
let imgSrc = $ref("");
let isDev = $ref(import.meta.env.DEV);

async function clickImg(e, index: number) {
  const $viewer = viewerApi({
    options: { initialViewIndex: index },
    images: imgs,
  });
  imgSrc = e.url;
}

let imgStore = $(useStorage("imgStore", []));

async function deleteImg(item) {
  axios
    .post("http://localhost:8751/deleteImg/" + item.name)
    .then(({ data }) => {
      getData();
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    });
}

async function copyDownloadLink(item) {
  download(item.url);
  ElMessage.success("复制成功");
}

async function copyUrl(item) {
  await navigator.clipboard.writeText(item.url);
  ElMessage.success("复制成功");
}

function downloadItem(item) {
  download(item.icon);
}

function psDownload() {
  let str = [];
  for (let item of imgs) {
    str.push(`iwr ${item.url} -OutFile ${basename(item.url)}`);
  }
  let link = document.createElement("a");
  link.download = "run.ps1";
  let blob = new Blob([str.join("\n")]);
  link.href = URL.createObjectURL(blob);
  link.click();
}

function downloadAll() {
  for (let item of imgs) {
    download(item.url);
  }
}

async function getData() {
  let { data } = await axios.get("http://localhost:8751/imgs");

  let srcs = data.imgs.map((item) => {
    return {
      name: item,
      src: `http://localhost:8751/${item}`,
      url: `http://localhost:8751/${item}`,
    };
  });
  imgs = [...srcs, ...quanAvatars()];
  imgStore = imgs;
}

onBeforeMount(async () => {
  //如果是开发环境
  loading = true;
  console.log(
    `%c${loading}`,
    `color:red;font-size:16px;background:transparent`
  );
  if (isDev) {
    await getData();
  } else {
    imgs = [...imgList, ...quanAvatars()];
    imgStore = imgs;
    ElMessage({
      type: "success",
      message: imgs.length + "张图片",
    });
  }
  loading = false;
});
onMounted(() => {
  console.log(
    `%c${imgs.length}`,
    `color:red;font-size:16px;background:transparent`
  );
});
</script>

<template>
  <el-skeleton :loading="loading" :rows="20" :count="3" animated>
    <template #template>
      <div
        class="grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 text-center"
      >
        <div v-for="item in 5">
          <el-skeleton-item variant="image" style="height: 20rem" />
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item
            variant="text"
            style="margin-right: 16px; height: 4rem"
          />
        </div>
      </div>
    </template>
    <template #default>
      <div
        class="imgs grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 text-center"
      >
        <article v-for="(item, index) in imgs">
          <div v-if="false">{{ item.name }}</div>
          <el-image
            @click="clickImg(item, index)"
            fit="contain"
            class="img-style"
            :lazy="true"
            :src="isDev ? item.src : item.url"
          ></el-image>
          <section class="operation flex flex-wrap justify-center">
            <div class="link-link">
              <el-link :href="item.url" target="_blank">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="item.url"
                  placement="top"
                >
                  打开链接
                </el-tooltip>
              </el-link>
            </div>
            <div class="link-div" @click="copyUrl(item)">
              <el-button type="primary">复制链接</el-button>
            </div>
            <div class="link-div" @click="copyDownloadLink(item)">
              <el-button>直接下载</el-button>
            </div>
          </section>
          <div v-if="isDev">
            <el-button type="danger" @click="deleteImg(item)">删除</el-button>
          </div>
        </article>
        <floating-btn
          @all-click="downloadAll"
          @ps-click="psDownload"
        ></floating-btn>
        <el-backtop :right="100" :bottom="40" />
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss" scoped>
.imgs {
  .img-style {
    max-height: 20rem;
    &:hover {
      cursor: pointer;
    }
  }

  .operation {
    .link-link {
      margin: 0.5rem;
    }

    .link-div {
      margin: 0.5rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: cyan;
      }
    }
  }
}
</style>
