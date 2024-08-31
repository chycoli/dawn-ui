<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'
defineOptions({
  name: 'DButton',
})

withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
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
  >
    <slot></slot>
  </component>
</template>
