import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { userLocalStorage } from "@/composables/useLocalStorage";
import { LOCAL_STORAGE } from "@/consts/local_storage.const";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
  userLocalStorage().setItem(LOCAL_STORAGE.USER, _user);
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser, user };
}
