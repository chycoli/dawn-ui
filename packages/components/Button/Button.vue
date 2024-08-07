<script setup lang="ts">
import { ref, computed } from 'vue'
import { throttle } from 'lodash-es'
import DIcon from '../Icon/Icon.vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types'

defineOptions({
  name: 'DButton',
})

const _ref = ref<HTMLButtonElement>()
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: false,
  throttleDuration: 500,
})
const emits = defineEmits<ButtonEmits>()
const slots = defineSlots()
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0',
}))

const handleBtnClick = (e: MouseEvent) => {
  emits('click', e)
}
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

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
    :disabled="disabled || loading ? true : void 0"
    :autofocus="autofocus"
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
    <template v-if="loading">
      <slot name="loading">
        <DIcon class="loading-icon" :icon="loadingIcon ?? 'spinner'" size="1x" :style="iconStyle" />
      </slot>
    </template>

    <DIcon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle" />

    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
