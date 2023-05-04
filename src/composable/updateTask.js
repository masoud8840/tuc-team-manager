import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/config.js";

const updateTask = async (docID, checkStatus) => {
  const documentRef = doc(firestore, "ToDo", docID);
  await updateDoc(documentRef, { isChecked: checkStatus });
};

function getUpdateTask() {
  return updateTask;
}

export default getUpdateTask;
