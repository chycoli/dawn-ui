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
.d-icon {
  --d-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--d-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  .d-icon--$(val) {
    --d-icon-color: var(--d-color-$(val));
  }
}
</style>
