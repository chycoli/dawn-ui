<script setup lang="ts">
const emits = defineEmits()
const onClick = () => {
  console.log('click---')
}
</script>

<template>
  <DIcon icon="search"></DIcon>
  <DButton type="primary" size="large" icon="search" :throttleDuration="5000" @click="onClick">按钮</DButton>
</template>

<style scoped></style>
