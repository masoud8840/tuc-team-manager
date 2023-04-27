import { firestore } from "../firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref } from "vue";

const error = ref(null);

const addTask = async (dataObj) => {
  const docId = doc(collection(firestore, "ToDo")).id;
  const actualData = { ...dataObj, id: docId };

  await setDoc(doc(firestore, "ToDo", docId), actualData).catch((e) => {
    error.value = e.message;
  });
};

function useAddTask() {
  return { addTask, error };
}

export default useAddTask;
