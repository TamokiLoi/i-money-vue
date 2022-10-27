<template>
  <div>Home</div>
  <div class="mt-6">{{ user?.displayName }}</div>
  <button @click="logOut">Logout</button>
</template>

<script>
import { useRouter } from "vue-router";

import { useAuth } from "@/composables/useAuth";
import { useUser } from "@/composables/useUser";
import { ROUTE_NAME } from "@/consts/route.const";
export default {
  setup() {
    const router = useRouter();
    const { error, signOut } = useAuth();
    const { user } = useUser();

    async function logOut() {
      await signOut();
      if (!error.value) router.push({ name: ROUTE_NAME.LOGIN, params: {} });
    }

    return { user, logOut };
  },
};
</script>
