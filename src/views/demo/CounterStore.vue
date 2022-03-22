<template>
    <h1 @click="handleCount">计数器 {{ store.state.count }}</h1>
    <hr />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { store } from '../../store/Counter'
function handleCount() {
    store.commit('increment')
}
</script>
<style scoped>
</style>