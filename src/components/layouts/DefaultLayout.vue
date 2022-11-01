<template>
  <NavigationTop />
  <slot />
  <NavigationBottom v-if="meta.isFooter" />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import NavigationTop from "@/components/navigations/NavigationTop.vue";
import NavigationBottom from "@/components/navigations/NavigationBottom.vue";

export default {
  components: { NavigationTop, NavigationBottom },
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route?.meta),
    };
  },
};
</script>
