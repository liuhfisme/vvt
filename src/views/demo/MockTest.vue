<template>
    <h1>{{ msg }}</h1>
    <hr />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const msg = ref('')

onMounted(() => {
    axios.get('/api/hello').then(res=>{
        console.log('success>>> ', res)
        msg.value = res.data.message
    }).catch(err=> {
        console.log('err>>> ', err)
    })
})

</script>
<style scoped>
</style>