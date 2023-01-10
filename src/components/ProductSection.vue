<template>
  <div class="overflow-x-hidden">
    <!-- https://tailwindcss.com/docs/content-configuration#dynamic-class-names -->
    <div
      :class="`${mobileBgImage} ${desktopBgImage}`"
      class="bg-cover bg-no-repeat bg-center h-screen w-screen justify-center flex items-center"
    >
      <div class="title-container">
        <h1>test</h1>
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
    },
    mobileBgImage: {
      type: String,
      default: null,
    },
  },
});
</script>

<style scoped>
.title-container {
}
</style>
