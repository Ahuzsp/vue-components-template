<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

defineProps({
  msg: String,
})
const handleClick = () => {
  console.log(proxy)
  proxy.$gmessage({
    message: '消息显示',
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="handleClick">消息显示</button>
  <button type="button" @click="proxy.$gmessage({
    type: 'error',
    message: '消息显示',
  })">消息显示</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
