<template>
  <!-- Start: Error -->
  <div v-if="error" class="text-left mt-3 text-red px-8">
    <span>{{ error }}</span>
  </div>
  <!-- End: Error -->

  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                >
                  USD
                </span>
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  v-model="transaction.total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  v-model="transaction.category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <IconRender :icon="ICON_NAME.DOCUMENT" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-2">
                <input
                  id="note"
                  v-model="transaction.note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <IconRender :icon="ICON_NAME.CALENDAR" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-2">
                <div class="text-dark w-full">{{ transaction.time }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <IconRender :icon="ICON_NAME.WALLET" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Main Form -->

    <div class="row mt-8" v-if="!isAdvancedForm">
      <button
        @click="isAdvancedForm = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>

    <!-- Start: Advanced Form -->
    <template v-if="isAdvancedForm">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <IconRender :icon="ICON_NAME.LOCATION" />
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-2">
                  <input
                    id="location"
                    v-model="transaction.location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <IconRender :icon="ICON_NAME.USERS" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="avatar" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <IconRender :icon="ICON_NAME.CAMERA" />
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold">Upload photos</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- End: Advanced Form -->

    <button class="bg-primary text-white" type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import { ICON_NAME } from "@/consts/common.const";
import IconRender from "@/components/IconRender.vue";

export default {
  components: { IconRender },
  setup() {
    const { user } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const isAdvancedForm = ref(false);
    const transaction = ref({
      userId: user?.value?.uid || "",
      total: 0,
      category: "",
      note: "",
      time: new Date(),
      location: "",
      avatar: "",
    });

    async function onSubmit() {
      transaction.value.total = parseInt(transaction.value.total);
      const body = Object.assign({}, transaction.value);
      const res = await addRecord(body);
      if (!error.value) console.log("res", res);
    }

    return {
      ICON_NAME,
      isAdvancedForm,
      transaction,
      onSubmit,
      error,
    };
  },
};
</script>
