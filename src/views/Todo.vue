<template>
  <loading v-model:active="isLoading" background-color="gray" color="#fafafa" />
  <section class="todo-view container">
    <h1>Tasks</h1>
    <article
      class="single-member-tasks"
      v-for="(member, index) in tasks"
      :key="index"
    >
      <h3 class="member-name">
        {{ member.memberName }}
      </h3>
      <ul class="tasks-list" v-if="member.todos.length > 0">
        <li v-for="todo in member.todos" :key="todo.id">
          <task-item
            :task-id="todo.id"
            :task-title="todo.title"
            :task-team="todo.team"
            :task-category="todo.category"
            :urgent="todo.isUrgent"
            :is-checked="todo.isChecked"
            :do-untill="todo.doUntill"
            :created-at="todo.createdAt"
            @on-check="handleCheck"
          ></task-item>
        </li>
      </ul>
      <h4 v-else>
        There is no assigned task to {{ member.memberName }}, all done.
      </h4>
      <AddTask @click="toggleAddTaskModalVisibility(member.memberName)" />
    </article>
  </section>

  <teleport to="body">
    <Modal modal-title="Add New To Do" v-model="isAddTaskModalVisible">
      <div class="input-group row">
        <label for="taskTitle">Task title</label>
        <input
          type="text"
          id="taskTitle"
          placeholder="What you wanna To Do?"
          v-model.trim="todo.title"
        />
      </div>
      <div class="input-group row">
        <label>Team</label>
        <div class="input-group column col-3">
          <radio-button
            v-for="(team, index) in modalTeamOptions"
            :key="index"
            name="team"
            :value="team"
            v-model="todo.team"
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
            <input
              type="text"
              id="categoryInput"
              v-model.trim="todo.category"
            />
          </div>
          <div class="input-group bottom">
            <SwitchButton
              true-value="Urgent"
              false-value="NonUrgent"
              v-model="todo.isUrgent"
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
      <div class="input-group column">
        <div class="input-group row">
          <label for="assignedTo">Assigned to</label>
          <select id="assignedTo" disabled="true" v-model="todo.assignedTo">
            <option value="masoud">Masoud Gharedaghi</option>
            <option value="abolfazl">Abolfazl Bakhsh Por</option>
            <option value="maedeh">Maedeh Masalan</option>
          </select>
        </div>
        <div class="input-group row">
          <label for="todoUntill">Untill</label>
          <input type="date" id="todoUntill" v-model.trim="todo.doUntill" />
        </div>
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
import { ref, computed, onUnmounted, watch } from "vue";
import useGetTasks from "../composable/getTasks.js";
import useAddTask from "../composable/addTask.js";
import getUpdateTask from "../composable/updateTask";
import deleteTask from "../composable/deleteTask";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const { tasks, getTasksError, getTasks } = useGetTasks();
getTasks();
const isLoading = ref(true);
watch(tasks, (newVal) => {
  isLoading.value = false;
});
const isAddTaskModalVisible = ref(false);
function toggleAddTaskModalVisibility(memberName) {
  isAddTaskModalVisible.value = !isAddTaskModalVisible.value;
  todo.value.assignedTo = memberName;
}
const modalTeamOptions = ref(["Design", "Development", "Network", "Security"]);
const todo = ref({
  id: null,
  title: "",
  team: "Design",
  category: "",
  assignedTo: "masoud",
  isUrgent: "NonUrgent",
  isChecked: false,
  doUntill: "",
  createdAt: null,
});
function setActiveTeam(team) {
  todo.value.team = team;
}

const addTaskStatus = ref("waitingForOperation");
const addTaskStatusOutput = computed(() => {
  function toggleStatus(value) {
    setTimeout(() => {
      addTaskStatus.value = value;
    }, 2000);
  }
  if (addTaskStatus.value === "waitingForOperation") {
    return "Add Task";
  }
  if (addTaskStatus.value === "pending") {
    return "Submiting Request!";
  }
  if (addTaskStatus.value === "success") {
    toggleStatus("waitingForOperation");
    isAddTaskModalVisible.value = false;
    todo.value = {
      id: null,
      title: "",
      team: "Design",
      category: "",
      assignedTo: "masoud",
      isUrgent: "NonUrgent",
      isChecked: false,
      doUntill: "",
      createdAt: null,
    };
    return "Add Task Succeeded";
  }
  if (addTaskStatus.value === "failed") {
    toggleStatus("waitingForOperation");
    return "Something went wrong! please try again later.";
  }
});

const { addTaskError, addTask } = useAddTask();
const onAddTask = async () => {
  if (
    todo.value.title === "" ||
    todo.value.category === "" ||
    todo.value.doUntill === ""
  ) {
    addTaskStatus.value = "failed";
    return;
  }
  addTaskStatus.value = "pending";
  const now = new Date().getTime();
  const doUntill = new Date(todo.value.doUntill).getTime();
  todo.value.createdAt = now;
  todo.value.doUntill = doUntill;
  await addTask(todo.value);
  if (addTaskError.value) addTaskStatus.value = "failed";
  else addTaskStatus.value = "success";
};

function handleCheck(newInformations) {
  tasks.value.map((tsk) => {
    tsk.todos.map((nastedTsk) => {
      if (nastedTsk.id === newInformations.id) {
        nastedTsk.isChecked = newInformations.checkedSatus;
        updateChecked(newInformations.id, newInformations.checkedSatus);
      }
    });
  });
}

onUnmounted(() => {
  tasks.value.map((tsk) => {
    tsk.todos.map((nastedTsk) => {
      if (nastedTsk.isChecked) {
        deleteTask(nastedTsk.id);
      }
    });
  });
});

async function updateChecked(givenID, isChecked) {
  const update = getUpdateTask();
  await update(givenID, isChecked);
}
</script>
