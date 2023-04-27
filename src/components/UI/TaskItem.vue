<template>
  <section class="task-item">
    <img :src="`/${props.taskTeam}Icon.svg`" alt="task-icon" />
    <section class="task_item-inner">
      <section class="task_item-header">
        <h5>{{ props.taskTitle }}</h5>
        <input type="checkbox" :checked="props.isChecked" />
      </section>
      <section class="task_item-footer">
        <section class="badges-container">
          <Badge badge-type="team">{{ props.taskTeam }}</Badge>
          <Badge badge-type="category">{{ props.taskCategory }}</Badge>
          <Badge badge-type="urgent" v-if="props.urgent === 'Urgent'">
            Urgent
          </Badge>
        </section>
        <span>Jan 15 - Nov 10</span>
      </section>
    </section>
  </section>
</template>
<script setup>
import Badge from "./Badge.vue";
const props = defineProps([
  "taskTitle",
  "isChecked",
  "taskTeam",
  "taskCategory",
  "urgent",
]);
</script>
