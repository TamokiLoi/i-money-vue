import { ref } from "vue";
import { db } from "@/configs/firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);
  const isPending = ref(false);

  async function readRecords() {
    error.value = null;
    isPending.value = true;
    try {
      const querySnapshot = await getDocs(collection(db, name));
      const records = [];
      querySnapshot.forEach((doc) => {
        records.push(doc.data());
      });
      return records;
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }

  async function addRecord(record) {
    error.value = null;
    isPending.value = true;
    try {
      const res = await addDoc(collection(db, name), record);
      return res;
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }

  async function readRecord(id) {
    error.value = null;
    isPending.value = true;
    try {
      const docSnap = await getDoc(doc(db, name, id));
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }

  async function updateRecord(id, record) {
    error.value = null;
    isPending.value = true;
    try {
      const res = await updateDoc(doc(db, name, id), record);
      return res;
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }

  async function deleteRecord(id) {
    error.value = null;
    isPending.value = true;
    try {
      const res = await deleteDoc(doc(db, name, id));
      return res;
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }

  return {
    error,
    isPending,
    readRecords,
    addRecord,
    readRecord,
    updateRecord,
    deleteRecord,
  };
};

export default useCollection;
