<template>
  <section class="task-item">
    <img src="/NetworkIcon.svg" alt="task-icon" />
    <section class="task_item-inner">
      <section class="task_item-header">
        <h5>Improving the UX user flow from session #322</h5>
        <input type="checkbox" />
      </section>
      <section class="task_item-footer">
        <section class="badges-container">
          <Badge badge-type="team">Design</Badge>
          <Badge badge-type="category">UX</Badge>
          <Badge badge-type="urgent">Urgent</Badge>
        </section>
        <span>Jan 15 - Nov 10</span>
      </section>
    </section>
  </section>
</template>
<script setup>
import Badge from "./Badge.vue";
</script>
