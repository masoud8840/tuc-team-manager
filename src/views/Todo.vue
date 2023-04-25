<template>
  <section class="todo-view container">
    <h1>Tasks</h1>
    <article class="single-member-tasks">
      <h3 class="member-name">Masoud</h3>
      <ul class="tasks-list">
        <li><task-item></task-item></li>
      </ul>
      <add-task></add-task>
    </article>
  </section>

  <teleport to="body">
    <Modal modal-title="Add New To Do">
      <div class="input-group row">
        <label for="taskTitle">Task title</label>
        <input type="text" id="taskTitle" placeholder="What you wanna To Do?" />
      </div>
      <div class="input-group row">
        <label>Team</label>
        <div class="input-group column col-3">
          <radio-button
            v-for="(team, index) in modalTeamOptions"
            :key="index"
            name="team"
            :value="team"
            v-model="selectedTeam"
            @click="setActiveTeam(team)"
            :disabled="index === 3"
          >
            <img :src="`/${team}Icon.svg`" alt="team-icon" />
            <p class="text-sm">{{ team }}</p>
          </radio-button>
        </div>
      </div>
      <div class="input-group row">
        <label for="assignedTo">Assigned to</label>
        <select id="assignedTo" disabled>
          <option value="masoud">Masoud</option>
          <option value="abolfazl">abolfazl</option>
          <option value="maedeh">maedeh</option>
        </select>
      </div>
      <button @click="handleSubmit">handle</button>
    </Modal>
  </teleport>
</template>

<script setup>
import TaskItem from "../components/UI/TaskItem.vue";
import AddTask from "../components/UI/AddTask.vue";
import Modal from "../components/UI/Modal.vue";
import RadioButton from "../components/UI/RadioButton.vue";
import { ref } from "vue";

const modalTeamOptions = ref(["Design", "Development", "Network", "Security"]);
const selectedTeam = ref("");
function setActiveTeam(team) {
  selectedTeam.value = team;
}
</script>
