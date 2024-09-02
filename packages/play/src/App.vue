<script setup lang="ts">
const emits = defineEmits()
const onClick = () => {
  console.log('click---')
}
</script>

<template>
  <DButton type="primary" size="large" :throttleDuration="5000" @click="onClick">按钮</DButton>
</template>

<style scoped></style>
