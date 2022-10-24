<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="iMoney"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="emailAddress">
            <span class="font-semibold">Email Address</span>
            <input
              id="emailAddress"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@example.com"
              autocomplete="username"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            class="w-full py-3 text-center bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <!-- End: Form -->

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm ready a member.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: ROUTE_NAME.LOGIN, params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
      <!-- End: Direction -->
    </div>
  </div>
</template>

<script>
import { ROUTE_NAME } from "@/consts/route.const";
export default {
  setup() {
    console.log("ROUTE_NAME", ROUTE_NAME.LOGIN);
    function onSubmit() {}
    return { ROUTE_NAME, onSubmit };
  },
};
</script>
