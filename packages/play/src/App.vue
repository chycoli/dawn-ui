<script setup lang="ts">
const emits = defineEmits()
const onClick = () => {
  console.log('click---')
}
</script>

<template>
  <DIcon icon="search"></DIcon>
  <DButton type="primary" circle size="large" icon="search" :throttleDuration="5000" @click="onClick"></DButton>
</template>

<style scoped></style>
