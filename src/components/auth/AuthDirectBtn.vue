<template>
  <!-- Start: Direction -->
  <div class="w-full text-center mt-6">
    <span class="font-semibold">{{ msg }}</span>
    <span class="ml-1">
      <router-link
        :to="{ name: route, params: params }"
        class="text-primary font-bold"
        >{{ title }}</router-link
      >
    </span>
  </div>
  <!-- End: Direction -->
</template>

<script>
export default {
  props: {
    msg: String,
    route: String,
    title: String,
    params: {},
  },
};
</script>
