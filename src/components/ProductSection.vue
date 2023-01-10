<template>
  <div class="overflow-x-hidden">
    <!-- https://tailwindcss.com/docs/content-configuration#dynamic-class-names -->
    <div
      :class="`${mobileBgImage} ${desktopBgImage}`"
      class="bg-cover bg-no-repeat bg-center h-screen w-screen justify-center flex"
    >
      <div
        class="mt-[180px] md:mt-[200px] flex flex-col justify-between w-full md:w-auto mx-8 md:mx-0"
      >
        <div>
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

        <div class="mb-28">
          <div class="flex flex-col md:flex-row justify-center">
            <a
              v-if="primaryBtnLabel"
              class="primary-action-btn"
              :href="primaryBtnLink"
              target="_blank"
              >{{ primaryBtnLabel }}</a
            >
            <a
              v-if="subBtnLabel"
              class="sub-action-btn"
              :href="subBtnLink"
              target="_blank"
              >{{ subBtnLabel }}</a
            >
          </div>
        </div>
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
    primaryBtnLabel: {
      type: String,
      default: null,
    },
    primaryBtnLink: {
      type: String,
      default: null,
    },
    subBtnLabel: {
      type: String,
      default: null,
    },
    subBtnLink: {
      type: String,
      default: null,
    },
  },
});
</script>

<style scoped>
.primary-action-btn {
  background-color: rgba(23, 26, 32, 0.8);
  @apply py-1 px-6 text-white leading-loose min-w-[264px] min-h-[40px] rounded-[5px];
}

.sub-action-btn {
  background-color: rgba(244, 244, 244, 0.65);
  @apply py-1 px-6 leading-loose min-w-[264px] min-h-[40px] ml-0 md:ml-8 mt-5 md:mt-0 rounded-[5px];
}
</style>
