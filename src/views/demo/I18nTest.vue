<template>
    <h1>{{ t('sys.api.operationFailed') }}</h1>
    <p class="tip"> 刷新验证，随机渲染</p>
    <hr />
</template>

<script setup lang="ts">
import { useI18n } from "../../hooks/web/useI18n";

const { t } = useI18n()
</script>
<style scoped>
.tip {
    font-size: 10px;
    color: cadetblue;
}
</style>