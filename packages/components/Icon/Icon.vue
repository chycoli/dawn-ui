<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'

defineOptions({
  name: 'DIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => ({
  color: props.color ?? void 0,
}))
</script>

<template>
  <i v-bind="$attrs" class="d-icon" :class="[`d-icon--${props.type}`]" :style="customStyle">
    <FontAwesomeIcon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import "./style.css";
</style>
