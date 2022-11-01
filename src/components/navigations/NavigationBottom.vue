<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="item in navBottomItems" :key="item.name">
          <router-link :to="item.route">
            <div
              :class="{
                'text-primary': checkRoute(item.route.name),
              }"
            >
              <IconRender :icon="item.icon" />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-plus
      class="bg-dark-light w-[3.75rem] h-[1.875rem] rounded-bl-[3.75rem] rounded-br-[3.75rem] top-0"
    >
      <div
        class="flex items-center justify-center bg-primary text-white w-12 h-12 -top-6 rounded-full cursor-pointer"
        @click="routerToTransactionPage"
      >
        <IconRender :icon="ICON_NAME.PLUS" />
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { NAV_BOTTOM_ITEMS, ICON_NAME } from "@/consts/common.const";
import { ROUTE_NAME } from "@/consts/route.const";
import IconRender from "@/components/IconRender.vue";

export default {
  components: { IconRender },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const navBottomItems = reactive(NAV_BOTTOM_ITEMS);

    function checkRoute(name) {
      const routerPath = route?.path?.split("/")[1];
      if (!routerPath && name === "home") return true;
      return routerPath === name;
    }

    function routerToTransactionPage() {
      router.push({ name: ROUTE_NAME.TRANSACTION, params: {} });
    }

    return {
      ICON_NAME,
      navBottomItems,
      checkRoute,
      routerToTransactionPage,
    };
  },
};
</script>

<style lang="css" scoped>
footer {
  @apply max-w-[40rem] left-1/2 -translate-x-2/4;
}

footer#footer > div[data-plus],
footer#footer > div[data-plus] > div {
  @apply absolute left-1/2 -translate-x-2/4;
}

footer#footer > div[data-plus] > div {
  font-family: "t2ico";
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
