<template>
  <section class="todo-view container">
    <h1>Tasks</h1>
    <article class="single-member-tasks">
      <h3 class="member-name">Masoud</h3>
      <ul class="tasks-list">
        <li><task-item></task-item></li>
      </ul>
      <AddTask @click="toggleAddTaskModalVisibility" />
    </article>
  </section>

  <teleport to="body">
    <Modal modal-title="Add New To Do" v-model="isAddTaskModalVisible">
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
        <label for="categoryInput">Category</label>
        <div class="input-group column">
          <div class="input-group">
            <input type="text" id="categoryInput" />
          </div>
          <div class="input-group bottom">
            <SwitchButton
              true-value="Urgent"
              false-value="NonUrgent"
              v-model="isUrgent"
            >
              <template #trueValue>
                <Urgent />
                <p>Urgent</p>
              </template>
              <template #falseValue>
                <NonUrgent />
                <p>Non-Urgent</p>
              </template>
            </SwitchButton>
          </div>
        </div>
      </div>
      <div class="input-group row">
        <label for="assignedTo">Assigned to</label>
        <select id="assignedTo" disabled>
          <option value="masoud">Masoud Gharedaghi</option>
          <option value="abolfazl">Abolfazl Bakhsh Por</option>
          <option value="maedeh">Maedeh Masalan</option>
        </select>
      </div>
      <button
        @click="onAddTask"
        class="submit-btn"
        :disabled="addTaskStatus !== 'waitingForOperation'"
      >
        {{ addTaskStatusOutput }}
      </button>
    </Modal>
  </teleport>
</template>

<script setup>
import TaskItem from "../components/UI/TaskItem.vue";
import AddTask from "../components/UI/AddTask.vue";
import Modal from "../components/UI/Modal.vue";
import RadioButton from "../components/UI/RadioButton.vue";
import SwitchButton from "../components/UI/SwitchButton.vue";
import Urgent from "../components/icon/Urgent.vue";
import NonUrgent from "../components/icon/NonUrgent.vue";
import { ref, computed } from "vue";

const isAddTaskModalVisible = ref(false);
function toggleAddTaskModalVisibility() {
  isAddTaskModalVisible.value = !isAddTaskModalVisible.value;
}
const modalTeamOptions = ref(["Design", "Development", "Network", "Security"]);
const isUrgent = ref("NonUrgent");
const selectedTeam = ref("Design");
function setActiveTeam(team) {
  selectedTeam.value = team;
}

const addTaskStatus = ref("waitingForOperation");
const addTaskStatusOutput = computed(() => {
  if (addTaskStatus.value === "waitingForOperation") {
    return "Add Task";
  }
  if (addTaskStatus.value === "pending") {
    return "Submiting Request!";
  }
  if (addTaskStatus.value === "success") {
    return "Add Task Succeeded";
  }
});
function onAddTask() {
  console.log("Adding the specific Task");
}
</script>
