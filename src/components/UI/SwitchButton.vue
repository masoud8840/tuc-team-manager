<template>
  <button @click="toggleSwitch" :class="`switch-button ${props.modelValue}`">
    <slot name="trueValue" v-if="props.modelValue === props.trueValue"></slot>
    <slot name="falseValue" v-if="props.modelValue === props.falseValue"></slot>
  </button>
</template>

<script setup>
const props = defineProps(["trueValue", "falseValue", "modelValue"]);

const emits = defineEmits(["update:modelValue"]);
function toggleSwitch() {
  if (props.modelValue === props.trueValue) {
    console.log("Value: ", props.trueValue, props.modelValue);
    emits("update:modelValue", props.falseValue);
  }
  if (props.modelValue === props.falseValue) {
    console.log("Value: ", props.falseValue, props.modelValue);
    emits("update:modelValue", props.trueValue);
  }
}
</script>
