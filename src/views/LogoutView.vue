<template>
  <h1>logout</h1>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import { ROUTE_NAME } from "@/consts/route.const";
import { userLocalStorage } from "@/composables/useLocalStorage";
import { LOCAL_STORAGE } from "@/consts/local_storage.const";

export default {
  setup() {
    const router = useRouter();
    const { error, signOut } = useAuth();

    async function logOut() {
      await signOut();
      if (!error.value) {
        userLocalStorage().removeItem(LOCAL_STORAGE.USER);
        router.push({ name: ROUTE_NAME.LOGIN, params: {} });
      }
    }

    logOut();

    return { error };
  },
};
</script>
