<template>
  <div v-loading="loading" element-loading-text="Loading...">
    <section
      v-infinite-scroll="getData"
      :infinite-scroll-immediate="true"
      :infinite-scroll-distance="600"
      class="infinity"
    >
      <div class="bing-imgs" v-viewer>
        <div class="img" v-for="item in pixList">
          <el-image loading="lazy" fit="fill" :src="item.original_url" />
          <article class="img-btns">
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
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount } from "vue";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

let pixList = $ref([]);
let page = $ref(1);
let loading = $ref(false);
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
onBeforeMount(() => {});
</script>

<style lang="scss" scoped>
.bing-imgs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  grid-gap: 0 0.5rem;
  .img {
    width: 100%;
    margin: 1em;
    .img-btns {
      display: flex;
      justify-content: space-evenly;
    }
    img {
      width: 100%;
    }
  }
}
</style>
