<template>
  <el-main class="download-intro">
    <el-button type="primary" @click="back">返回首页</el-button>
    <p><span class="download-json" @click="downloadJson">下载链接</span></p>
    <md-editor v-model="text" preview-only />
    <div v-if="false" class="down-flex">
      <div v-for="(item, index) in imgs">
        <el-image fit="cover" :src="item.src"></el-image>
        <div>
          <el-button @click="deleteJson(index)">删除</el-button>
        </div>
      </div>
    </div>
  </el-main> <el-backtop :right="100" :bottom="40" />
</template>

<script setup lang="ts">
import axios from "axios";
import { downText } from "@/constants/ps";

import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { Img } from "@/components/imgList";
import { basename } from "@/utils/util";

let router = useRouter();
let imgs = $ref([]);
const text = $ref(downText(genPwsh()));

function downloadJson() {
  let link = document.createElement("a");
  link.download = "run.ps1";
  let blob = new Blob([genPwsh()]);
  link.href = URL.createObjectURL(blob);
  link.click();
}

function genPwsh() {
  let str = [];
  let store: Img[] = JSON.parse(localStorage.imgStore);
  for (let item of store) {
    str.push(`iwr ${item.url} -OutFile ${item.name}`);
  }
  return str.join("\n");
}

function copyCodes() {
  navigator.clipboard.writeText(genPwsh());
}

async function getData() {
  let { data } = await axios.get("http://localhost:8751/bili");
  imgs.push(...data.imgList.genshin);
  imgs.push(...data.imgList.benghuai);
  imgs.push(...data.imgList.fangzhou);
}

function deleteJson(index: number) {
  imgs.splice(index, 1);
  console.log(imgs);
}

onBeforeMount(() => {
  if (import.meta.env.DEV) {
    getData();
  }
});

function back() {
  router.push({ name: "Home" });
}
</script>

<style lang="scss" scoped>
.download-intro {
  .download-json {
    margin: 1rem 0;
    color: var(--el-color-primary);

    &:hover {
      cursor: pointer;
    }
  }

  .down-flex {
    display: flex;
    flex-wrap: wrap;

    .el-image {
      width: 25rem;
      height: 25rem;
    }
  }
}
</style>
