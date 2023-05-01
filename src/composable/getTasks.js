import { ref } from "vue";
import { firestore } from "../firebase/config";
import { onSnapshot, collection, getDocs } from "firebase/firestore";

const getTasksError = ref(null);
const tasks = ref([]);
const getTasks = () => {
  getTasksError.value = null;
  tasks.value = [];
  const unsubscribe = onSnapshot(
    collection(firestore, "ToDo"),
    (data) => {
      tasks.value = [
        {
          memberName: "masoud",
          todos: [],
        },
        {
          memberName: "abolfazl",
          todos: [],
        },
      ];
      // Respond to data
      data.forEach((doc) => {
        tasks.value.map((tsk) => {
          if (doc.data().assignedTo === tsk.memberName) {
            tsk.todos.push(doc.data());
          }
          tsk.todos.sort((a, b) => a.createdAt + b.createdAt);
        });
      });
    },
    (e) => {
      getTasksError.value = e.message;
    }
  );
};

function useGetTasks() {
  return { tasks, getTasksError, getTasks };
}

export default useGetTasks;
