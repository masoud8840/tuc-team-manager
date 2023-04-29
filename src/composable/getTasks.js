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
        });
      });
    },
    (e) => {
      getTasksError.value = e.message;
    }
  );

  // const querySnapshot = await getDocs(collection(firestore, "ToDo"))
  //   .then((res) => {
  //     console.log("Res: ", res);
  //   })
  //   .catch((e) => {
  //     getTasksError.value = e.message;
  //   });

  // querySnapshot.forEach((doc) => {
  //   tasks.value.push(doc.data());
  // });
};

function useGetTasks() {
  return { tasks, getTasksError, getTasks };
}

export default useGetTasks;
