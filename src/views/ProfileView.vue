<template>
  <div v-if="user">
    <!-- Start: Info -->
    <div class="row">
      <div class="container mx-auto p-8">
        <div class="text-center">
          <AvatarRender :classCustom="`w-24 h-24`" />
          <div class="font-bold text-2xl text-primary mt-3">
            {{ user?.displayName }}
          </div>
          <p class="font-semibold text-gray-400 mt-1">
            {{ user?.email }}
          </p>
        </div>
      </div>
    </div>
    <!-- End: Info -->

    <!-- Start: Menu -->
    <div class="row">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1">
          <div class="col-span-1">
            <h3 class="font-bold text-xl text-primary mb-2">General</h3>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <div class="col-span-1">
            <ul>
              <li
                class="text-dark"
                v-for="(item, index) in profileOptions"
                :key="item.name"
              >
                <router-link
                  :to="item.route"
                  class="flex items-center justify-between py-3"
                >
                  <div
                    class="flex items-center text-left"
                    :class="{ 'text-red': index === profileOptions.length - 1 }"
                  >
                    <IconRender :icon="item.icon" />
                    <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                  </div>
                  <div class="text-right">
                    <i class="t2ico t2ico-arrow-right"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Menu -->
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTION_ITEMS } from "@/consts/common.const";
import { useUser } from "@/composables/useUser";

import AvatarRender from "@/components/AvatarRender.vue";
import IconRender from "@/components/IconRender.vue";

export default {
  components: { AvatarRender, IconRender },
  setup() {
    const profileOptions = reactive(PROFILE_OPTION_ITEMS);
    const { user } = useUser();

    return { user, profileOptions };
  },
};
</script>
