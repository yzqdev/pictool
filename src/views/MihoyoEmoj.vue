<template>
  <el-skeleton :loading="loading" :rows="3" :count="3" animated>
    <template #template>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-5 text-center"
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
      <el-tabs v-model="curEmojSet" type="card">
        <template v-for="(item, index) in tabs">
          <el-tab-pane
            class="ddd"
            :name="index"
            :label="item.name"
          ></el-tab-pane>
        </template>
      </el-tabs>
      <section class="grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6">
        <article
          class="flex flex-col justify-content"
          v-for="item in emojs[curEmojSet]?.list"
        >
          <el-image :lazy="true" :src="item.icon"></el-image>
          <span class="flex justify-center m-4">
            <el-button @click="openLink(item)">打开链接</el-button>
            <el-button type="primary" @click="downloadItem(item)">
              下载
            </el-button>
          </span>
        </article>
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
import { ElMessage } from "element-plus";
import download from "downloadjs";
import { basename } from "@/utils/util";
let curEmojSet = $ref(0);
let tabs = $ref([]);
let emojs = $ref([]);
let loading = $ref(true);
async function openLink(item) {
  window.open(item.icon, "_blank");
}
function downloadItem(item) {
  download(item.icon);
}
function psDownload() {
  let str = [];
  for (let item of emojs[curEmojSet]?.list) {
    str.push(`iwr ${item.icon} -OutFile ${basename(item.icon)}`);
  }
  let link = document.createElement("a");
  link.download = "run.ps1";
  let blob = new Blob([str.join("\n")]);
  link.href = URL.createObjectURL(blob);
  link.click();
}
function downloadAll() {
  for (let item of emojs[curEmojSet]?.list) {
    download(item.icon);
  }
}
async function getEmoj() {
  loading = true;
  let { data } = await axios.get(
    "https://bbs-api-static.mihoyo.com/misc/api/emoticon_set?gids=2"
  );
  loading = false;
  emojs = data.data.list.slice(1);
  emojs.pop();
  tabs = emojs.map((item) => {
    return {
      name: item.name,
    };
  });
  console.log(emojs);
}
onBeforeMount(async () => {
  await getEmoj();
});
</script>

<style lang="scss" scoped>
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
</style>
