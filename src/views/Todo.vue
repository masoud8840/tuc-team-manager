<template>
  <section class="todo-view container">
    <h1>Tasks</h1>
    <article class="single-member-tasks">
      <h3 class="member-name">Masoud</h3>
      <ul class="tasks-list">
        <li><task-item></task-item></li>
      </ul>
    </article>
  </section>
</template>

<script setup>
import TaskItem from "../components/UI/TaskItem.vue";
</script>
