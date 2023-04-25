<template>
  <button class="checkbox" :disabled="props.disabled">
    <slot></slot>
    <input
      type="radio"
      :name="props.name"
      :value="props.value"
      :checked="props.modelValue === props.value"
    />
  </button>
</template>

<script setup>
const props = defineProps(["name", "disabled", "value", "modelValue"]);
</script>
