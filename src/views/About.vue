<template>
  <el-main>
    <md-editor v-model="mdContent" preview-only></md-editor>
  </el-main> <el-backtop :right="100" :bottom="40" />
</template>
<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
let md = import.meta.globEager("./about.md", { as: "raw", eager: true });
let mdContent = $ref(md["./about.md"]);
</script>
<style lang="scss" scoped>
.el-main {
  margin: 0 2rem;
}
</style>
