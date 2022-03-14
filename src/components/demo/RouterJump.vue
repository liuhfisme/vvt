<template>
  <router-link to="/demo/counter">Counter</router-link>
  <router-link to="/demo/clock">Clock</router-link>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()
function jump(path: string) {
  console.log('router>>> ', router)
  router.push({ name: path })
}
</script>