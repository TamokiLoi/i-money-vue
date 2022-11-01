import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

export function useUser() {
  return { user };
}
