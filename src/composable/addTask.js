import { firestore } from "../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref } from "vue";

const addTaskError = ref(null);

const addTask = async (dataObj) => {
  const docId = doc(collection(firestore, "ToDo")).id;
  const actualData = { ...dataObj, id: docId };
  addTaskError.value = null;

  await setDoc(doc(firestore, "ToDo", docId), actualData).catch((e) => {
    addTaskError.value = e.message;
  });
};

function useAddTask() {
  return { addTask, addTaskError };
}

export default useAddTask;
