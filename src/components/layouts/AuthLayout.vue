<template>
  <NavigationBrand />
  <slot />
</template>

<script>
import NavigationBrand from "@/components/navigations/NavigationBrand.vue";
export default {
  components: { NavigationBrand },
};
</script>
