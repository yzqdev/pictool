<template>
  <el-skeleton :loading="loading" :count="3" animated>
    <template #template>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 text-center"
      >
        <div v-for="item in 3">
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
      <section
        v-infinite-scroll="getData"
        :infinite-scroll-immediate="true"
        :infinite-scroll-distance="600"
        class="infinity"
      >
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 cursor-pointer gap-x-2"
          v-viewer
        >
          <div class="w-full m-4" v-for="item in pixList">
            <el-image loading="lazy" fit="fill" :src="item.post.cover" />
            <article class="flex justify-center">
              <el-button @click="gotoLink(item)">打开链接</el-button>
              <el-button @click="copyImg(item)">复制</el-button>
              <el-button @click="downloadImg(item)">下载</el-button>
            </article>
          </div>
        </div>
      </section>
      <floating-btn
        @all-click="downloadAll"
        @ps-click="psDownload"
      ></floating-btn>
      <el-backtop :right="100" :bottom="40" />
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount } from "vue";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

let pixList = $ref<any>([]);
let page = $ref(1);
let loading = $ref(true);
import download from "downloadjs";
import { basename } from "@/utils/util";
import { getCosApi } from "@/utils/api";
function gotoLink(item) {
  window.open(
    "https://bbs.mihoyo.com/ys/article/" + item.post.post_id,
    "_blank"
  );
}
let offsetIndex = $ref(0);
async function copyImg(item) {
  ElMessage({ type: "success", message: "手动复制一下呗" });
}
function downloadImg(item) {
  download(item.post.cover);
}
function psDownload() {
  let str = [];
  for (let item of pixList) {
    str.push(`iwr ${item.post.cover} -OutFile ${basename(item.post.cover)}`);
  }
  let link = document.createElement("a");
  link.download = "run.ps1";
  let blob = new Blob([str.join("\n")]);
  link.href = URL.createObjectURL(blob);
  link.click();
}
function downloadAll() {
  for (let item of pixList) {
    download(item.post.cover);
  }
}
let id = $ref("0");
let isLast = $ref(false);
async function getData() {
  console.log("获取数据");
  offsetIndex++;
  if (isLast) {
    ElMessage({
      type: "success",
      message: "已经是最后一条了!",
    });
    return;
  }
  //这里offset相当于pageNumber*limit

  //原创插图
  loading = true;
  // let publicUrl=`https://www.vilipix.com/api/v1/picture/public?limit=18&offset=${index*18}&sort=hot&type=0`
  let data = await getCosApi(id);
  console.log(data);
  id = data.data.last_id;
  isLast = data.data.is_last;
  pixList.push(...data.data.list);
  loading = false;
}
onBeforeMount(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
