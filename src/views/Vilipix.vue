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
            <el-image loading="lazy" fit="fill" :src="item.original_url" />
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

let pixList = $ref([]);
let page = $ref(1);
let loading = $ref(true);
import download from "downloadjs";
import { basename } from "@/utils/util";
function gotoLink(item) {
  window.open(`https://www.vilipix.com/illust/${item.picture_id}`, "_blank");
}
let offsetIndex = $ref(0);
async function copyImg(item) {
  ElMessage({ type: "success", message: "手动复制一下呗" });
}
function downloadImg(item) {
  download(item.original_url);
}
function psDownload() {
  let str = [];
  for (let item of pixList) {
    str.push(
      `iwr ${item.original_url} -OutFile ${basename(item.original_url)}`
    );
  }
  let link = document.createElement("a");
  link.download = "run.ps1";
  let blob = new Blob([str.join("\n")]);
  link.href = URL.createObjectURL(blob);
  link.click();
}
function downloadAll() {
  for (let item of pixList) {
    download(item.original_url);
  }
}
async function getData() {
  console.log("获取数据");
  offsetIndex++;
  //这里offset相当于pageNumber*limit
  let dailyUrl = `https://www.vilipix.com/api/v1/picture/ranking?limit=16&offset=${
    offsetIndex * 16
  }&type=0&mode=daily`;
  //原创插图
  loading = true;
  // let publicUrl=`https://www.vilipix.com/api/v1/picture/public?limit=18&offset=${index*18}&sort=hot&type=0`
  let { data } = await axios.get(dailyUrl);
  //
  pixList.push(...data.data.rows);
  loading = false;
}
onBeforeMount(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
