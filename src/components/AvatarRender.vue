<template>
  <div
    class="rounded-full overflow-hidden mx-auto"
    :class="classCustom || 'w-10 h-10'"
  >
    <!-- https://picsum.photos/200/300?random=1 -->
    <img
      class="w-full h-auto object-cover"
      :src="
        img || 'https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png'
      "
      :alt="alt || 'user-profile-avatar'"
      :size="size || 'xs'"
    />
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    alt: String,
    classCustom: String,
    size: String,
  },
};
</script>
