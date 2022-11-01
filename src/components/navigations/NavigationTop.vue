<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <AvatarRender v-if="meta?.leading" />
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta?.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <IconRender :icon="ICON_NAME.NOTIFICATION" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { ICON_NAME } from "@/consts/common.const";
import AvatarRender from "@/components/AvatarRender.vue";
import IconRender from "@/components/IconRender.vue";

export default {
  components: { AvatarRender, IconRender },
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route?.meta),
      ICON_NAME,
    };
  },
};
</script>
