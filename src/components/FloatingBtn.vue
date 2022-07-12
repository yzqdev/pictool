<template>
  <section
    class="float-section"
    @mouseleave="mouseLeave"
    @mouseenter="showMore"
  >
    <el-tooltip placement="top" content="点击查看说明">
      <div class="float" @click="showIntro">
        <!-- <p @click="callback">返回</p> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          class="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            d=" M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </div>
    </el-tooltip>

    <el-tooltip placement="top" content="点击下载powershell文件">
      <div
        :style="{ opacity: opacity }"
        @click="psClick"
        class="float2 flex justify-center items-center"
      >
        <el-icon class="cursor-pointer" :size="iconSize">
          <Switch />
        </el-icon>
      </div>
    </el-tooltip>
    <el-tooltip placement="bottom" content="直接下载所有">
      <div
        :style="{ opacity: opacity }"
        @click="allClick"
        class="float3 flex justify-center items-center"
      >
        <el-icon class="cursor-pointer" :size="iconSize">
          <Camera />
        </el-icon>
      </div>
    </el-tooltip>
  </section>
</template>

<script setup lang="ts">
import { Camera, Download, Switch } from "@element-plus/icons-vue";

let emits = defineEmits(["ps-click", "all-click"]);
let router = useRouter();
let show = $ref(false);
let opacity = $ref(0);
let iconSize = $ref(20);

function showMore() {
  opacity = 1;
  show = true;
}

function showIntro() {
  router.push({ name: "DownloadAll" });
}

function mouseLeave() {
  opacity = 0;
}

function psClick() {
  emits("ps-click");
}

function allClick() {
  emits("all-click");
}
</script>

<style lang="scss" scoped>
.float-section {
  position: fixed;

  z-index: 99999;

  left: 2rem;
  top: 60%;
  touch-action: none;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 24px;
  line-height: 48px;
  color: white;
  background: transparent;
  transition: all 0.3s;

  > svg {
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid var(--el-color-primary);
    background: white;

    path {
      fill: var(--el-color-primary);
    }
  }
}

.float {
  position: fixed;

  z-index: 99999;

  left: 2rem;
  top: 60%;
  touch-action: none;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 24px;
  line-height: 48px;
  color: white;
  background: transparent;
  transition: all 0.3s;

  svg {
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid var(--el-color-primary);
    background: white;

    path {
      fill: var(--el-color-primary);
    }
  }
}

.float2,
.float3 {
  transition: all 0.3s;
  touch-action: none;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 24px;
  line-height: 30px;
  color: white;
  background: white;
  border: 2px solid var(--el-color-primary);

  .el-icon {
    color: var(--el-color-primary);
  }
}

.float2 {
  position: absolute;
  left: 2.5rem;
  top: -1.5rem;
}

.float3 {
  position: absolute;
  left: 2.5rem;
  top: 2.5rem;
}
</style>
