import { ref } from "vue";
import { login, logout, createUser, updateUser } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const res = await login(email, password);
    if (!res)
      throw new Error("Could not sign in because email or password incorrect!");
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

async function signUp(email, password, fullName) {
  error.value = null;
  isPending.value = true;
  try {
    const res = await createUser(email, password);
    if (!res) throw new Error("Could not create a new user!");
    await updateUser(fullName);
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

async function signOut() {
  error.value = null;
  isPending.value = true;
  try {
    const res = await logout();
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useAuth() {
  return { error, isPending, signIn, signUp, signOut };
}
