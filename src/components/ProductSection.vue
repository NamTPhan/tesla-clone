<template>
  <div class="overflow-x-hidden">
    <!-- https://tailwindcss.com/docs/content-configuration#dynamic-class-names -->
    <div
      :class="`${mobileBgImage} ${desktopBgImage}`"
      class="bg-cover bg-no-repeat bg-center h-screen w-screen justify-center flex"
    >
      <div class="title-container">
        <p class="text-[40px] md:text-[44px]">{{ title }}</p>
        <a
          v-if="subtitleLink && isSubtitleALink"
          class="underline"
          :href="subtitleLink"
          target="_blank"
          >{{ subtitle }}</a
        >
        <p v-if="!isSubtitleALink">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductSection",
  props: {
    desktopBgImage: {
      type: String,
      default: null,
      required: true,
    },
    mobileBgImage: {
      type: String,
      default: null,
      required: true,
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    subtitle: {
      type: String,
      default: "Schedule a Demo Drive",
    },
    subtitleLink: {
      type: String,
      default: "https://www.tesla.com/drive",
    },
    isSubtitleALink: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
.title-container {
  @apply mt-[180px] md:mt-[200px];
}
</style>
