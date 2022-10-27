import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk7AczKAyBcYs_MY_LvRJfyklQFzJthfE",
  authDomain: "imoney-vue-60a5b.firebaseapp.com",
  projectId: "imoney-vue-60a5b",
  storageBucket: "imoney-vue-60a5b.appspot.com",
  messagingSenderId: "525450564911",
  appId: "1:525450564911:web:ad80443b736f04830afdda",
  measurementId: "G-34YYDDB0XM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  console.log("1");
  return signOut(auth);
};

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateUser = (name, avatar = "") => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: avatar,
  });
};

const getTransactions = async () => {
  const querySnapshot = await getDocs(query(collection(db, "transactions")));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

const getTransaction = async (transactionId = "") => {
  const docRef = doc(db, "transactions", transactionId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export {
  auth,
  db,
  login,
  logout,
  createUser,
  updateUser,
  getTransactions,
  getTransaction,
};
