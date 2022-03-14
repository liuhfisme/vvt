<template>
    <h1 @click="handleCount">计数器 {{ count }} + {{ store.state.count }}</h1>
    <hr />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { store } from '../../store/Counter'
const count = ref(0)
function handleCount() {
    count.value++
}

// onMounted(() => {
//     setInterval(() => {
//         console.log('count>>> ', count)
//         count.value++
//     }, 1000)
// })

</script>
<style scoped>
</style>