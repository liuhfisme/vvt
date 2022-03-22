<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Counter></Counter>
  <Clock></Clock>
  <RouterJump></RouterJump>
  <CounterStore></CounterStore>
  <MockTest></MockTest>
  <I18nTest></I18nTest>
  <GridLayoutTest></GridLayoutTest>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/views/demo/Counter.vue'
import Clock from '@/views/demo/Clock.vue'
import RouterJump from '@/views/demo/RouterJump.vue'
import CounterStore from '@/views/demo/CounterStore.vue'
import MockTest from '@/views/demo/MockTest.vue'
import I18nTest from '@/views/demo/I18nTest.vue'
import GridLayoutTest from '@/views/demo/GridLayoutTest.vue'
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
