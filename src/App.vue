<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ROUTE_LAYOUT } from "@/consts/route.const";

export default {
  setup() {
    const route = useRoute();

    return {
      route,
      layout: computed(
        () => (route?.meta?.layout || ROUTE_LAYOUT.DEFAULT) + "-layout"
      ),
    };
  },
};
</script>
