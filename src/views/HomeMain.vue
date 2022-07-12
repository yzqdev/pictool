<template>
  <el-card>
    想要下载所有图片,请查看说明=>
    <span class="span-link" @click="gotoRoute('DownloadAll')">链接</span>
  </el-card>
  <div class="warp">
    <Imgs />
  </div>
</template>

<script setup lang="ts">
import Imgs from "@/components/Imgs.vue";
let router = useRouter();

function gotoRoute(name: string) {
  router.push({ name: name });
}
</script>

<style lang="scss" scoped>
.span-link {
  color: var(--el-color-primary);
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
