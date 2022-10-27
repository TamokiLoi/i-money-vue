<template>
  <h1>default layout</h1>
  <slot />
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useUser } from "@/composables/useUser";
import { ROUTE_NAME } from "@/consts/route.const";
export default {
  setup() {
    const router = useRouter();
    const { user } = useUser();

    onMounted(() => {
      if (!user.value) {
        routerLogin();
      }
    });

    function routerLogin() {
      return router.push({ name: ROUTE_NAME.LOGIN, params: {} });
    }

    return {};
  },
};
</script>
