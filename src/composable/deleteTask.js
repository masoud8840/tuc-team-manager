import { firestore } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const deleteTask = async (id) => {
  await deleteDoc(doc(firestore, "ToDo", id));
};

export default deleteTask;
