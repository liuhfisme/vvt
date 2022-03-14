<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Counter></Counter>
  <Clock></Clock>
  <RouterJump></RouterJump>
  <CounterStore></CounterStore>
  <MockTest></MockTest>
  <I18nTest></I18nTest>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/demo/Counter.vue'
import Clock from '@/components/demo/Clock.vue'
import RouterJump from '@/components/demo/RouterJump.vue'
import CounterStore from '@/components/demo/CounterStore.vue'
import MockTest from '@/components/demo/MockTest.vue'
import I18nTest from '@/components/demo/I18nTest.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
