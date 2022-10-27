<template>
  <!-- Start: Form -->
  <form
    class="flex flex-col justify-start space-y-6"
    @submit.prevent="$emit('submitForm', user)"
  >
    <div v-if="isSignUp" class="row">
      <label class="flex flex-col" for="fullName">
        <span class="font-semibold">Full Name</span>
        <input
          id="fullName"
          class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
          type="text"
          placeholder="iMoney"
          v-model="user.fullName"
        />
      </label>
    </div>
    <div class="row">
      <label class="flex flex-col" for="email">
        <span class="font-semibold">Email Address</span>
        <input
          id="email"
          class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
          type="email"
          placeholder="example@example.com"
          autocomplete="username"
          v-model="user.email"
        />
      </label>
    </div>
    <div class="row">
      <label class="flex flex-col" for="password">
        <span class="font-semibold">Password</span>
        <input
          id="password"
          class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
          v-model="user.password"
        />
      </label>
    </div>
    <div class="row">
      <button
        v-if="!isPending"
        class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
        type="submit"
      >
        {{ isSignUp ? "Sign Up" : "Sign In" }}
      </button>
      <button
        v-else
        class="w-full py-3 text-center bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
        type="button"
        disabled
      >
        Loading...
      </button>
    </div>
  </form>
  <!-- End: Form -->

  <!-- Start: Error -->
  <div v-if="error" class="text-left mt-3 text-red">
    <span>{{ error }}</span>
  </div>
  <!-- End: Error -->
</template>

<script>
import { defineComponent, computed } from "vue";
import { useAuth } from "@/composables/useAuth";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    isSignUp: Boolean,
  },
  emits: ["update:modelValue", "submitForm"],
  setup(props, { emit }) {
    const { error, isPending } = useAuth();

    const user = computed({
      // Use computed to wrap the object
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return { user, error, isPending };
  },
});
</script>
