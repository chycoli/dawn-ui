<script setup lang="ts">
const emits = defineEmits()
const onClick = () => {
  console.log('click---')
}
</script>

<template>
  <DButton type="primary" size="large" @click="onClick">按钮</DButton>
</template>

<style scoped></style>
