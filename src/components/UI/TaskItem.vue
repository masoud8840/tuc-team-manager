<template>
  <section class="task-item" :disabled="props.isChecked">
    <img :src="`/${props.taskTeam}Icon.svg`" alt="task-icon" />
    <section class="task_item-inner">
      <section class="task_item-header">
        <h5>{{ props.taskTitle }}</h5>
        <input
          type="checkbox"
          :checked="props.isChecked"
          @input="handleCheck"
        />
      </section>
      <section class="task_item-footer">
        <section class="badges-container">
          <Badge badge-type="team">{{ props.taskTeam }}</Badge>
          <Badge badge-type="category">{{ props.taskCategory }}</Badge>
          <Badge badge-type="urgent" v-if="props.urgent === 'Urgent'">
            Urgent
          </Badge>
        </section>
        <span>
          {{ formatDate(props.createdAt) }} - {{ formatDate(props.doUntill) }}
        </span>
      </section>
    </section>
  </section>
</template>
<script setup>
import Badge from "./Badge.vue";
const props = defineProps([
  "taskId",
  "taskTitle",
  "isChecked",
  "taskTeam",
  "taskCategory",
  "urgent",
  "doUntill",
  "createdAt",
]);
const emits = defineEmits(["onCheck"]);
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "short",
  });
}

function handleCheck() {
  emits("onCheck", { checkedSatus: !props.isChecked, id: props.taskId });
}
</script>
