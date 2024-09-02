<script setup lang="ts">
import { ref } from 'vue'
import { throttle } from 'lodash-es'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types.ts'
defineOptions({
  name: 'DButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
})

const emits = defineEmits<ButtonEmits>()
const handleBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <component
    :is="tag"
    :ref="_ref"
    class="d-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading"
    :class="{
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      [`d-button--${size}`]: size,
      [`d-button--${type}`]: type,
    }"
    @click="(e: MouseEvent) => (useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e))"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
