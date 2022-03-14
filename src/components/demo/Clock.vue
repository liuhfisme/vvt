<template>
    <h1>{{ time.hour }} : {{ time.minute }} : {{ time.second }}</h1>
    <hr />
</template>
<script setup lang="ts">
import { ref, reactive } from "@vue/reactivity";
type TimeType = {
    hour: string,
    minute: string,
    second: string
}
const time: TimeType = reactive({ hour: '00', minute: '00', second: '00' })
const date: Date = reactive(new Date())
setTimeout(date)
setInterval(() => {
    const date = new Date()
    setTimeout(date)
}, 1000)

function setTimeout(date:Date) {
    time.hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString()
    time.minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString()
    time.second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds().toString() 
}
</script>