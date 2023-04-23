<template>
  <span :class="`badge ${props.badgeType}-badge`"><slot></slot></span>
</template>
<script setup>
const props = defineProps({
  badgeType: { required: true, default: "team" },
});
</script>
