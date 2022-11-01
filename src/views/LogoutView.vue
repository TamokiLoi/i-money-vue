<template>
  <h1>logout</h1>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";
import { ROUTE_NAME } from "@/consts/route.const";

export default {
  setup() {
    const router = useRouter();
    const { error, signOut } = useAuth();

    async function logOut() {
      await signOut();
      if (!error.value) {
        router.push({ name: ROUTE_NAME.LOGIN, params: {} });
      }
    }

    logOut();

    return { error };
  },
};
</script>
